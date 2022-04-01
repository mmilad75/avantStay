import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator, BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import Explore from './src/navigators/Explore';
import {Icon, Text} from './src/components';
import globalStyles from './src/helpers/globalStyles';
import colors from './src/helpers/colors';
import Booking from './src/screens/tabs/Booking';
import Profile from './src/screens/tabs/Profile';
import Support from './src/screens/tabs/Support';

export type BottomTabParamsList = {
	'explore': undefined;
	'booking': undefined;
	'profile': undefined;
	'support': undefined
}

export type bottomTabNavigationType = BottomTabNavigationProp<BottomTabParamsList>;

const BottomTab = createBottomTabNavigator<BottomTabParamsList>();

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

const Main = () => (
  <BottomTab.Navigator
    screenOptions={({route}) => ({
      headerShown: false,
      tabBarIcon: props => handleTabBarIcon(route.name, props),
      tabBarLabel: props => handleTabBarLabel(route.name, props),
      tabBarStyle: globalStyles.tabBarContainer,
      tabBarItemStyle: globalStyles.tabBarItemContainer,
    })}>
    <BottomTab.Screen name="explore" component={Explore} />
    <BottomTab.Screen name="booking" component={Booking} />
    <BottomTab.Screen name="profile" component={Profile} />
    <BottomTab.Screen name="support" component={Support} />
  </BottomTab.Navigator>
);

const App: React.FC = () => (
  <NavigationContainer>
    <Main />
  </NavigationContainer>
);

export default App;
