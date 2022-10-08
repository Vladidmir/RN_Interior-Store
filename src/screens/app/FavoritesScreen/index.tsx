import React from 'react';
import {FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {products} from '../../../data/products';
import FavoriteItem from '../../../components/FavoriteItem';
import Header from '../../../components/Header';

import {FlatPropProduct} from '../../../components/types/data';

const Favorites = () => {
  const renderItem = ({item}: FlatPropProduct) => {
    return <FavoriteItem {...item} />;
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
