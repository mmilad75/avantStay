import React, {useEffect} from 'react';
import {View, Text} from '../../components';
import globalStyles from '../../helpers/globalStyles';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {AuthStackParamsList} from '../../navigators/Auth';
import {checkLogin} from '../../state/user/actions';
import {useDispatch} from 'react-redux';
import {homeTabNavigationType} from '../../navigators/Home';

export type splashScreenNavigationType = StackNavigationProp<AuthStackParamsList, 'auth.splash'>;

const Splash:React.FC = () => {
	const navigation = useNavigation<splashScreenNavigationType & homeTabNavigationType>();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(checkLogin(navigation));
	}, []);

	return (
		<View style={globalStyles.centeredContainer}>
			<Text>Splash Screen</Text>
		</View>
	);
};

export default Splash;
