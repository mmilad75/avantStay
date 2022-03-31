import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {View, TextInput, Button, Text} from '../../components';
import globalStyles from '../../helpers/globalStyles';
import {useAppSelector} from '../../helpers/hooks';
import {AuthStackParamsList} from '../../navigators/Auth';
import {homeTabNavigationType} from '../../navigators/Home';
import {registerUser, setError} from '../../state/user/actions';

export type signupScreenNavigationType = StackNavigationProp<AuthStackParamsList, 'auth.signup'>;

const SignUp: React.FC = () => {
	const [email, setEmail] = useState<string|undefined>(undefined);
	const [password, setPassword] = useState<string|undefined>(undefined);
	const navigation = useNavigation<signupScreenNavigationType&homeTabNavigationType>();
	const error = useAppSelector(state => state.user.error);
	const dispatch = useDispatch();

	const handleSignUp = () => {
		if (email && password) {
			dispatch(registerUser(email, password, navigation));
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
			<TextInput value={email} placeholder="email" onChangeText={setEmail} />
			<TextInput value={password} placeholder="password" onChangeText={setPassword} />
			{error !== '' && (
				<Text>{error}</Text>
			)}
			<Button text="Sign Up" onPress={handleSignUp} />
		</View>
	);
};

export default SignUp;
