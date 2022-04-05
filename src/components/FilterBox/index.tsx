
import {Observer} from 'mobx-react-lite';
import React from 'react';
import {View} from 'react-native';
import {Button, Text, Icon} from '../';
import {MainStackParamsList} from '../../../App';
import colors from '../../helpers/colors';
import {scaleW} from '../../helpers/device';
import {ExploreScreenNavigationType} from '../../screens/tabs/Explore';
import {regionStore} from '../../store';
import styles from './styles';

interface Props {
  showOrder?: boolean,
  navigation?: ExploreScreenNavigationType&MainStackParamsList
}

const FilterBox: React.FC<Props> = ({showOrder = false, navigation}) => (
  <View style={styles.boxContainer}>
    <Button onPress={() => {
      if (navigation) {
        navigation.navigate('explore.destination');
      }
    }}>
      <Text font="semiBold" style={styles.title}>Destination</Text>
      <Observer>
        {() => <Text style={styles.subtitle}>{regionStore.destination === null ? 'Any destination' : regionStore.destination.name }</Text>}
      </Observer>
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

export default FilterBox;
