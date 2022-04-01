import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {scaleW} from './device';
import colors from './colors';

interface Styles {
	container: ViewStyle,
	centeredContainer: ViewStyle,
	screenContainer: ViewStyle,
	bottomTabIcon: TextStyle,
	bottomTabLabel: TextStyle,
	bottomTabActive: TextStyle,
  tabBarContainer: ViewStyle
}

const globalStyles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    backgroundColor: colors.white,
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
  bottomTabActive: {
    color: colors.greenBlue,
  },
  bottomTabIcon: {
    color: colors.gray,
  },
  bottomTabLabel: {
    color: colors.gray,
    fontSize: scaleW(14),
    textTransform: 'capitalize',
  },
  tabBarContainer: {
    borderTopWidth: 0,
  },
});

export default globalStyles;
