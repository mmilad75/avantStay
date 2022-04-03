import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {defaultSafeAreaInsetsTop, TABBAR_HEIGHT, scaleW} from './device';
import colors from './colors';

interface Styles {
	container: ViewStyle,
  safeContainer: ViewStyle,
	centeredContainer: ViewStyle,
	screenContainer: ViewStyle,
	bottomTabIcon: TextStyle,
	bottomTabLabel: TextStyle,
	bottomTabActive: TextStyle,
  tabBarContainer: ViewStyle,
  tabBarItemContainer: ViewStyle,
  contentContainer: ViewStyle
}

const globalStyles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  safeContainer: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: defaultSafeAreaInsetsTop,
    paddingBottom: TABBAR_HEIGHT,
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
    textAlign: 'center',
  },
  tabBarContainer: {
    borderTopWidth: 0,
    height: TABBAR_HEIGHT,
  },
  tabBarItemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    padding: scaleW(20),
  },
});

export default globalStyles;
