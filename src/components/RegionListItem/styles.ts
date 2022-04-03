import {StyleSheet, TextStyle, TouchableOpacityProps, ViewStyle} from 'react-native';
import colors from '../../helpers/colors';
import {scaleW} from '../../helpers/device';

interface Styles {
  container: TouchableOpacityProps,
  checkboxContainer: ViewStyle,
  checkboxSelectedContainer: ViewStyle,
  title: TextStyle,
}

export default StyleSheet.create<Styles>({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: scaleW(14),
  },
  checkboxContainer: {
    width: scaleW(26),
    height: scaleW(26),
    borderColor: colors.primary30,
    borderWidth: scaleW(2),
    borderRadius: scaleW(3),
    marginRight: scaleW(10),
  },
  checkboxSelectedContainer: {
    backgroundColor: colors.greenBlue,
    borderColor: colors.greenBlue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: scaleW(16),
  },
});
