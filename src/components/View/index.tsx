import React from 'react';
import {View as RNView, ViewProps} from 'react-native';

const View: React.FC<ViewProps> = ({children, ...props}) => <RNView {...props}>{children}</RNView>;

export default View;
