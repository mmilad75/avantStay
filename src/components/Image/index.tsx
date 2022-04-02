import React from 'react';
import {Image as RNImage, ImageProps} from 'react-native';

const Image: React.FC<ImageProps> = props => (
  <RNImage resizeMode="contain" {...props} />
);

export default Image;
