import React from 'react';
import {CardStyleInterpolators, createStackNavigator} from '@react-navigation/stack';
import ExploreScreen from '../screens/tabs/Explore';
import Destination from '../screens/Destination';

export type ExploreStackParamsList = {
	'explore.home': undefined;
	'explore.propertyDetail': undefined;
  'explore.destination': undefined
}

const Stack = createStackNavigator<ExploreStackParamsList>();

const Explore: React.FC = () => (
  <Stack.Navigator>
    <Stack.Screen
      options={{headerShown: false}}
      name="explore.home"
      component={ExploreScreen}
    />
    <Stack.Screen
      options={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
        gestureDirection: 'vertical',
      }}
      name="explore.destination"
      component={Destination}
    />
  </Stack.Navigator>
);

export default Explore;
