import React from 'react';
import {ImageBackground as RNImageBackground, ImageBackgroundProps} from 'react-native';

const ImageBackground:React.FC<ImageBackgroundProps> = ({children, ...props}) => (
  <RNImageBackground {...props}>
    {children}
  </RNImageBackground>
);

export default ImageBackground;
