import React, {useState, FC} from 'react';
import {
  FlatList,
  Image,
  Dimensions,
  View,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import {Product} from '../types/data';

import {s} from './styles';

const {width} = Dimensions.get('window');

const ImageCarousel = ({images}: Pick<Product, 'images'>) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScrollEnd = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const horizontalOffset = e.nativeEvent.contentOffset.x;
    const index = Math.round(horizontalOffset / width);

    setActiveIndex(index);
  };

  const renderImage = ({item}: {item: string}) => {
    return <Image style={s.image} source={{uri: item}} />;
  };

  return (
    <View>
      <FlatList
        horizontal
        pagingEnabled
        style={s.list}
        data={images}
        renderItem={renderImage}
        onMomentumScrollEnd={handleScrollEnd}
      />

      <View>
        <View style={s.pagination}>
          {images?.map((_, i) => (
            <View
              key={i}
              style={[s.paginationLine, i === activeIndex ? s.activeLine : {}]}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

export default React.memo(ImageCarousel);
