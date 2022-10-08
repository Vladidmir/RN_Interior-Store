import React, {FC} from 'react';
import {Pressable, Text, View, Image} from 'react-native';
import {colors} from '../../utils/colors';
import {s} from './styles';

interface IcategoryBox {
  title: string;
  image: string;
  onPress: () => void;
  isFirst: boolean;
  isSelected: boolean;
}

const CategoryBox: FC<IcategoryBox> = ({
  title,
  image,
  onPress,
  isFirst,
  isSelected,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[s.container, isFirst ? {marginLeft: 24} : {}]}>
      <View
        style={[
          s.imageContainer,
          isSelected ? {backgroundColor: colors.black} : {},
        ]}>
        <Image style={s.image} source={{uri: image}} />
      </View>
      <Text
        style={[
          s.title,
          isSelected ? {color: colors.blue, fontWeight: '500'} : {},
        ]}>
        {title}
      </Text>
    </Pressable>
  );
};

export default React.memo(CategoryBox);
