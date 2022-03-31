import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ExploreScreen from '../screens/tabs/Explore';

export type ExploreStackParamsList = {
	'explore.home': undefined;
	'explore.propertyDetail': undefined;
}

const Stack = createStackNavigator<ExploreStackParamsList>();

const Explore: React.FC = () => (
  <Stack.Navigator>
    <Stack.Screen options={{headerShown: false}} name="explore.home" component={ExploreScreen} />
  </Stack.Navigator>
);

export default Explore;
