
import React, {useState, useEffect, useRef} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {FlatList, View} from 'react-native';
import {Header, SearchInput, RegionListItem, StateListItem, Text, Button} from '../../components';
import globalStyles from '../../helpers/globalStyles';
import {StackParamsList} from '../../navigators/Explore';
import {useQuery} from '@apollo/client';
import {GET_REGIONS} from '../../qraphql/queries';
import {Region, Regions, SortedRegion} from '../../helpers/interfaces';
import styles from './styles';
import {RouteProp} from '@react-navigation/native';
import _ from 'lodash';
import {regionStore} from '../../store';
import {observer} from 'mobx-react-lite';

export type DestinationScreenNavigationType = StackNavigationProp<StackParamsList, 'explore.destination'>;

interface Props {
  navigation: DestinationScreenNavigationType,
  route: RouteProp<StackParamsList>
}

const Destination:React.FC<Props> = ({navigation}) => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [filteredSortedRegions, setFilteredSortedRegions] = useState<SortedRegion[]>([]);
  const {data: regions, loading} = useQuery<Regions>(GET_REGIONS);
  const flatlistRef = useRef<FlatList>(null);

  useEffect(() => {
    if (regions?.regions && regions?.regions.length) {
      regionStore.addRegions(regions.regions);
    }
  }, [regions]);

  useEffect(() => {
    if (regionStore.regions.length > 0) {
      setFilteredSortedRegions(regionStore.regions);
    }
  }, [regionStore.regions]);

  const renderItem = ({item, index}: {item: SortedRegion, index: number}) => (
    <>
      {index === 0 && (
        <RegionListItem setSelected={() => regionStore.addDestination(null)} title="Any destination" isSelected={regionStore.destination === null} />
      )}
      <StateListItem title={item.state} />
      <FlatList
        data={item.data}
        renderItem={({item}:{item: Region}) => <RegionListItem setSelected={() => regionStore.addDestination(item)} title={item.name} isSelected={regionStore.destination?.id === item.id} />}
        keyExtractor={(item, index) => String(index)}
      />
    </>
  );

  useEffect(() => {
    if (searchValue === '') {
      setFilteredSortedRegions(regionStore.regions);
    } else {
      const result: SortedRegion[] = [];
      regionStore.regions.forEach(region => {
        let stateName: string = '';
        if (typeof region.state === 'string') {
          stateName = region.state;
        } else {
          stateName = region.state.join('');
        }

        stateName = stateName.toLowerCase();
        if (stateName.includes(searchValue.toLowerCase())) {
          if (stateName.includes(searchValue.toLowerCase())) {
            const parts: string[] = stateName.split(new RegExp(`(${searchValue.toLowerCase()})`));
            if (parts[0] === '' && parts[1]) {
              parts[1] = _.capitalize(parts[1]);
            } else {
              parts[0] = _.capitalize(parts[0]);
            }

            const sortedRegion: SortedRegion = {
              data: region.data,
              state: parts,
            };

            result.push(sortedRegion);
          }
        } else {
          const sortedRegion: SortedRegion = {
            data: [],
            state: '',
          };
          region.data.forEach(item => {
            let itemName: string = '';
            if (typeof item.name === 'string') {
              itemName = item.name;
            } else {
              itemName = item.name.join('');
            }

            itemName = itemName.toLowerCase();
            if (itemName.includes(searchValue.toLowerCase())) {
              const parts: string[] = itemName.split(new RegExp(`(${searchValue.toLowerCase()})`));
              if (parts[0] === '' && parts[1]) {
                parts[1] = _.capitalize(parts[1]);
              } else {
                parts[0] = _.capitalize(parts[0]);
              }

              const newRegion: Region = {
                ...item,
                name: parts,
              };
              sortedRegion.data.push(newRegion);
            }
          });
          if (sortedRegion.data.length > 0) {
            sortedRegion.state = region.state;
            result.push(sortedRegion);
          }
        }
      });
      setFilteredSortedRegions(result);
    }
  }, [searchValue]);

  useEffect(() => {
    setSearchValue('');
    setTimeout(() => {
      let itemIndex: number = 0;
      let found: boolean = false;
      regionStore.regions.forEach(region => {
        region.data.forEach(item => {
          if (item.id === regionStore.destination?.id) {
            itemIndex = regionStore.regions.indexOf(region);
            found = true;
          }
        });
      });
      if (found && filteredSortedRegions.length) {
        flatlistRef.current?.scrollToIndex({
          index: itemIndex,
        });
      }
    }, 10);
  }, [regionStore.destination]);

  const renderHeaderRightText: () => string|undefined = () => {
    if (regionStore.destination === null) {
      return undefined;
    }

    return 'Clear All (1)';
  };

  const handleSearch = () => {
    regionStore.addDestination(regionStore.destination);
    navigation.goBack();
  };

  return (
    <View style={globalStyles.safeContainer}>
      <Header navigation={navigation} title="Where" onRightPress={() => regionStore.addDestination(null)} rightText={renderHeaderRightText()} />
      <View style={globalStyles.contentContainer}>
        <SearchInput placeholder="Search by destiation name" value={searchValue} setValue={setSearchValue} />
        {!loading && filteredSortedRegions.length > 0 && <FlatList
          data={filteredSortedRegions}
          renderItem={renderItem}
          keyExtractor={(item, index) => String(index)}
          ref={flatlistRef}
        />}
        {!loading && filteredSortedRegions.length === 0 && (
          <Text style={styles.notFoundText}>
              We could not find any destinations matching your request. Send us a chat if you need help!
          </Text>
        )}
      </View>
      <View style={styles.footerContainer}>
        <Button onPress={handleSearch} style={globalStyles.primaryButton}>
          <Text font="semiBold" style={globalStyles.primaryButtonText}>Search</Text>
        </Button>
      </View>
    </View>
  );
};

export default observer(Destination);
