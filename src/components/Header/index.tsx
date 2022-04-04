import React from 'react';
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
  transparent?: boolean
}

const Header: React.FC<Props> = ({
  navigation,
  title,
  rightText,
  onRightPress,
  transparent = false,
}) => (
  <View style={styles.container}>
    <Button style={styles.iconContainer} onPress={() => navigation.goBack()}>
      <Icon size={20} color={transparent ? colors.white : colors.primary} name="back-24" />
    </Button>
    <View style={styles.titleContainer}>
      <Text font="semiBold" style={styles.title}>{title}</Text>
    </View>
    {rightText && (
      <Button style={styles.rightButtonContainer} onPress={onRightPress}>
        <Text style={styles.rightButtonText}>{rightText}</Text>
      </Button>
    )}
  </View>
);

export default Header;
