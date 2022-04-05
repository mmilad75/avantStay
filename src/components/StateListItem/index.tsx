import React from 'react';
import {View} from 'react-native';
import {Text} from '../';
import styles from './styles';

interface Props {
  title: string|string[],
}

const StateListItem: React.FC<Props> = ({title}) => (
  <View style={styles.container}>
    <Text font="semiBold" style={styles.title}>
      {typeof title === 'string' ? title : (
        <>
          <Text style={styles.title}>{title[0]}</Text>
          <Text style={styles.title} font="semiBold">{title[1]}</Text>
          <Text style={styles.title}>{title[2]}</Text>
        </>
      )}
    </Text>
    <Text style={styles.button}>select all</Text>
  </View>
);

export default StateListItem;
