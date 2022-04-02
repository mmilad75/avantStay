import React, {useState, useEffect} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {View, Text, Header, SearchInput, RegionListItem} from '../../components';
import globalStyles from '../../helpers/globalStyles';
import {ExploreStackParamsList} from '../../navigators/Explore';
import {useQuery} from '@apollo/client';
import {GET_REGIONS} from '../../qraphql/queries';
import {Regions, SortedRegion} from '../../helpers/interfaces';
import {getSortedRegions} from '../../helpers/functions';

export type DestinationScreenNavigationType = StackNavigationProp<ExploreStackParamsList, 'explore.home'>;

interface Props {
  navigation: DestinationScreenNavigationType
}

const Destination:React.FC<Props> = ({navigation}) => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [sortedRegions, setSortedRegions] = useState<SortedRegion[]>([]);
  const [selected, setSelected] = useState(false);
  const {data: regions} = useQuery<Regions>(GET_REGIONS);

  useEffect(() => {
    if (regions?.regions && regions?.regions.length) {
      const data = getSortedRegions(regions.regions);
      setSortedRegions(data);
    }
  }, [regions]);

  return (
    <View style={globalStyles.safeContainer}>
      <Header navigation={navigation} title="Where" rightText="Clear All (1)" />
      <View style={globalStyles.contentContainer}>
        <SearchInput placeholder="Search by destiation name" value={searchValue} setValue={setSearchValue} />
        <RegionListItem setSelected={setSelected} isSelected={selected} title="Milad" />
      </View>
    </View>
  );
};

export default Destination;
