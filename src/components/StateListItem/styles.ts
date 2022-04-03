import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {scaleW} from '../../helpers/device';
import colors from '../../helpers/colors';

interface Styles {
  container: ViewStyle,
  title: TextStyle,
  button: TextStyle
}

export default StyleSheet.create<Styles>({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: colors.primaryExtraLight,
    borderBottomWidth: scaleW(1),
    marginVertical: scaleW(14),
    paddingBottom: scaleW(10),
  },
  title: {
    fontSize: scaleW(18),
    color: colors.primary80,
  },
  button: {
    marginLeft: scaleW(10),
    fontSize: scaleW(14),
    color: colors.greenBlue,
  },
});
