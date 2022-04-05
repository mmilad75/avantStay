import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';
import Animated from 'react-native-reanimated';
import colors from '../../helpers/colors';
import {defaultSafeAreaInsetsBottom, defaultSafeAreaInsetsTop, scaleW, width} from '../../helpers/device';

interface Styles {
  wrapper: ViewStyle,
  contentContainer: ViewStyle,
  headContainer: ViewStyle,
  headerContainer: ViewStyle,
  imageContainer: ViewStyle,
  image: ImageStyle,
  bodyContainer: ViewStyle,
  address: TextStyle,
  title: TextStyle,
  featuresContainer: ViewStyle,
  featureContainer: ViewStyle,
  featureText: TextStyle,
  infoHeaderContainer: ViewStyle,
  descriptionContainer: ViewStyle,
  descriptionText: TextStyle,
  descriptionReadMoreText: TextStyle,
  amenitiesContainer: ViewStyle,
  amenitiesTitle: TextStyle,
  amenityItemContainer: ViewStyle,
  amenityItemText: TextStyle,
  amenityItemsContainer: ViewStyle,
  amenityIconContainer: ViewStyle,
  viewAllContainer: ViewStyle,
  viewAllButton: ViewStyle,
  headerStyle: ViewStyle&Animated.AnimateStyle<any>
}

const BODY_PADDING = scaleW(20);
const AMENITY_ITEM_WIDTH = scaleW((width / 2) - (BODY_PADDING * 2) - 6);

export default StyleSheet.create<Styles>({
  wrapper: {
    flex: 1,
    backgroundColor: colors.white,
  },
  contentContainer: {
    backgroundColor: colors.white,
    paddingBottom: defaultSafeAreaInsetsBottom,
  },
  headContainer: {
    height: scaleW(360),
  },
  headerContainer: {
    position: 'absolute',
    top: 0,
    zIndex: 2,
    width: '100%',
  },
  imageContainer: {
    flex: 1,
    paddingBottom: scaleW(1),
  },
  image: {
    flex: 1,
  },
  bodyContainer: {
    paddingHorizontal: BODY_PADDING,
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
  infoHeaderContainer: {
    alignItems: 'center',
    paddingVertical: scaleW(10),
  },
  descriptionContainer: {
  },
  descriptionText: {
    lineHeight: scaleW(24),
    fontSize: scaleW(14),
    color: colors.darkGray,
  },
  descriptionReadMoreText: {
    fontSize: scaleW(16),
    color: colors.blue,
    marginTop: scaleW(2),
  },
  amenitiesContainer: {
    marginTop: scaleW(34),
  },
  amenitiesTitle: {
    fontSize: scaleW(18),
    color: colors.primary,
    marginBottom: scaleW(20),
  },
  amenityItemsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingLeft: scaleW(6),
  },
  amenityItemContainer: {
    flexDirection: 'row',
    width: AMENITY_ITEM_WIDTH,
    paddingVertical: scaleW(14),
  },
  amenityItemText: {
    color: colors.darkGray,
    fontSize: scaleW(15),
    marginLeft: scaleW(10),
  },
  amenityIconContainer: {},
  viewAllContainer: {
    flexDirection: 'row',
    marginTop: scaleW(20),
  },
  viewAllButton: {
    paddingHorizontal: scaleW(30),
  },
  headerStyle: {
    width: '100%',
    paddingBottom: 20,
    paddingTop: defaultSafeAreaInsetsTop,
    shadowColor: 'rgba(0, 0, 0, .3)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 20,
    elevation: 5,
  },
});
