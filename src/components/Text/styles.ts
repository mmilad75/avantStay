import {StyleSheet, TextStyle} from 'react-native';
import colors from '../../helpers/colors';

interface Styles {
  text: TextStyle
}

const styles = StyleSheet.create<Styles>({
	text: {
		color: colors.black,
	},
});

export default styles;
