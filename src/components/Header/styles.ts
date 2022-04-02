import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import colors from '../../helpers/colors';
import {scaleW} from '../../helpers/device';

interface Styles {
  container: ViewStyle,
  iconContainer: ViewStyle,
  titleContainer: ViewStyle,
  rightButtonContainer: ViewStyle,
  title: TextStyle,
  rightButtonText: TextStyle
}

export default StyleSheet.create<Styles>({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: scaleW(20),
    paddingTop: scaleW(10),
  },
  iconContainer: {
    marginRight: scaleW(10),
  },
  titleContainer: {
    flex: 1,
  },
  rightButtonContainer: {
  },
  rightButtonText: {
    color: colors.greenBlue,
    fontSize: scaleW(16),
  },
  title: {
    fontSize: scaleW(18),
    color: colors.primary,
  },
});
