import React, {FC} from 'react';
import {Text, Image, View, Pressable} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../../App';

import Button from '../../../components/Button';
import {s} from './style';

type SplashProps = NativeStackScreenProps<RootStackParamList, 'Splash'>;

const Splash: FC<SplashProps> = ({navigation}) => {
  const onSignup = () => {
    navigation.navigate('Signup');
  };

  const onSignin = () => {
    navigation.navigate('Signin');
  };
  return (
    <SafeAreaView>
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

        <Button onPress={onSignup} title="Sign Up" />
        <Pressable onPress={onSignin} hitSlop={20}>
          <Text style={s.footerText}>Sign In</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Splash;
