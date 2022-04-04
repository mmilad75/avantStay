import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ApolloProvider} from '@apollo/client';
import {apolloClient} from './src/config/config';
import Stack from './src/navigators/Explore';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTab from './src/navigators/BottomTab';

export type MainStackParamsList = {
	'tabs': undefined;
	'stack': undefined;
}

const StackNavigator = createStackNavigator<MainStackParamsList>();

const App: React.FC = () => (
  <ApolloProvider client={apolloClient}>
    <NavigationContainer>
      <StackNavigator.Navigator screenOptions={{headerShown: false}}>
        <StackNavigator.Screen name="tabs" component={BottomTab} />
        <StackNavigator.Screen name="stack" component={Stack} />
      </StackNavigator.Navigator>
    </NavigationContainer>
  </ApolloProvider>
);

export default App;
