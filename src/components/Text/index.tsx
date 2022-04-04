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
  font?: 'regular' | 'semiBold' | 'sangBlue'
}
const Text: React.FC<TextProps&Props> = ({children, font = 'regular', ...props}) => {
  const [fontsLoaded] = useFonts({
    SourceSansPro_400Regular,
    SourceSansPro_600SemiBold,
    SangBleu: require('../../assets/fonts/SangBleu-Sunrise.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (<RNText {...props} style={[styles.text, {fontFamily: font === 'regular' ? 'SourceSansPro_400Regular' : font === 'sangBlue' ? 'SangBleu' : 'SourceSansPro_600SemiBold'}, props.style]}>{children}</RNText>);
};

export default Text;
