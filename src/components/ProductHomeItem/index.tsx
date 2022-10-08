import React, {FC} from 'react';
import {Pressable, Text, Image} from 'react-native';
import {s} from './styles';

import {ProductItemProps} from '../types/data';

const ProductHomeItem: FC<ProductItemProps> = ({
  title,
  price,
  image,
  onPress,
}) => {
  return (
    <Pressable onPress={onPress} style={s.container}>
      <Image style={s.image} source={{uri: image}} />
      <Text style={s.title}>{title}</Text>
      <Text style={s.price}>{price}</Text>
    </Pressable>
  );
};

export default React.memo(ProductHomeItem);
