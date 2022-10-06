import React from 'react';
import {ScrollView, Text, SafeAreaView} from 'react-native';
import {s} from './styles';

const FavoritesScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView style={s.container}>
        <Text>Favorites</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default React.memo(FavoritesScreen);
