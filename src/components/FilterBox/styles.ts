import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import colors from '../../helpers/colors';
import {scaleW} from '../../helpers/device';

interface Styles {
  boxContainer: ViewStyle
  title: TextStyle
  subtitle: TextStyle
  description:TextStyle
  line:ViewStyle,
  valueContainer: ViewStyle
}

export default StyleSheet.create<Styles>({
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
  valueContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
