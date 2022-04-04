import {ImageProps, StyleSheet, TextStyle, TouchableOpacityProps, ViewStyle} from 'react-native';
import colors from '../../../helpers/colors';
import {safeAreaInsetsTop, scaleW} from '../../../helpers/device';

interface Styles {
  backgroundImage: ImageProps,
  logo: ImageProps,
  background: ViewStyle,
  contentContainer: ViewStyle,
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
