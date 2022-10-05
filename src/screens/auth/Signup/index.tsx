import React, {useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import AuthHeader from '../../../components/AuthHeader';
import Button from '../../../components/Button';
import Checkbox from '../../../components/Checkbox';
import Input from '../../../components/Input';
import Separator from '../../../components/Separator';
import GoogleLogin from '../../../components/GoogleLogin';
import {s} from './styles';

const Signup = () => {
  const [checked, setChecked] = useState(false);

  const onSignIn = () => {
    console.log('HELLO');
  };

  return (
    <ScrollView style={s.container}>
      <AuthHeader title="Sign Up" />
      <Input label="Name" placeholder="John Doe" />
      <Input label="E-mail" placeholder="example@gmail.com" />
      <Input isPassword label="Password" placeholder="*******" />
      <View style={s.agreeRow}>
        <Checkbox checked={checked} onCheck={setChecked} />
        <Text style={s.agreeText}>
          I agree with <Text style={s.agreeTextBold}>Terms</Text> &{' '}
          <Text style={s.agreeTextBold}>Privacy</Text>
        </Text>
      </View>
      <Button style={s.button} title="Sign Up" />
      <Separator text="Or sign up with" />
      <GoogleLogin />
      <Text style={s.footerText}>
        Already have an account?
        <Text onPress={onSignIn} style={s.footerLink}>
          {' '}
          Sign In
        </Text>
      </Text>
    </ScrollView>
  );
};

export default React.memo(Signup);
