import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator, BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import Explore from './src/navigators/Explore';

export type BottomTabParamsList = {
	'explore': undefined;
	'booking': undefined;
	'profile': undefined;
	'support': undefined
}

export type bottomTabNavigationType = BottomTabNavigationProp<BottomTabParamsList>;

const BottomTab = createBottomTabNavigator<BottomTabParamsList>();

const Main = () => (
  <BottomTab.Navigator screenOptions={{headerShown: false}}>
    <BottomTab.Screen name="explore" component={Explore} />
  </BottomTab.Navigator>
);

const App: React.FC = () => (
  <NavigationContainer>
    <Main />
  </NavigationContainer>
);

export default App;
