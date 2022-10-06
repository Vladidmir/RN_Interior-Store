import React, {useState, FC} from 'react';
import {ScrollView, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../../App';
import AuthHeader from '../../../components/AuthHeader';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import Separator from '../../../components/Separator';
import GoogleLogin from '../../../components/GoogleLogin';

import {s} from './styles';

type SigninProps = NativeStackScreenProps<RootStackParamList, 'Signin'>;

const Signin: FC<SigninProps> = ({navigation}) => {
  const onSignUp = () => {
    navigation.navigate('Signup');
  };

  const onBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <ScrollView style={s.container}>
          <AuthHeader onBackPress={onBack} title="Sign In" />

          <Input label="E-mail" placeholder="example@gmail.com" />
          <Input isPassword label="Password" placeholder="*******" />

          <Button style={s.button} title="Sign In" />

          <Separator text="Or sign in with" />

          <GoogleLogin />

          <Text style={s.footerText}>
            Don't have an account?
            <Text onPress={onSignUp} style={s.footerLink}>
              {' '}
              Sign Up
            </Text>
          </Text>
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default React.memo(Signin);
