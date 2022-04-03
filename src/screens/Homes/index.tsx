import {useQuery} from '@apollo/client';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useState} from 'react';
import {View, FlatList, ActivityIndicator} from 'react-native';
import {HomeListItem, Icon, Text} from '../../components';
import styles from './styles';
import {HOMES_PER_PAGE} from '../../config/config';
import colors from '../../helpers/colors';
import globalStyles from '../../helpers/globalStyles';
import {Homes as HomesInterface} from '../../helpers/interfaces';
import {StackParamsList} from '../../navigators/Stack';
import {GET_HOMES} from '../../qraphql/queries';

export type HomesScreenNavigationType = StackNavigationProp<StackParamsList, 'stack.homes'>;

interface Props {
  navigation: HomesScreenNavigationType
}

const Homes: React.FC<Props> = ({navigation, route}) => {
  const [page, setPage] = useState<number>(1);
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
      <FlatList
        data={data?.homes.results}
        renderItem={({item, index}) => <HomeListItem index={index + 1} total={data?.homes.count} item={item} navigation={navigation} />}
        pagingEnabled={true}
        showsVerticalScrollIndicator={false}
      />
      <View style={styles.filterContainer}>
        <View>
          <Text font="semiBold" style={styles.filterTitleText}>When</Text>
          <Text style={styles.filterSubtitleText}>Select dates to see prices...</Text>
        </View>

        <View style={styles.filterIconContainer}>
          <Icon name="filters-24" />
        </View>
      </View>
    </View>
  );
};

export default Homes;
