import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {s} from './styles';

const GoogleLogin = () => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() => {}}
      style={s.container}>
      <Image style={s.image} source={require('../../assets/google.png')} />
    </TouchableOpacity>
  );
};

export default React.memo(GoogleLogin);
