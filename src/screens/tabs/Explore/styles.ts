import {ImageProps, StyleSheet, TextStyle, TouchableOpacityProps, ViewStyle} from 'react-native';
import colors from '../../../helpers/colors';
import {safeAreaInsetsTop, scaleW} from '../../../helpers/device';

interface Styles {
  backgroundImage: ImageProps,
  logo: ImageProps,
  background: ViewStyle,
  contentContainer: ViewStyle,
  boxContainer: ViewStyle,
  title: TextStyle,
  subtitle: TextStyle,
  description: TextStyle,
  line: ViewStyle,
  button: TouchableOpacityProps,
  buttonText: TextStyle
}

export default StyleSheet.create<Styles>({
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
  background: {
    height: '60%',
    alignItems: 'center',
  },
  logo: {
    marginTop: safeAreaInsetsTop + scaleW(10),
    tintColor: colors.white,
    width: '100%',
    height: scaleW(20),
  },
  contentContainer: {
    backgroundColor: 'white',
    flex: 1,
    marginTop: -scaleW(20),
    borderTopLeftRadius: scaleW(14),
    borderTopRightRadius: scaleW(14),
    shadowColor: 'rgba(0, 0, 0, .3)',
    shadowOffset: {
      width: 0,
      height: -10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    paddingHorizontal: scaleW(20),
    paddingVertical: scaleW(26),
  },
  boxContainer: {
    borderWidth: 1,
    borderColor: colors.primary15,
    paddingVertical: scaleW(10),
    paddingHorizontal: scaleW(12),
    marginBottom: scaleW(20),
  },
  title: {
    color: colors.greenBlue2,
    fontSize: scaleW(16),
    marginBottom: scaleW(2),
  },
  subtitle: {
    fontSize: scaleW(17),
    color: colors.darkGray,
  },
  description: {
    color: colors.primary30,
    fontSize: scaleW(17),
  },
  line: {
    width: '100%',
    height: scaleW(1),
    backgroundColor: colors.primary15,
    marginVertical: scaleW(10),
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: scaleW(10),
    borderColor: colors.primaryDark,
    borderWidth: 2,
  },
  buttonText: {
    fontSize: scaleW(15),
  },
});
