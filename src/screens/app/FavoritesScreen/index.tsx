import React, {FC} from 'react';
import {FlatList} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack/lib/typescript/src/types';
import {SafeAreaView} from 'react-native-safe-area-context';

import FavoriteItem from '../../../components/FavoriteItem';
import Header from '../../../components/Header';

import {FlatPropProduct} from '../../../components/types/data';
import {RootTabParamList} from '../../../../App';

import {products} from '../../../data/products';

interface IFavorites
  extends NativeStackScreenProps<RootTabParamList, 'Favorites'> {}

const Favorites: FC<IFavorites> = ({navigation}) => {
  const renderItem = ({item}: FlatPropProduct) => {
    const onProductPress = () => {
      navigation.navigate('ProductDetails', {product: item});
    };
    return <FavoriteItem onPress={onProductPress} {...item} />;
  };

  return (
    <SafeAreaView>
      <Header title="Favorites" />

      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={item => String(item?.id)}
      />
    </SafeAreaView>
  );
};

export default React.memo(Favorites);
