import {ImageStyle, StyleSheet, ViewStyle} from 'react-native';
import colors from '../../helpers/colors';
import {scaleW} from '../../helpers/device';

interface Props {
  placeholderConatiner: ViewStyle,
  placeholderImage: ImageStyle
}

export default StyleSheet.create<Props>({
  placeholderConatiner: {
    borderRadius: scaleW(10),
    flex: 1,
    backgroundColor: colors.primary3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderImage: {
    width: scaleW(100),
    height: scaleW(100),
    tintColor: colors.primary10,
    borderRadius: scaleW(10),
  },
});
