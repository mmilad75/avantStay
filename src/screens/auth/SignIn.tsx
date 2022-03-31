import React, {useEffect, useState} from 'react';
import {View, TextInput, Button, Text} from '../../components/';
import {loginUser, setError} from '../../state/user/actions';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {AuthStackParamsList} from '../../navigators/Auth';
import globalStyles from '../../helpers/globalStyles';
import {useAppSelector} from '../../helpers/hooks';

export type signinScreenNavigationType = StackNavigationProp<AuthStackParamsList, 'auth.signin'>;

const SignIn:React.FC = () => {
	const [email, setEmail] = useState<string|undefined>(undefined);
	const [password, setPassword] = useState<string|undefined>(undefined);
	const dispatch = useDispatch();
	const navigation = useNavigation<signinScreenNavigationType>();
	const error = useAppSelector(state => state.user.error);

	const handleSignIn = () => {
		if (email && password) {
			dispatch(loginUser(email, password, navigation));
		}
	};

	useEffect(() => () => {
		dispatch(setError(null));
	}, []);

	useEffect(() => {
		dispatch(setError(null));
	}, [email, password]);

	return (
		<View style={globalStyles.centeredContainer}>
			<TextInput placeholder="email" value={email} onChangeText={setEmail} />
			<TextInput secureTextEntry placeholder="password" value={password} onChangeText={setPassword} />
			{error !== '' && (
				<Text>{error}</Text>
			)}
			<Button text="Sign In" onPress={handleSignIn} />
			<Button text="Go To Sign Up Screen" onPress={() => navigation.navigate('auth.signup')} />
		</View>
	);
};

export default SignIn;
