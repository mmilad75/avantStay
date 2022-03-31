import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, StackNavigationProp} from '@react-navigation/stack';

export type MainStackParamsList = {};

export type mainStackNavigationType = StackNavigationProp<MainStackParamsList>;

const MainStack = createStackNavigator<MainStackParamsList>();

const Main = () => (
  <MainStack.Navigator screenOptions={{headerShown: false}}>
  </MainStack.Navigator>
);

const Index: React.FC = () => (
  <NavigationContainer>
    <Main />
  </NavigationContainer>
);

export default Index;
