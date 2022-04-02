import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {ImageBackground, View, Image, Text, Button} from '../../../components';
import globalStyles from '../../../helpers/globalStyles';
import {ExploreStackParamsList} from '../../../navigators/Explore';
import styles from './styles';

export type ExploreScreenNavigationType = StackNavigationProp<ExploreStackParamsList, 'explore.home'>;

interface Props {
  navigation: ExploreScreenNavigationType
}

const Explore: React.FC<Props> = ({navigation}) => (
  <View style={globalStyles.container}>
    <ImageBackground imageStyle={styles.backgroundImage} style={styles.background} source={require('../../../assets/images/img.png')}>
      <Image style={styles.logo} source={require('../../../assets/images/logo-text.png')} />
    </ImageBackground>
    <View style={styles.contentContainer}>
      <View style={styles.boxContainer}>
        <Button onPress={() => navigation.navigate('explore.destination')}>
          <Text font="semiBold" style={styles.title}>Destination</Text>
          <Text style={styles.subtitle}>Any destination</Text>
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

export default Explore;
