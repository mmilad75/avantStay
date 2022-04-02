import {StackNavigationProp} from '@react-navigation/stack';
import React, {useState} from 'react';
import {View, Text, Header, SearchInput} from '../../components';
import globalStyles from '../../helpers/globalStyles';
import {ExploreStackParamsList} from '../../navigators/Explore';

export type DestinationScreenNavigationType = StackNavigationProp<ExploreStackParamsList, 'explore.home'>;

interface Props {
  navigation: DestinationScreenNavigationType
}

const Destination:React.FC<Props> = ({navigation}) => {
  const [a, setA] = useState<string>('');
  return (
    <View style={globalStyles.safeContainer}>
      <Header navigation={navigation} title="Where" rightText="Clear All (1)" />
      <View style={globalStyles.contentContainer}>
        <SearchInput placeholder="Search by destiation name" value={a} setValue={setA} />
        <Text> destination</Text>
      </View>
    </View>
  );
};

export default Destination;
