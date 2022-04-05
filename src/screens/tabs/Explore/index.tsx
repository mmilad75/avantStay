import {StackNavigationProp} from '@react-navigation/stack';
import {observer} from 'mobx-react-lite';
import React from 'react';
import {View} from 'react-native';
import {MainStackParamsList} from '../../../../App';
import {ImageBackground, Image, Text, Button, FilterBox} from '../../../components';
import globalStyles from '../../../helpers/globalStyles';
import {StackParamsList} from '../../../navigators/Explore';
import styles from './styles';

export type ExploreScreenNavigationType = StackNavigationProp<StackParamsList, 'explore.home'>;

interface Props {
  navigation: ExploreScreenNavigationType&MainStackParamsList
}

const Explore: React.FC<Props> = observer(({navigation}) => (
  <View style={globalStyles.container}>
    <ImageBackground imageStyle={styles.backgroundImage} style={styles.background} source={require('../../../assets/images/img.png')}>
      <Image style={styles.logo} source={require('../../../assets/images/logo-text.png')} />
    </ImageBackground>
    <View style={styles.contentContainer}>
      <FilterBox navigation={navigation} />
      <Button style={globalStyles.borderedButton} onPress={() => navigation.navigate('explore.homes')}>
        <Text font="semiBold" style={globalStyles.borderedButtonText}>Explore homes</Text>
      </Button>
    </View>
  </View>
));

export default Explore;
