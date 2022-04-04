import {StackNavigationProp} from '@react-navigation/stack';
import React, {useState} from 'react';
import {View} from 'react-native';
import {MainStackParamsList} from '../../../../App';
import {ImageBackground, Image, Text, Button, FilterBox} from '../../../components';
import globalStyles from '../../../helpers/globalStyles';
import {Region} from '../../../helpers/interfaces';
import {StackParamsList} from '../../../navigators/Explore';
import styles from './styles';

export type ExploreScreenNavigationType = StackNavigationProp<StackParamsList, 'explore.home'>;

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
        <FilterBox
          destination={destination}
          setDestination={setDestination}
          navigation={navigation}
        />
        <Button style={styles.button} onPress={() => navigation.navigate('explore.homes', {region: destination})}>
          <Text font="semiBold" style={styles.buttonText}>Explore homes</Text>
        </Button>
      </View>
    </View>
  );
};

export default Explore;
