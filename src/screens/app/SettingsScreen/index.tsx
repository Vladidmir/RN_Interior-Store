import React from 'react';
import {ScrollView, Text, SafeAreaView} from 'react-native';
import {s} from './styles';

const SettingsScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView style={s.container}>
        <Text>Settings</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default React.memo(SettingsScreen);
