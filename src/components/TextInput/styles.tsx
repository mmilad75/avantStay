import {StyleSheet} from 'react-native';
import colors from '../../helpers/colors';
import {scaleW, width} from '../../helpers/device';

export default StyleSheet.create({
	textInput: {
		borderWidth: 1,
		borderColor: colors.gray,
		borderRadius: scaleW(10),
		padding: scaleW(10),
		marginBottom: scaleW(10),
		width: width * 0.7,
	},
});
