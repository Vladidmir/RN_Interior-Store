import React, {FC} from 'react';
import {Image, Pressable, Text, View, ViewStyle} from 'react-native';
import {s} from './styles';

interface IListItem {
  title?: string;
  subtitle?: string;
  onPress?: () => void;
  extraStyle?: ViewStyle;
}

const ListItem: FC<IListItem> = ({title, subtitle, onPress, extraStyle}) => {
  return (
    <Pressable onPress={onPress} style={[s.container, extraStyle]}>
      <View>
        <Text style={s.title}>{title}</Text>
        {!!subtitle ? <Text style={s.subtitle}>{subtitle}</Text> : null}
      </View>
      <Image style={s.arrow} source={require('../../assets/arrow.png')} />
    </Pressable>
  );
};

export default React.memo(ListItem);
