import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import colors from '../../helpers/colors';
import {scaleW} from '../../helpers/device';

interface Styles {
  container: ViewStyle
  filterContainer: ViewStyle,
  filterIconContainer: ViewStyle,
  filterTitleText: TextStyle,
  filterSubtitleText: TextStyle
}

export const filterContainerHeight = scaleW(55);

export default StyleSheet.create<Styles>({
  container: {
    paddingHorizontal: scaleW(10),
  },
  filterContainer: {
    height: filterContainerHeight,
    marginHorizontal: scaleW(20),
    borderRadius: scaleW(4),
    borderWidth: scaleW(1),
    borderColor: colors.primary15,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: scaleW(14),
    paddingVertical: scaleW(10),
    justifyContent: 'space-between',
  },
  filterIconContainer: {
    borderLeftWidth: 1,
    borderColor: colors.primary15,
    paddingLeft: scaleW(10),
    height: 40,
    justifyContent: 'center',
  },
  filterTitleText: {
    color: colors.greenBlue,
    fontSize: scaleW(13),
  },
  filterSubtitleText: {
    color: colors.primary30,
    fontSize: scaleW(15),
  },
});
