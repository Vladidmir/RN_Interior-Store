import React, {FC} from 'react';
import {Pressable, Text, View, Image} from 'react-native';
import {s} from './styles';

import {ProductItemProps} from '../types/data';

const FavoriteItem: FC<ProductItemProps> = ({
  icon,
  title,
  price,
  image,
  onPress,
}) => {
  return (
    <Pressable onPress={onPress} style={s.container}>
      <Image style={s.image} source={{uri: image}} />
      <View style={s.content}>
        <Text style={s.title}>{title}</Text>
        <Text style={s.price}>{price}</Text>
      </View>

      <Image
        source={icon || require('../../assets/close.png')}
        style={s.icon}
      />
    </Pressable>
  );
};

export default React.memo(FavoriteItem);
