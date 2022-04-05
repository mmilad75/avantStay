import {useQuery} from '@apollo/client';
import React, {useState, useEffect, useCallback, ReactNode, useRef} from 'react';
import {View, ActivityIndicator, Animated} from 'react-native';
import {Text, Icon, Button, CachedImage, Header} from '../../components';
import styles from './styles';
import {Home} from '../../helpers/interfaces';
import {GET_HOME} from '../../qraphql/queries';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackParamsList} from '../../navigators/Explore';
import colors from '../../helpers/colors';
import globalStyles from '../../helpers/globalStyles';
import {scaleW} from '../../helpers/device';

export type PropertyDetailScreenNavigationType = StackNavigationProp<StackParamsList, 'explore.propertyDetail'>;

interface Props {
  route: any
}

const PropertyDetail: React.FC<Props> = ({route}) => {
  const navigation = useNavigation<PropertyDetailScreenNavigationType>();
  const id = route?.params?.id;
  const {loading, data}: {data: {home: Home}, loading: boolean} = useQuery<any>(GET_HOME, {variables: {id}});
  const [descriptionLengthMore, setDescriptionLengthMore] = useState<boolean>(false);
  const [readMoreTextShown, setReadMoreTextShown] = useState(false);
  const [amenitiesItems, setAmenitiesItems] = useState<ReactNode[]>([]);
  const scrollY: Animated.Value = useRef(new Animated.Value(0)).current;
  const scrollRef = useRef();

  const toggleNumberOfLines = () => {
    setReadMoreTextShown(!readMoreTextShown);
  };

  useEffect(() => {
    // Filter amenities to show only those which their icon are in the app
    if (data?.home.amenities.length > 0) {
      const result: string[] = [];
      data?.home.amenities.forEach(item => {
        switch (item.toLowerCase()) {
        case 'bbq':
        case 'air conditioning':
        case 'parking':
        case 'wifi':
        case 'pool table':
        case 'tv':
        case 'fireplace':
          result.push(item);
          break;
        default:
          break;
        }
      });

      const jsx: ReactNode[] = [];
      result.forEach((item, index) => {
        jsx.push(
          <View key={index} style={styles.amenityItemContainer}>
            <View style={styles.amenityIconContainer}>
              <Icon size={20} name={item.toLowerCase().replaceAll(' ', '-')} />
            </View>
            <Text style={styles.amenityItemText}>{item}</Text>
          </View>,
        );
      });
      setAmenitiesItems(jsx);
    }
  }, [data]);

  const onTextLayout = useCallback(e => {
    if (data && data?.home.description) {
      setDescriptionLengthMore(e.nativeEvent.lines.length >= 4);
    }
  }, [data?.home?.description]);

  const headerBackgroundColor = scrollY.interpolate({
    inputRange: [0, scaleW(100)],
    outputRange: [colors.transparent, colors.white],
    extrapolate: 'clamp',
  });

  if (loading) {
    return <ActivityIndicator />;
  }

  const HeaderRightComponent = () => (
    <Button>
      <Icon name="share" />
    </Button>
  );

  return (
    <View style={styles.wrapper}>
      <View style={styles.headerContainer}>
        <Header
          iconColor={colors.primary}
          containerStyle={[styles.headerStyle, {backgroundColor: headerBackgroundColor}]}
          navigation={navigation}
          RightComponent={HeaderRightComponent}
        />
      </View>
      <Animated.ScrollView
        ref={scrollRef}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: false},
        )}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.headContainer}>
          <View style={styles.imageContainer}>
            <CachedImage style={styles.image} source={{uri: data.home.photos[0].url}} />
          </View>
        </View>
        <View style={styles.bodyContainer}>
          <View style={styles.infoHeaderContainer}>
            <Text style={styles.address}>{`${data.home.regionName} • ${data.home.cityName}, ${data.home.stateCode}`}</Text>
            <Text font="semiBold" style={styles.title}>{data.home.title}</Text>
            <View style={styles.featuresContainer}>
              <View style={styles.featureContainer}>
                <Icon name="rooms-24" size={30} color={colors.darkGray} />
                <Text style={styles.featureText}>{data.home.bedsCount}</Text>
              </View>

              <View style={styles.featureContainer}>
                <Icon name="bath-24" size={30} color={colors.darkGray} />
                <Text style={[styles.featureText, globalStyles.ml2]}>{data.home.bathroomsCount}</Text>
              </View>

              <View style={styles.featureContainer}>
                <Icon name="halfbath" size={30} color={colors.darkGray} />
                <Text style={styles.featureText}>{data.home.roomsCount}</Text>
              </View>

              <View style={styles.featureContainer}>
                <Icon name="pool-1" size={30} color={colors.darkGray} />
                <Text style={styles.featureText}>{data.home.hasPool ? '1' : '0'}</Text>
              </View>

              <View style={styles.featureContainer}>
                <Icon name="occupancy" size={30} color={colors.darkGray} />
                <Text style={styles.featureText}>{`${data.home.maxOccupancy}`}</Text>
              </View>
            </View>
          </View>

          <View style={styles.descriptionContainer}>
            <Text onTextLayout={onTextLayout}
              numberOfLines={readMoreTextShown ? undefined : 4}
              style={styles.descriptionText}
            >
              {data.home.description}
            </Text>
            {descriptionLengthMore ? (
              <Text
                style={styles.descriptionReadMoreText}
                onPress={toggleNumberOfLines}>{readMoreTextShown ? 'View less' : 'View more'}</Text>
            ) : null}
          </View>

          <View style={styles.amenitiesContainer}>
            <Text font="semiBold" style={styles.amenitiesTitle}>Amenitites</Text>
            <View style={styles.amenityItemsContainer}>
              {amenitiesItems.length > 0 && amenitiesItems}
            </View>
          </View>

          <View style={styles.viewAllContainer}>
            <Button style={[globalStyles.borderedButton, styles.viewAllButton]}>
              <Text font="semiBold" style={globalStyles.borderedButtonText}>View all 32 amenities</Text>
            </Button>
          </View>
        </View>
      </Animated.ScrollView>

    </View>
  );
};

export default PropertyDetail;
