import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView} from 'react-native';
import AuthStack from './Auth';
import globalStyles from '../helpers/globalStyles';
import HomeTab from './Home';
import {createStackNavigator, StackNavigationProp} from '@react-navigation/stack';

export type MainStackParamsList = {
	'auth': undefined;
	'home': undefined;
}

export type mainStackNavigationType = StackNavigationProp<MainStackParamsList>;

const MainStack = createStackNavigator<MainStackParamsList>();

const Main = () => (
	<MainStack.Navigator screenOptions={{headerShown: false}}>
		<MainStack.Screen name="auth" component={AuthStack} />
		<MainStack.Screen name="home" component={HomeTab} />
	</MainStack.Navigator>
);

const Index: React.FC = () => (
	<SafeAreaView style={globalStyles.container}>
		<NavigationContainer>
			<Main />
		</NavigationContainer>
	</SafeAreaView>
);

export default Index;
