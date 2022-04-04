/* eslint-disable no-unused-vars */
import {useQuery} from '@apollo/client';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useState} from 'react';
import {View, FlatList, ActivityIndicator} from 'react-native';
import {FilterHomes, HomeListItem, Icon, Text, Button} from '../../components';
import styles from './styles';
import {HOMES_PER_PAGE} from '../../config/config';
import colors from '../../helpers/colors';
import globalStyles from '../../helpers/globalStyles';
import {Homes as HomesInterface} from '../../helpers/interfaces';
import {StackParamsList} from '../../navigators/Explore';
import {GET_HOMES} from '../../qraphql/queries';

export type HomesScreenNavigationType = StackNavigationProp<StackParamsList, 'explore.homes'>;

interface Props {
  navigation: HomesScreenNavigationType
}

const Homes: React.FC<Props> = ({navigation, route}) => {
  const [page, setPage] = useState<number>(1);
  const [filterModalVisible, setFilterModalVisible] = useState(false);
  const region = route?.params?.region;
  const {loading, data} = useQuery<HomesInterface>(GET_HOMES, {
    variables: region?.id ? {
      page,
      pageSize: HOMES_PER_PAGE,
      region: region?.id,
    } : {
      page,
      pageSize: HOMES_PER_PAGE,
    },
  });

  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator color={colors.primary} />
      </View>
    );
  }

  return (
    <View style={[globalStyles.safeContainer, styles.container]}>
      <FilterHomes
        isVisible={filterModalVisible}
        closeModal={() => setFilterModalVisible(false)}
      />
      {data?.homes.results && data?.homes.results.length > 0 ? (
        <FlatList
          data={data?.homes.results}
          renderItem={({item, index}) => <HomeListItem navigation={navigation} index={index + 1} total={data?.homes.count} item={item} navigation={navigation} />}
          pagingEnabled={true}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <View style={styles.noResultContainer}>
          <Text style={styles.noResultTitle} font="sangBlue">We couldn’t find any available homes...</Text>
          <Text style={styles.noResultSubtitle}>Please, try to select other dates to see available homes inside selected regions.</Text>
        </View>
      )}
      <View style={styles.filterContainer}>
        <View>
          <Text font="semiBold" style={styles.filterTitleText}>When</Text>
          <Text style={styles.filterSubtitleText}>Select dates to see prices...</Text>
        </View>

        <Button onPress={() => setFilterModalVisible(true)} style={styles.filterIconContainer}>
          <Icon name="filters-24" />
        </Button>
      </View>
    </View>
  );
};

export default Homes;
