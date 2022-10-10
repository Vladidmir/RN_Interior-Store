import React, {useState, useEffect, FC} from 'react';
import {FlatList, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {categories} from '../../../data/categories';
import {products} from '../../../data/products';

import Header from '../../../components/Header';
import {s} from './styles';
import CategoryBox from '../../../components/CategoryBox';
import ProductHomeItem from '../../../components/ProductHomeItem';

import {
  FlatPropProduct,
  FlatPropCategory,
  Product,
} from '../../../components/types/data';
import {RootTabParamList} from '../../../../App';
import {NativeStackScreenProps} from '@react-navigation/native-stack/lib/typescript/src/types';

interface IHomeSceen extends NativeStackScreenProps<RootTabParamList, 'Home'> {}

const HomeScreen: FC<IHomeSceen> = ({navigation}) => {
  const [selectedCategory, setSelectedCategory] = useState<number | null>();
  const [keyword, setKeyword] = useState<string>();
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    if (selectedCategory && !keyword) {
      const updatedProducts = products.filter(
        product => product?.category === selectedCategory,
      );
      setFilteredProducts(updatedProducts);
    } else if (selectedCategory && keyword) {
      const updatedProducts = products.filter(
        product =>
          product?.category === selectedCategory &&
          product?.title?.toLowerCase().includes(keyword?.toLowerCase()),
      );
      setFilteredProducts(updatedProducts);
    } else if (!selectedCategory && keyword) {
      const updatedProducts = products.filter(product =>
        product?.title?.toLowerCase().includes(keyword?.toLowerCase()),
      );
      setFilteredProducts(updatedProducts);
    } else if (!keyword && !selectedCategory) {
      setFilteredProducts(products);
    }
  }, [selectedCategory, keyword]);

  const renderCategoryItem = ({item, index}: FlatPropCategory) => {
    return (
      <CategoryBox
        onPress={() => setSelectedCategory(item.id)}
        isSelected={item.id === selectedCategory}
        isFirst={index === 0}
        title={item.title}
        image={item.image}
      />
    );
  };

  const renderProductItem = ({item}: FlatPropProduct) => {
    const onProductPress = (product: Product) => {
      navigation.navigate('ProductDetails', {product});
    };

    return <ProductHomeItem onPress={() => onProductPress(item)} {...item} />;
  };

  const onChangeKeyword = (text: string | '') => {
    setKeyword(text);
  };

  return (
    <SafeAreaView>
      <View style={s.container}>
        <Header
          showSearch
          onSearch={onChangeKeyword}
          keyword={keyword}
          title="Find All You Need"
        />

        <>
          <FlatList
            showsHorizontalScrollIndicator={false}
            style={s.list}
            horizontal
            data={categories}
            renderItem={renderCategoryItem}
            keyExtractor={(item, index) => String(index)}
          />
          <FlatList
            style={s.productsList}
            numColumns={2}
            data={filteredProducts}
            renderItem={renderProductItem}
            keyExtractor={item => String(item.id)}
            ListFooterComponent={<View style={{height: 200}} />}
          />
        </>
      </View>
    </SafeAreaView>
  );
};

export default React.memo(HomeScreen);
