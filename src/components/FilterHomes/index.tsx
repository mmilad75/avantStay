import React from 'react';
import {View, Modal} from 'react-native';
import {Text, Icon, Button, FilterBox} from '../';
import {scaleW} from '../../helpers/device';
import globalStyles from '../../helpers/globalStyles';
import styles from './styles';

interface Props {
  isVisible: boolean,
  closeModal: () => void,
}

const FilterHomes: React.FC<Props> = ({isVisible, closeModal}) => (
  <Modal animationType="slide" transparent={true} visible={isVisible}>
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Button style={styles.iconContainer} onPress={() => closeModal()}>
            <Icon name="close" size={scaleW(15)} />
          </Button>
          <Text font="semiBold" style={styles.title}>Filter homes</Text>
          <Button style={styles.clearButtonContainer}>
            <Text font="semiBold" style={styles.clearButtonText}>Clear All</Text>
          </Button>
        </View>
        <View style={styles.bodyContainer}>
          <FilterBox showOrder={true} destination={null} setDestination={() => console.log('asd')} />
        </View>
        <View style={styles.footerContainer}>
          <Button style={globalStyles.primaryButton}>
            <Text font="semiBold" style={globalStyles.primaryButtonText}>Show homes</Text>
          </Button>
        </View>
      </View>
    </View>
  </Modal>
);

export default FilterHomes;
