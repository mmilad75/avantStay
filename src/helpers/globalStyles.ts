import {StyleSheet, ViewStyle} from 'react-native';
import {scaleW} from './device';

interface Styles {
	container: ViewStyle,
	centeredContainer: ViewStyle,
	screenContainer: ViewStyle
}

const globalStyles = StyleSheet.create<Styles>({
	container: {
		flex: 1,
	},
	centeredContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	screenContainer: {
		flex: 1,
		padding: scaleW(20),
	},
});

export default globalStyles;
