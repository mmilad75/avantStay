import React from 'react';
import {ViewStyle, Animated} from 'react-native';
import {View} from 'react-native';
import {Text, Button, Icon} from '../';
import colors from '../../helpers/colors';
import {DestinationScreenNavigationType} from '../../screens/Destination';
import {PropertyDetailScreenNavigationType} from '../../screens/PropertyDetail';
import styles from './styles';

interface Props {
  navigation: DestinationScreenNavigationType|PropertyDetailScreenNavigationType,
  title?: string,
  rightText?: string | undefined,
  onRightPress?: () => void,
  containerStyle?: ((ViewStyle) | {backgroundColor: Animated.AnimatedInterpolation})[],
  iconColor?: string,
  RightComponent?: React.FC
}

const Header: React.FC<Props> = ({
  navigation,
  title,
  rightText,
  onRightPress,
  containerStyle,
  iconColor,
  RightComponent,
}) => (
  <Animated.View style={[styles.container, containerStyle]}>
    <Button style={styles.iconContainer} onPress={() => navigation.goBack()}>
      <Icon size={20} color={iconColor ? iconColor : colors.primary} name="back-24" />
    </Button>
    <View style={styles.titleContainer}>
      <Text font="semiBold" style={styles.title}>{title}</Text>
    </View>
    {RightComponent && (
      <RightComponent />
    )}
    {!RightComponent && rightText && (
      <Button style={styles.rightButtonContainer} onPress={onRightPress}>
        <Text style={styles.rightButtonText}>{rightText}</Text>
      </Button>
    )}
  </Animated.View>
);

export default Header;
