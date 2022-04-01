/* eslint-disable camelcase */
import React from 'react';
import {Text as RNText, TextProps} from 'react-native';
import styles from './styles';
import {
  SourceSansPro_400Regular,
  SourceSansPro_600SemiBold,
  useFonts,
} from '@expo-google-fonts/source-sans-pro';
import AppLoading from 'expo-app-loading';

interface Props {
  font?: 'regular' | 'semiBold'
}
const Text: React.FC<TextProps&Props> = ({children, font = 'regular', ...props}) => {
  const [fontsLoaded] = useFonts({
    SourceSansPro_400Regular,
    SourceSansPro_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (<RNText {...props} style={[styles.text, {fontFamily: font === 'regular' ? 'SourceSansPro_400Regular' : 'SourceSansPro_600SemiBold'}, props.style]}>{children}</RNText>);
};

export default Text;
