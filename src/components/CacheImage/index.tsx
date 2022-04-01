import React from 'react';
import {ImageProps} from 'react-native';
import {Image} from 'react-native-expo-image-cache';

const CacheImage: React.FC<any&ImageProps> = props => <Image {...props} />;

export default CacheImage;
