import React from 'react';
import {Text as RNText, TextProps} from 'react-native';
import styles from './styles';

const Text: React.FC<TextProps> = ({children, ...props}) => <RNText {...props} style={[styles.text, props.style]}>{children}</RNText>;

export default Text;
