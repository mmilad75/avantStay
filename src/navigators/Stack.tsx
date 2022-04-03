/* eslint-disable no-unused-vars */
import React from 'react';
import {CardStyleInterpolators, createStackNavigator} from '@react-navigation/stack';
import Destination from '../screens/Destination';
import {Region} from '../helpers/interfaces';

export type StackParamsList = {
	'stack.home': undefined;
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
  </StackNavigator.Navigator>
);

export default Stack;
