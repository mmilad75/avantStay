/* eslint-disable no-unused-vars */
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import {Button, Text, Icon} from '../';
import {MainStackParamsList} from '../../../App';
import colors from '../../helpers/colors';
import {scaleW} from '../../helpers/device';
import {Region} from '../../helpers/interfaces';
import {ExploreScreenNavigationType} from '../../screens/tabs/Explore';
import styles from './styles';

interface Props {
  destination: Region|null,
  setDestination: (val:Region) => void,
  showOrder?: boolean
}

const FilterBox: React.FC<Props> = ({destination, setDestination, showOrder = false}) => {
  const navigation = useNavigation<ExploreScreenNavigationType&MainStackParamsList>();
  return (
    <View style={styles.boxContainer}>
      <Button onPress={() => navigation.navigate('explore.destination', {setRegion: setDestination})}>
        <Text font="semiBold" style={styles.title}>Destination</Text>
        <Text style={styles.subtitle}>{destination === null ? 'Any destination' : destination.name }</Text>
      </Button>
      <View style={styles.line} />
      <Button>
        <Text font="semiBold" style={styles.title}>Check In – Check Out</Text>
        <Text style={styles.description}>Select dates</Text>
      </Button>
      <View style={styles.line} />
      <Button>
        <Text font="semiBold" style={styles.title}>Who</Text>
        <Text style={styles.description}>Add guests</Text>
      </Button>
      {showOrder && (
        <>
          <View style={styles.line} />
          <Button>
            <Text font="semiBold" style={styles.title}>Order</Text>
            <View style={styles.valueContainer}>
              <Text style={styles.subtitle}>Price: Lowest first</Text>
              <Icon name="arrow-down" size={scaleW(8)} color={colors.primary15} />
            </View>
          </Button>
        </>
      )}
    </View>
  );
};

export default FilterBox;
