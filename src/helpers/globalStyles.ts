import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {defaultSafeAreaInsetsTop, TABBAR_HEIGHT, scaleW, defaultSafeAreaInsetsBottom} from './device';
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
  contentContainer: ViewStyle,
  primaryButton: ViewStyle,
  primaryButtonText: TextStyle
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
    paddingBottom: defaultSafeAreaInsetsBottom,
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
    flex: 1,
    padding: scaleW(20),
    paddingBottom: 0,
  },
  primaryButton: {
    backgroundColor: colors.primary,
    borderRadius: scaleW(2),
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: scaleW(12),
  },
  primaryButtonText: {
    color: colors.white,
    fontSize: scaleW(15),
  },
});

export default globalStyles;
