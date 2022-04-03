import {StyleSheet, ViewStyle} from 'react-native';
import colors from '../../helpers/colors';
import {scaleW} from '../../helpers/device';

interface Styles {
  footerContainer: ViewStyle
}

export default StyleSheet.create<Styles>({
  footerContainer: {
    borderTopColor: colors.primaryExtraLight,
    borderTopWidth: scaleW(1),
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: scaleW(14),
    paddingHorizontal: scaleW(20),
  },
});
