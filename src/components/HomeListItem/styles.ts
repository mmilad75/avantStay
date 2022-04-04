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
  counterContainer: ViewStyle,
  counterText: TextStyle,
  filterContainer: ViewStyle
}

const itemHeight = height
- (defaultSafeAreaInsetsTop ? defaultSafeAreaInsetsTop : 0)
- (defaultSafeAreaInsetsBottom ? defaultSafeAreaInsetsBottom : 0)
- filterContainerHeight
- TABBAR_HEIGHT;

export default StyleSheet.create<Styles>({
  container: {
    height: itemHeight,
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
  counterContainer: {
    position: 'absolute',
    top: 0,
    zIndex: 2,
    alignSelf: 'center',
    borderBottomLeftRadius: scaleW(8),
    borderBottomRightRadius: scaleW(8),
    padding: scaleW(10),
    backgroundColor: 'white',
  },
  counterText: {
    color: colors.primary,
  },
  filterContainer: {
    height: filterContainerHeight,
    backgroundColor: 'blue',
  },
});
