import React from 'react';
import {Text, Image, View, Pressable} from 'react-native';
import Button from '../../../components/Button';
import {s} from './style';

const Splash = () => {
  return (
    <View style={s.container}>
      <Image
        resizeMode="contain"
        style={s.image}
        source={require('../../../assets/splash-image.png')}
      />
      <View style={s.titleContainer}>
        <Text style={s.title}>You'll Find</Text>
        <Text style={[s.title, s.innerTitle]}>All you need</Text>
        <Text style={s.title}>Here!</Text>
      </View>

      <Button title="Sign Up" />
      <Pressable hitSlop={20}>
        <Text style={s.footerText}>Sign In</Text>
      </Pressable>
    </View>
  );
};

export default Splash;
