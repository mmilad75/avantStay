import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import colors from '../../helpers/colors';
import {defaultSafeAreaInsetsBottom, scaleW} from '../../helpers/device';

interface Styles {
  wrapper: ViewStyle,
  container: ViewStyle
  headerContainer: ViewStyle,
  bodyContainer: ViewStyle,
  footerContainer: ViewStyle,
  title: TextStyle,
  clearButtonContainer: ViewStyle,
  clearButtonText: TextStyle,
  iconContainer: ViewStyle
}

export default StyleSheet.create<Styles>({
  wrapper: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  container: {
    justifyContent: 'flex-end',
    paddingBottom: defaultSafeAreaInsetsBottom,
    backgroundColor: 'white',
    padding: scaleW(20),
    borderTopLeftRadius: scaleW(6),
    borderTopRightRadius: scaleW(6),
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bodyContainer: {
    marginTop: scaleW(20),
  },
  footerContainer: {},
  title: {
    fontSize: scaleW(18),
    flex: 1,
    textAlign: 'center',
  },
  iconContainer: {
    width: scaleW(50),
  },
  clearButtonContainer: {
    width: scaleW(50),
    alignItems: 'flex-end',
  },
  clearButtonText: {
    color: colors.greenBlue,
  },
});
