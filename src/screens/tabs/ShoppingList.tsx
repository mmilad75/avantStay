import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import React from 'react';
import {View, FlatList, BookItem} from '../../components';
import globalStyles from '../../helpers/globalStyles';
import {useAppSelector} from '../../helpers/hooks';
import {HomeTabParamsList} from '../../navigators/Home';
import {Book} from '../../state/book/interface';

export type shoppingListScreenNavigationType = BottomTabNavigationProp<HomeTabParamsList, 'home.shoppingList'>;

const ShoppingList: React.FC = () => {
	const shoplist = useAppSelector(state => state.book.shopList);
	const books = useAppSelector(state => state.book);

	return (
		<View style={globalStyles.screenContainer}>
			<FlatList
				extraData={books}
				data={shoplist}
				renderItem={({item, index}: {item: Book, index: number}) => (<BookItem buttonFunctionality="remove" key={index} item={item} />
				)}
			/>
		</View>
	);
};

export default ShoppingList;
