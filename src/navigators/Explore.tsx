/* eslint-disable no-unused-vars */
import React from 'react';
import {CardStyleInterpolators, createStackNavigator} from '@react-navigation/stack';
import Destination from '../screens/Destination';
import {Region} from '../helpers/interfaces';
import Homes from '../screens/Homes';
import Explore from '../screens/tabs/Explore';
import PropertyDetail from '../screens/PropertyDetail';

export type StackParamsList = {
  'explore.home': undefined
  'explore.homes': undefined;
	'explore.propertyDetail': undefined;
  'explore.destination': {
    setRegion: (item: Region|null) => void
  };
}

const StackNavigator = createStackNavigator<StackParamsList>();

const ExploreStack: React.FC = () => (
  <StackNavigator.Navigator>
    <StackNavigator.Screen
      options={{
        headerShown: false,
      }}
      name="explore.home"
      component={Explore}
    />

    <StackNavigator.Screen
      options={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
        gestureDirection: 'vertical',
      }}
      name="explore.destination"
      component={Destination}
    />

    <StackNavigator.Screen
      options={{
        headerShown: false,
      }}
      name="explore.homes"
      component={Homes}
    />

    <StackNavigator.Screen
      options={{headerShown: false}}
      name="explore.propertyDetail"
      component={PropertyDetail}
    />
  </StackNavigator.Navigator>
);

export default ExploreStack;
