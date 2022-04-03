import {Dimensions, Platform} from 'react-native';
import {initialWindowMetrics} from 'react-native-safe-area-context';

const {width}: {width: number} = Dimensions.get('window');
const {height}: {height: number} = Dimensions.get('window');
const layoutWidth: number = width < 480
  ? 375 : width < 720
    ? 480 : width < 960
      ? 720 : width < 1280
        ? 960 : width * 0.8;

const scaleW = (size: number): number => (width / layoutWidth) * size;

const isIOS: boolean = Platform.OS === 'ios';

const defaultSafeAreaInsetsTop = initialWindowMetrics?.insets.top;
const defaultSafeAreaInsetsBottom = initialWindowMetrics?.insets.bottom;
const safeAreaInsetsTop: number
  = isIOS
    ? initialWindowMetrics?.insets.top ? initialWindowMetrics.insets.top : 0
    : 0;
const safeAreaInsetsBottom: number = isIOS
  ? initialWindowMetrics?.insets.bottom ? initialWindowMetrics.insets.bottom : 0
  : 0;

const TABBAR_HEIGHT: number = scaleW(80);

export {
  width,
  height,
  scaleW,
  defaultSafeAreaInsetsBottom,
  defaultSafeAreaInsetsTop,
  safeAreaInsetsBottom,
  safeAreaInsetsTop,
  TABBAR_HEIGHT,
};
