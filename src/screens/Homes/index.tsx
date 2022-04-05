
import {useQuery} from '@apollo/client';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useState, useEffect} from 'react';
import {View, FlatList, ActivityIndicator} from 'react-native';
import {FilterHomes, HomeListItem, Icon, Text, Button, Loading} from '../../components';
import styles from './styles';
import {HOMES_PER_PAGE} from '../../config/config';
import colors from '../../helpers/colors';
import globalStyles from '../../helpers/globalStyles';
import {Homes as HomesInterface} from '../../helpers/interfaces';
import {StackParamsList} from '../../navigators/Explore';
import {GET_HOMES} from '../../qraphql/queries';
import {Observer} from 'mobx-react-lite';
import {homeStore, regionStore} from '../../store';

export type HomesScreenNavigationType = StackNavigationProp<StackParamsList, 'explore.homes'>;

interface Props {
  navigation: HomesScreenNavigationType
}

const Homes: React.FC<Props> = ({navigation}) => {
  const [filterModalVisible, setFilterModalVisible] = useState(false);
  const {loading, data} = useQuery<HomesInterface>(GET_HOMES, {
    variables: regionStore.destination?.id ? {
      page: 1,
      pageSize: HOMES_PER_PAGE,
      region: regionStore.destination?.id,
    } : {
      page: 1,
      pageSize: HOMES_PER_PAGE,
    },
  });

  useEffect(() => {
    if (data?.homes) {
      homeStore.addHomes(data.homes.results);
      homeStore.addCount(data.homes.count);
    }
  }, [data]);

  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator color={colors.primary} />
      </View>
    );
  }

  return (
    <Observer>
      {() => (
        <View style={[globalStyles.safeContainer, styles.container]}>
          {loading ? (
            <Loading text="Loading Homes" />
          ) : (
            <>
              <FilterHomes
                isVisible={filterModalVisible}
                closeModal={() => setFilterModalVisible(false)}
              />
              {homeStore.homes && homeStore.count > 0 ? (
                <FlatList
                  data={homeStore.homes}
                  renderItem={({item, index}) => <HomeListItem index={index + 1} total={homeStore.count} item={item} navigation={navigation} />}
                  pagingEnabled={true}
                  showsVerticalScrollIndicator={false}
                />
              ) : (
                <View style={styles.noResultContainer}>
                  <Text style={styles.noResultTitle} font="sangBlue">We couldn’t find any available homes...</Text>
                  <Text style={styles.noResultSubtitle}>Please, try to select other dates to see available homes inside selected regions.</Text>
                </View>
              )}
            </>
          )}
          <View style={styles.filterContainer}>
            <View>
              <Text font="semiBold" style={styles.filterTitleText}>When</Text>
              <Text style={styles.filterSubtitleText}>Select dates to see prices...</Text>
            </View>

            <Button onPress={() => setFilterModalVisible(true)} style={styles.filterIconContainer}>
              <View style={styles.badgeContainer}>
                <Text font="sangBlue" style={styles.badgeText}>1</Text>
              </View>
              <Icon name="filters-24" />
            </Button>
          </View>
        </View>
      )}
    </Observer>
  );
};

export default Homes;
