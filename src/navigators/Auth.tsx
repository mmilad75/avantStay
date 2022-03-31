import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SignIn from '../screens/auth/SignIn';
import Splash from '../screens/auth/Splash';
import SignUp from '../screens/auth/SignUp';

export type AuthStackParamsList = {
	'auth.splash': undefined;
	'auth.signin': undefined;
	'auth.signup': undefined;
}

const Stack = createStackNavigator<AuthStackParamsList>();

const AuthStack: React.FC = () => (
	<Stack.Navigator>
		<Stack.Screen options={{headerShown: false}} name="auth.splash" component={Splash} />
		<Stack.Screen options={{headerTitle: 'Sign In'}} name="auth.signin" component={SignIn} />
		<Stack.Screen options={{headerTitle: 'Sign Up'}} name="auth.signup" component={SignUp} />
	</Stack.Navigator>
);

export default AuthStack;
