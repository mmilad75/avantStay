/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import React, {useState} from 'react';
import {TextInput} from 'react-native';
import {Button, Icon, View} from '../';
import colors from '../../helpers/colors';
import styles from './styles';
import {
  SourceSansPro_400Regular,
  SourceSansPro_600SemiBold,
  useFonts,
} from '@expo-google-fonts/source-sans-pro';
import AppLoading from 'expo-app-loading';

interface Props {
  setValue: (val: string) => void,
  value: string,
  placeholder?: string
}

const SearchInput: React.FC<Props> = ({setValue, value, placeholder}) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [fontsLoaded] = useFonts({
    SourceSansPro_400Regular,
    SourceSansPro_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={[styles.container, isFocused && styles.focusedContainer]}>
      <View style={styles.iconContainer}>
        <Icon name="search" size={26} color={colors.primary40} />
      </View>
      <View style={styles.inputContainer}>
        <TextInput onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} style={[styles.inputText, {fontFamily: 'SourceSansPro_400Regular'}, value?.length > 0 && styles.inputTextFocused]} placeholder={placeholder} value={value} onChangeText={setValue} />
      </View>
      {value?.length > 0 && (
        <Button style={styles.buttonContainer} onPress={() => setValue('')}>
          <Icon name="close" size={9} color={colors.primary40} />
        </Button>
      )}
    </View>
  );
};

export default SearchInput;
