import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import colors from '../../helpers/colors';
import {scaleW} from '../../helpers/device';

interface Styles {
  footerContainer: ViewStyle,
  notFoundText: TextStyle
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
  notFoundText: {
    fontSize: scaleW(16),
    color: colors.primary60,
    textAlign: 'center',
    marginHorizontal: scaleW(18),
    marginTop: scaleW(10),
    lineHeight: scaleW(24),
  },
});
