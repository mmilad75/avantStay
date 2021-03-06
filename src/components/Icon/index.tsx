import React from 'react';
import {useFonts} from 'expo-font';
import {createIconSetFromFontello} from '@expo/vector-icons';
import fontelloConfig from './config.json';
import colors from '../../helpers/colors';

const IconComponent = createIconSetFromFontello(fontelloConfig, 'ASIcon', 'asicon.ttf');

interface Props {
	name: string,
	size?: number,
	color?: string
}

const Icon: React.FC<Props> = ({name, size = 24, color = colors.primary}) => {
  const [fontsLoaded] = useFonts({
    ASIcon: require('./asicon.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <IconComponent name={name} size={size} color={color} />
  );
};

export default Icon;
