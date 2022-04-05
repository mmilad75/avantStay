import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';
import colors from '../../helpers/colors';
import {defaultSafeAreaInsetsBottom, defaultSafeAreaInsetsTop, height, scaleW, TABBAR_HEIGHT} from '../../helpers/device';
import {filterContainerHeight} from '../../screens/Homes/styles';

interface Styles {
  container: ViewStyle,
  headerContainer: ViewStyle,
  footerContainer: ViewStyle,
  address: TextStyle,
  title: TextStyle,
  featuresContainer: ViewStyle,
  featureContainer: ViewStyle,
  featureText: TextStyle,
  imageContainer: ViewStyle,
  image: ImageStyle,
  headInfoContainer: ViewStyle,
  counterText: TextStyle,
  filterContainer: ViewStyle,
  totalPriceCounterContainer: ViewStyle,
  totalPriceCounterNightText: TextStyle,
  totalPriceCounterPriceText: TextStyle,
  homesCounterContainer: ViewStyle
}

export const homeListItemHeight = height
- (defaultSafeAreaInsetsTop ? defaultSafeAreaInsetsTop : 0)
- (defaultSafeAreaInsetsBottom ? defaultSafeAreaInsetsBottom : 0)
- filterContainerHeight
- TABBAR_HEIGHT;

export default StyleSheet.create<Styles>({
  container: {
    height: homeListItemHeight,
    paddingVertical: scaleW(10),
  },
  headerContainer: {
    flex: 1,
  },
  footerContainer: {
    alignItems: 'center',
    paddingVertical: scaleW(10),
  },
  address: {
    color: colors.greenBlue,
    fontSize: scaleW(14),
  },
  title: {
    color: colors.primary,
    fontSize: scaleW(20),
    marginVertical: scaleW(4),
  },
  featuresContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
  },
  featureContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  featureText: {
    fontSize: scaleW(13),
    color: colors.darkGray,
    marginLeft: -scaleW(4),
  },
  imageContainer: {
    flex: 1,
    paddingBottom: scaleW(1),
  },
  image: {
    flex: 1,
    borderRadius: scaleW(10),
  },
  headInfoContainer: {
    position: 'absolute',
    top: 0,
    zIndex: 2,
    alignSelf: 'center',
    borderBottomLeftRadius: scaleW(8),
    borderBottomRightRadius: scaleW(8),
    backgroundColor: 'white',
  },
  counterText: {
    color: colors.primary,
    textAlign: 'center',
  },
  filterContainer: {
    height: filterContainerHeight,
    backgroundColor: 'blue',
  },
  totalPriceCounterContainer: {
    backgroundColor: colors.primaryDark,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: scaleW(10),
    paddingVertical: scaleW(7),
    borderBottomLeftRadius: scaleW(8),
    borderBottomRightRadius: scaleW(8),
    alignItems: 'center',
  },
  totalPriceCounterNightText: {
    color: colors.white60,
    fontSize: scaleW(13),
  },
  totalPriceCounterPriceText: {
    color: colors.white,
    fontSize: scaleW(16),
    marginLeft: scaleW(30),
  },
  homesCounterContainer: {
    paddingHorizontal: scaleW(10),
    paddingVertical: scaleW(7),
  },
});
