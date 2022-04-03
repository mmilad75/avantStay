import React from 'react';
import {FlatList as RNFlatList, FlatListProps} from 'react-native';

const A = (props: FlatListProps<any>, ref: React.MutableRefObject<RNFlatList<any>>) => <RNFlatList {...props} ref={ref} />;

const FlatList = React.forwardRef(A);

export default FlatList;
