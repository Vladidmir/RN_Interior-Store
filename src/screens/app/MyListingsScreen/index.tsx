import React, {FC} from 'react';
import {FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {products} from '../../../data/products';
import FavoriteItem from '../../../components/FavoriteItem';
import Header from '../../../components/Header';
import {RootStackParamList} from '../../../../App';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {FlatPropProduct} from '../../../components/types/data';

interface IMyListings
  extends NativeStackScreenProps<RootStackParamList, 'MyListings'> {}

const MyListings: FC<IMyListings> = ({navigation}) => {
  const renderItem = ({item}: FlatPropProduct) => {
    const onProductPress = () => {
      navigation.navigate('ProductDetails', {product: item});
    };
    return (
      <FavoriteItem
        icon={require('../../../assets/delete.png')}
        onPress={onProductPress}
        {...item}
      />
    );
  };

  const goBack = () => navigation.goBack();

  return (
    <SafeAreaView>
      <Header title="My Listings" showBack onBackPress={goBack} />

      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={item => String(item?.id)}
      />
    </SafeAreaView>
  );
};

export default React.memo(MyListings);
