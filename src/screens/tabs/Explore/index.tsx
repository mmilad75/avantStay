import {StackNavigationProp} from '@react-navigation/stack';
import React, {useState} from 'react';
import {View} from 'react-native';
import {MainStackParamsList} from '../../../../App';
import {ImageBackground, Image, Text, Button} from '../../../components';
import globalStyles from '../../../helpers/globalStyles';
import {Region} from '../../../helpers/interfaces';
import {StackParamsList} from '../../../navigators/Stack';
import styles from './styles';

export type ExploreScreenNavigationType = StackNavigationProp<StackParamsList&MainStackParamsList, 'stack'>;

interface Props {
  navigation: ExploreScreenNavigationType&MainStackParamsList
}

const Explore: React.FC<Props> = ({navigation}) => {
  const [destination, setDestination] = useState<Region|null>(null);
  return (
    <View style={globalStyles.container}>
      <ImageBackground imageStyle={styles.backgroundImage} style={styles.background} source={require('../../../assets/images/img.png')}>
        <Image style={styles.logo} source={require('../../../assets/images/logo-text.png')} />
      </ImageBackground>
      <View style={styles.contentContainer}>
        <View style={styles.boxContainer}>
          <Button onPress={() => navigation.navigate('stack', {screen: 'stack.destination', params: {setRegion: setDestination}})}>
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
        </View>
        <Button style={styles.button}>
          <Text font="semiBold" style={styles.buttonText}>Explore homes</Text>
        </Button>
      </View>
    </View>
  );
};

export default Explore;
