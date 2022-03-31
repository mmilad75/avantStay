import React from 'react';
import {FlatList as RNFlatList, FlatListProps} from 'react-native';

const FlatList: React.FC<FlatListProps<any>> = ({...props}) => <RNFlatList {...props} />;

export default FlatList;
