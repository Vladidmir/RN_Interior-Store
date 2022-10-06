import React from 'react';
import {ScrollView, Text, SafeAreaView} from 'react-native';
import {s} from './styles';

const ProfileScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView style={s.container}>
        <Text>Profile</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default React.memo(ProfileScreen);
