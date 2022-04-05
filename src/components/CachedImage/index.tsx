import React, {useEffect, useState} from 'react';
import {Image, ImageProps, ImageSourcePropType, Platform, View} from 'react-native';
import * as FileSystem from 'expo-file-system';
const shorthash = require('shorthash');
import styles from './styles';

interface Props {
  source: {
    uri: string
  }
}

const CachedImage: React.FC<ImageProps&Props> = ({source, ...props}) => {
  const [uri, setUri] = useState<ImageSourcePropType|null>(null);
  useEffect(() => {
    const name = shorthash.unique(source.uri);
    const extension = (Platform.OS === 'android') ? 'file://' : '';
    const path = `${extension}${FileSystem.cacheDirectory}/${name}.png`;
    FileSystem.getInfoAsync(path).then(result => {
      if (result.exists) {
        loadFile(path);
      } else {
        downloadFile(source.uri, path);
      }
    });
  }, []);

  const downloadFile = (uri: string, path: string) => {
    FileSystem.downloadAsync(uri, path).then(() => loadFile(path));
  };

  const loadFile = (path: string) => {
    setUri({uri: path});
  };

  if (uri === null) {
    return (
      <View style={styles.placeholderConatiner}>
        <Image style={styles.placeholderImage} source={require('../../assets/images/logo.png')} />
      </View>
    );
  }

  return (
    <Image {...props} source={uri} />
  );
};

export default CachedImage;
