import React from 'react';
import {Text, View} from '../';
import styles from './styles';

interface Props {
  title: string
}

const StateListItem: React.FC<Props> = ({title}) => (
  <View style={styles.container}>
    <Text font="semiBold" style={styles.title}>{title}</Text>
    <Text style={styles.button}>select all</Text>
  </View>
);

export default StateListItem;
