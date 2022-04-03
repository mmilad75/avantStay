import React, {useState, useEffect, useRef} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {FlatList} from 'react-native';
import {View, Header, SearchInput, RegionListItem, StateListItem} from '../../components';
import globalStyles from '../../helpers/globalStyles';
import {StackParamsList} from '../../navigators/Stack';
import {useQuery} from '@apollo/client';
import {GET_REGIONS} from '../../qraphql/queries';
import {Region, Regions, SortedRegion} from '../../helpers/interfaces';
import {getSortedRegions} from '../../helpers/functions';

export type DestinationScreenNavigationType = StackNavigationProp<StackParamsList, 'stack.destination'>;

interface Props {
  navigation: DestinationScreenNavigationType
}

const Destination:React.FC<Props> = ({navigation}) => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [sortedRegions, setSortedRegions] = useState<SortedRegion[]>([]);
  const [filteredSortedRegions, setFilteredSortedRegions] = useState<SortedRegion[]>([]);
  const [selectedRegion, setSelectedRegion] = useState<string>('');
  const {data: regions} = useQuery<Regions>(GET_REGIONS);
  const flatlistRef = useRef<FlatList>(null);

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
        <RegionListItem setSelected={() => setSelectedRegion('')} title="Any destination" isSelected={selectedRegion === ''} />
      )}
      <StateListItem title={item.state} />
      <FlatList
        data={item.data}
        renderItem={({item}:{item: Region}) => <RegionListItem setSelected={() => setSelectedRegion(item.id)} title={item.name} isSelected={selectedRegion === item.id} />}
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
        if (region.state.toLowerCase().includes(searchValue.toLowerCase())) {
          result.push(region);
        } else {
          const sortedRegion: SortedRegion = {
            data: [],
            state: '',
          };
          region.data.forEach(item => {
            if (typeof item.name === 'string' && item.name.toLowerCase().includes(searchValue.toLowerCase())) {
              const parts = item.name.split(new RegExp(`(${searchValue.toLowerCase()})`));
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
          if (item.id === selectedRegion) {
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
    if (selectedRegion === '') {
      return undefined;
    }

    return 'Clear All (1)';
  };

  return (
    <View style={globalStyles.safeContainer}>
      <Header navigation={navigation} title="Where" onRightPress={() => setSelectedRegion('')} rightText={renderHeaderRightText()} />
      <View style={globalStyles.contentContainer}>
        <SearchInput placeholder="Search by destiation name" value={searchValue} setValue={setSearchValue} />
        <FlatList
          data={filteredSortedRegions}
          renderItem={renderItem}
          keyExtractor={(item, index) => String(index)}
          ref={flatlistRef}
          extraData={regions}
        />
      </View>
    </View>
  );
};

export default Destination;
