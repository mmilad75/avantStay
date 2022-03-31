import React from 'react';
import {TextInput as RNTextInput, TextInputProps} from 'react-native';
import styles from './styles';

const TextInput: React.FC<TextInputProps> = ({children, ...props}) => <RNTextInput {...props} style={[styles.textInput, props.style]}>{children}</RNTextInput>;

export default TextInput;
