import {StyleSheet} from 'react-native';
import colors from '../../helpers/colors';
import {scaleW} from '../../helpers/device';

export default StyleSheet.create({
	container: {
		paddingHorizontal: scaleW(16),
		paddingVertical: scaleW(8),
		backgroundColor: colors.green,
		flexShrink: 1,
		marginTop: scaleW(10),
	},
	text: {
		color: colors.white,
	},
});
