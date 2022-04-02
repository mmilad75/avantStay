import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import colors from '../../helpers/colors';
import {scaleW} from '../../helpers/device';

interface Styles {
  container: ViewStyle,
  focusedContainer: ViewStyle,
  iconContainer: ViewStyle,
  inputContainer: ViewStyle,
  buttonContainer: ViewStyle,
  inputText: TextStyle,
  inputTextFocused: TextStyle
}

export default StyleSheet.create<Styles>({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: scaleW(1),
    borderColor: colors.primaryExtraLight,
    paddingVertical: scaleW(12),
    marginBottom: scaleW(10),
  },
  focusedContainer: {
    borderColor: colors.greenBlue3,
    borderBottomWidth: scaleW(2),
  },
  iconContainer: {
    marginRight: scaleW(10),
  },
  inputContainer: {
    flex: 1,
  },
  inputText: {
    fontSize: scaleW(16),
    color: colors.primary40,
  },
  inputTextFocused: {
    color: colors.darkGray,
  },
  buttonContainer: {
    borderRadius: 20,
    backgroundColor: colors.primaryExtraLight,
    width: scaleW(20),
    height: scaleW(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
