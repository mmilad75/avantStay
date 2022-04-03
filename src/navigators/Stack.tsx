import React from 'react';
import {CardStyleInterpolators, createStackNavigator} from '@react-navigation/stack';
import Destination from '../screens/Destination';

export type StackParamsList = {
	'stack.home': undefined;
	'stack.propertyDetail': undefined;
  'stack.destination': undefined
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
