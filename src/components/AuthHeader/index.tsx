import React, {FC} from 'react';
import {Pressable, Text, View, Image} from 'react-native';
import {s} from './styles';

interface IAuthHeader {
  title: string;
  onBackPress?: () => void;
}

const AuthHeader: FC<IAuthHeader> = ({title, onBackPress}) => {
  return (
    <View style={s.container}>
      <Pressable hitSlop={20} onPress={onBackPress}>
        <Image style={s.image} source={require('../../assets/auth_back.png')} />
      </Pressable>
      <Text style={s.title}>{title}</Text>
    </View>
  );
};

export default React.memo(AuthHeader);
