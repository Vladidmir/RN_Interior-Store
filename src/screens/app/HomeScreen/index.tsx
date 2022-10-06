import React from 'react';
import {ScrollView, Text, SafeAreaView} from 'react-native';
import {s} from './styles';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView style={s.container}>
        <Text>HOME</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default React.memo(HomeScreen);
