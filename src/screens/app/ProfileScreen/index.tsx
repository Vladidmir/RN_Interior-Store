import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {s} from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../../components/Header';
import ListItem from '../../../components/ListItem';
import Button from '../../../components/Button';
import {RootStackParamList} from '../../../../App';
import {NativeStackScreenProps} from '@react-navigation/native-stack/lib/typescript/src/types';

interface IProfile
  extends NativeStackScreenProps<RootStackParamList, 'Profile'> {}

const Profile: FC<IProfile> = ({navigation}) => {
  const num = 10;

  const onLogout = () => {
    console.log('log out clicked');
  };

  const onSettingsPress = () => {
    navigation.navigate('Settings');
  };

  const onMyListingsPress = () => {
    navigation.navigate('MyListings');
  };

  const onNewListingPress = () => {
    navigation.navigate('CreateListing');
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Header title="Profile" showLogout onLogout={onLogout} />
      <View style={s.container}>
        <View style={s.content}>
          <Text style={s.name}>User name</Text>
          <Text style={s.email}>User email</Text>

          <ListItem
            onPress={onMyListingsPress}
            title="My Listings"
            subtitle={`You have ${num} listings`}
          />
          <ListItem
            onPress={onSettingsPress}
            title="Settings"
            subtitle="Account, FAQ, Contact"
          />
        </View>

        <Button
          onPress={onNewListingPress}
          style={{flex: 0}}
          title="Add New Listing"
        />
      </View>
    </SafeAreaView>
  );
};

export default React.memo(Profile);
