import React from 'react';
import AppLoading from 'expo-app-loading';
import {useFonts} from 'expo-font';
import {createIconSetFromFontello} from '@expo/vector-icons';
import fontelloConfig from './config.json';

const IconComponent = createIconSetFromFontello(fontelloConfig, 'ASIcon', 'asicon.ttf');

interface Props {
	name: string,
	size?: number,
	color?: string
}

const Icon: React.FC<Props> = ({name, size = 24, color = 'black'}) => {
  const [fontsLoaded] = useFonts({
    ASIcon: require('./asicon.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <IconComponent name={name} size={size} color={color} />
  );
};

export default Icon;
