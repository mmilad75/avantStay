import React from 'react';
import {Button, Text, CacheImage, Icon} from '..';
import {View} from 'react-native';
import {HomeShortened} from '../../helpers/interfaces';
import styles from './styles';
import colors from '../../helpers/colors';
import {HomesScreenNavigationType} from '../../screens/Homes';

interface Props {
  navigation: HomesScreenNavigationType,
  item: HomeShortened,
  index: number,
  total: number|undefined
}

const HomeListItem: React.FC<Props> = ({navigation, item, index, total}) => (
  <Button style={styles.container} onPress={() => navigation.navigate('explore.propertyDetail', {id: item.id})}>
    <View style={styles.headerContainer}>
      <View style={styles.imageContainer}>
        <View style={styles.counterContainer}>
          <Text style={styles.counterText}>
            <Text font="semiBold">{index}</Text>
            <Text> of </Text>
            <Text font="semiBold">{total}</Text>
            <Text> homes in </Text>
            <Text font="semiBold">{item.regionName}</Text>
          </Text>
        </View>
        <CacheImage style={styles.image} uri={item.photos[0].url} />
      </View>
    </View>
    <View style={styles.footerContainer}>
      <Text style={styles.address}>{`${item.regionName} • ${item.cityName}, ${item.stateCode}`}</Text>
      <Text font="semiBold" style={styles.title}>{item.title}</Text>
      <View style={styles.featuresContainer}>
        <View style={styles.featureContainer}>
          <Icon name="rooms-24" size={30} color={colors.darkGray} />
          <Text style={styles.featureText}>{`${item.bedsCount} Bedrooms`}</Text>
        </View>

        <View style={styles.featureContainer}>
          <Icon name="rooms-24" size={30} color={colors.darkGray} />
          <Text style={styles.featureText}>{`${item.bathroomsCount} Bathrooms`}</Text>
        </View>

        {item.hasPool && (
          <View style={styles.featureContainer}>
            <Icon name="pool-1" size={30} color={colors.darkGray} />
            <Text style={styles.featureText}>Pool</Text>
          </View>
        )}

        <View style={styles.featureContainer}>
          <Icon name="occupancy" size={30} color={colors.darkGray} />
          <Text style={styles.featureText}>{`${item.maxOccupancy}`}</Text>
        </View>
      </View>
    </View>
  </Button>
);

export default HomeListItem;
