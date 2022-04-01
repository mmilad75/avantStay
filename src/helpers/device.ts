import {Dimensions, Platform} from 'react-native';
import {initialWindowMetrics} from 'react-native-safe-area-context';

const {width} = Dimensions.get('window');
const {height} = Dimensions.get('window');
const layoutWidth = width < 480
  ? 375 : width < 720
    ? 480 : width < 960
      ? 720 : width < 1280
        ? 960 : width * 0.8;

const scaleW = (size: number) => (width / layoutWidth) * size;

const isIOS = Platform.OS === 'ios';

const defaultSafeAreaInsetsTop = initialWindowMetrics?.insets.top;
const defaultSafeAreaInsetsBottom = initialWindowMetrics?.insets.bottom;
const safeAreaInsetsTop
  = isIOS
    ? initialWindowMetrics?.insets.top
    : 0;
const safeAreaInsetsBottom = isIOS
  ? initialWindowMetrics?.insets.bottom
  : 0;

export {
  width,
  height,
  scaleW,
  defaultSafeAreaInsetsBottom,
  defaultSafeAreaInsetsTop,
  safeAreaInsetsBottom,
  safeAreaInsetsTop,
};
