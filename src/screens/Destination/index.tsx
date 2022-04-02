import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {View, Text, Header} from '../../components';
import globalStyles from '../../helpers/globalStyles';
import {ExploreStackParamsList} from '../../navigators/Explore';

export type DestinationScreenNavigationType = StackNavigationProp<ExploreStackParamsList, 'explore.home'>;

interface Props {
  navigation: DestinationScreenNavigationType
}

const Destination:React.FC<Props> = ({navigation}) => (
  <View style={globalStyles.safeContainer}>
    <Header navigation={navigation} title="Where" rightText="Clear All (1)" />
    <View style={globalStyles.contentContainer}>
      <Text> destination</Text>
    </View>
  </View>
);

export default Destination;
