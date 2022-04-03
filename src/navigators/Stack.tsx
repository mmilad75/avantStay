/* eslint-disable no-unused-vars */
import React from 'react';
import {CardStyleInterpolators, createStackNavigator} from '@react-navigation/stack';
import Destination from '../screens/Destination';
import {Region} from '../helpers/interfaces';
import Homes from '../screens/Homes';

export type StackParamsList = {
  'stack.homes': undefined;
	'stack.propertyDetail': undefined;
  'stack.destination': {
    setRegion: (item: Region|null) => void
  };
  setRegion: undefined
}

const StackNavigator = createStackNavigator<StackParamsList>();

const Stack: React.FC = () => (
  <StackNavigator.Navigator>
    <StackNavigator.Screen
      options={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
        gestureDirection: 'vertical',
      }}
      name="stack.destination"
      component={Destination}
    />

    <StackNavigator.Screen
      options={{
        headerShown: false,
      }}
      name="stack.homes"
      component={Homes}
    />
  </StackNavigator.Navigator>
);

export default Stack;
