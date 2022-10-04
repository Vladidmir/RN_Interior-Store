import React, {type PropsWithChildren} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';

import Splash from './src/screens/auth/Splash';

const App = () => {
  return (
    <SafeAreaView>
      <Splash />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
