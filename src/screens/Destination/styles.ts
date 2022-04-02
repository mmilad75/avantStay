import {StyleSheet, ViewStyle} from 'react-native';
import colors from '../../helpers/colors';

interface Styles {
  container: ViewStyle
}

export default StyleSheet.create<Styles>({
  container: {
    backgroundColor: colors.white,
  },
});
