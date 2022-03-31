import React from 'react';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';
import {Text} from '..';
import styles from './styles';

interface Props {
  text: string
}

const Button: React.FC<TouchableOpacityProps&Props> = ({text, ...props}) => (
	<TouchableOpacity {...props} style={[styles.container, props.style]}>
		<Text style={styles.text}>{text}</Text>
	</TouchableOpacity>
);

export default Button;
