
import React, {useState, useEffect, useRef} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {FlatList, View} from 'react-native';
import {Header, SearchInput, RegionListItem, StateListItem, Text, Button} from '../../components';
import globalStyles from '../../helpers/globalStyles';
import {StackParamsList} from '../../navigators/Stack';
import {useQuery} from '@apollo/client';
import {GET_REGIONS} from '../../qraphql/queries';
import {Region, Regions, SortedRegion} from '../../helpers/interfaces';
import {getSortedRegions} from '../../helpers/functions';
import styles from './styles';
import {RouteProp} from '@react-navigation/native';
import _ from 'lodash';

export type DestinationScreenNavigationType = StackNavigationProp<StackParamsList, 'stack.destination'>;

interface Props {
  navigation: DestinationScreenNavigationType,
  route: RouteProp<StackParamsList>
}

const Destination:React.FC<Props> = ({navigation, route}) => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [sortedRegions, setSortedRegions] = useState<SortedRegion[]>([]);
  const [filteredSortedRegions, setFilteredSortedRegions] = useState<SortedRegion[]>([]);
  const [selectedRegion, setSelectedRegion] = useState<Region|null>(null);
  const {data: regions, loading} = useQuery<Regions>(GET_REGIONS);
  const flatlistRef = useRef<FlatList>(null);
  const setRegion = route?.params?.setRegion;

  useEffect(() => {
    if (regions?.regions && regions?.regions.length) {
      const data = getSortedRegions(regions.regions);
      setSortedRegions(data);
    }
  }, [regions]);

  useEffect(() => {
    if (sortedRegions.length > 0) {
      setFilteredSortedRegions(sortedRegions);
    }
  }, [sortedRegions]);

  const renderItem = ({item, index}: {item: SortedRegion, index: number}) => (
    <>
      {index === 0 && (
        <RegionListItem setSelected={() => setSelectedRegion(null)} title="Any destination" isSelected={selectedRegion === null} />
      )}
      <StateListItem title={item.state} />
      <FlatList
        data={item.data}
        renderItem={({item}:{item: Region}) => <RegionListItem setSelected={() => setSelectedRegion(item)} title={item.name} isSelected={selectedRegion?.id === item.id} />}
        keyExtractor={(item, index) => String(index)}
      />
    </>
  );

  useEffect(() => {
    if (searchValue === '') {
      setFilteredSortedRegions(sortedRegions);
    } else {
      const result: SortedRegion[] = [];
      sortedRegions.forEach(region => {
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
      sortedRegions.forEach(region => {
        region.data.forEach(item => {
          if (item.id === selectedRegion?.id) {
            itemIndex = sortedRegions.indexOf(region);
            found = true;
          }
        });
      });
      if (found) {
        flatlistRef.current?.scrollToIndex({
          index: itemIndex,
        });
      }
    }, 10);
  }, [selectedRegion]);

  const renderHeaderRightText: () => string|undefined = () => {
    if (selectedRegion === null) {
      return undefined;
    }

    return 'Clear All (1)';
  };

  const handleSearch = () => {
    if (setRegion) {
      setRegion(selectedRegion);
    }

    navigation.goBack();
  };

  return (
    <View style={globalStyles.safeContainer}>
      <Header navigation={navigation} title="Where" onRightPress={() => setSelectedRegion(null)} rightText={renderHeaderRightText()} />
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

export default Destination;
