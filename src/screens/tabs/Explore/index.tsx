import React from 'react';
import {ImageBackground, View, Image, Text, Button} from '../../../components';
import globalStyles from '../../../helpers/globalStyles';
import styles from './styles';

const Explore = () => (
  <View style={globalStyles.container}>
    <ImageBackground imageStyle={styles.backgroundImage} style={styles.background} source={require('../../../assets/images/img.png')}>
      <Image style={styles.logo} source={require('../../../assets/images/logo-text.png')} />
    </ImageBackground>
    <View style={styles.contentContainer}>
      <View style={styles.boxContainer}>
        <Button>
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
