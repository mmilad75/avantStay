/* eslint-disable no-unused-vars */
import React from 'react';
import {Button, Text, View, Icon} from '../';
import styles from './styles';
import colors from '../../helpers/colors';

interface Props {
  setSelected: (val:boolean) => void,
  isSelected: boolean,
  title: string,
}

const RegionListItem: React.FC<Props> = ({title, isSelected, setSelected}) => (
  <Button style={styles.container} onPress={() => setSelected(!isSelected)}>
    <View style={[styles.checkboxContainer, isSelected && styles.checkboxSelectedContainer]}>
      {isSelected && (
        <Icon name="select" color={colors.white} />
      )}
    </View>
    <Text font={isSelected ? 'semiBold' : 'regular'} style={styles.title}>{title}</Text>
  </Button>
);

export default RegionListItem;
