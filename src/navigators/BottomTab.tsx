import React from 'react';
import {BottomTabNavigationProp, createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon, Text} from '../components';
import colors from '../helpers/colors';
import globalStyles from '../helpers/globalStyles';
import Booking from '../screens/tabs/Booking';
import Profile from '../screens/tabs/Profile';
import Support from '../screens/tabs/Support';
import ExploreStack from './Explore';
import {getFocusedRouteNameFromRoute, RouteProp} from '@react-navigation/native';
import {ViewStyle} from 'react-native';

export type BottomTabParamsList = {
	'explore': undefined;
	'booking': undefined;
	'profile': undefined;
	'support': undefined
}

export type bottomTabNavigationType = BottomTabNavigationProp<BottomTabParamsList>;

const BottomTabNavigator = createBottomTabNavigator<BottomTabParamsList>();

const handleTabBarIcon = (name: string|undefined, {focused}: {focused: boolean}) => {
  const color = focused ? colors.greenBlue : colors.gray;
  let iconName:string = '';

  if (name === 'explore') {
    iconName = 'search';
  } else if (name === 'booking') {
    iconName = 'calendar';
  } else if (name === 'profile') {
    iconName = 'user';
  } else if (name === 'support') {
    iconName = 'chat';
  }

  return <Icon name={iconName} color={color} />;
};

const handleTabBarLabel = (name:string|undefined, {focused}: {focused: boolean}) =>
  <Text font="semiBold" style={[globalStyles.bottomTabLabel, focused && globalStyles.bottomTabActive]}>
    {name}
  </Text>;

const handleTabBarVisibility = (route: RouteProp<BottomTabParamsList, 'explore'>): ViewStyle => {
  const routeName = getFocusedRouteNameFromRoute(route);
  if (routeName === 'explore.destination') {
    return {display: 'none'};
  }

  return globalStyles.tabBarContainer;
};

const BottomTab: React.FC = () => (
  <BottomTabNavigator.Navigator
    screenOptions={({route}) => ({
      headerShown: false,
      tabBarIcon: props => handleTabBarIcon(route.name, props),
      tabBarLabel: props => handleTabBarLabel(route.name, props),
      tabBarStyle: globalStyles.tabBarContainer,
      tabBarItemStyle: globalStyles.tabBarItemContainer,
    })}>
    <BottomTabNavigator.Screen options={({route}) => ({tabBarStyle: handleTabBarVisibility(route)})} name="explore" component={ExploreStack} />
    <BottomTabNavigator.Screen name="booking" component={Booking} />
    <BottomTabNavigator.Screen name="profile" component={Profile} />
    <BottomTabNavigator.Screen name="support" component={Support} />
  </BottomTabNavigator.Navigator>
);

export default BottomTab;
