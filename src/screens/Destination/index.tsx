import React, {useState, useEffect} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {View, Header, SearchInput, RegionListItem, FlatList, StateListItem} from '../../components';
import globalStyles from '../../helpers/globalStyles';
import {ExploreStackParamsList} from '../../navigators/Explore';
import {useQuery} from '@apollo/client';
import {GET_REGIONS} from '../../qraphql/queries';
import {Region, Regions, SortedRegion} from '../../helpers/interfaces';
import {getSortedRegions} from '../../helpers/functions';

export type DestinationScreenNavigationType = StackNavigationProp<ExploreStackParamsList, 'explore.home'>;

interface Props {
  navigation: DestinationScreenNavigationType
}

const Destination:React.FC<Props> = ({navigation}) => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [sortedRegions, setSortedRegions] = useState<SortedRegion[]>([]);
  const [selectedRegion, setSelectedRegion] = useState<string>('');
  const {data: regions} = useQuery<Regions>(GET_REGIONS);

  useEffect(() => {
    if (regions?.regions && regions?.regions.length) {
      const data = getSortedRegions(regions.regions);
      setSortedRegions(data);
    }
  }, [regions]);

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
          data={sortedRegions}
          renderItem={renderItem}
          keyExtractor={(item, index) => String(index)}
        />
      </View>
    </View>
  );
};

export default Destination;
