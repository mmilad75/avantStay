import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import {Text} from '../';
import colors from '../../helpers/colors';
import styles from './styles';

interface Props {
  text: string
}

const Loading: React.FC<Props> = ({text}) => (
  <View style={styles.container}>
    <ActivityIndicator color={colors.greenBlue} size="small" />
    <Text font="semiBold" style={styles.text}>{text}</Text>
  </View>
);

export default Loading;
