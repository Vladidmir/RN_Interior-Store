import React, {useEffect} from 'react';
import {Image} from 'react-native';
import {Theme, DefaultTheme} from '@react-navigation/native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {GoogleSignin} from '@react-native-google-signin/google-signin';
import Config from 'react-native-config';

import Signin from './src/screens/auth/Signin';
import Splash from './src/screens/auth/Splash';
import Signup from './src/screens/auth/Signup';
import HomeScreen from './src/screens/app/HomeScreen';
import FavoritesScreen from './src/screens/app/FavoritesScreen';
import ProfileScreen from './src/screens/app/ProfileScreen';
import ProductDetailsScreen from './src/screens/app/ProductDetailsScreen';
import SettingsScreen from './src/screens/app/SettingsScreen';
import CreateListingScreen from './src/screens/app/CreateListingScreen';
import MyListingsScreen from './src/screens/app/MyListingsScreen';

import {colors} from './src/utils/colors';
import {Product} from './src/components/types/data';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<RootTabParamList>();

export type RootStackParamList = {
  ProductDetails: {product?: Product};
  Tabs: RootTabParamList;
  Splash: undefined;
  Signin: undefined;
  Signup: undefined;
  //.........
  Profile: undefined;
  Settings: undefined;
  CreateListing: undefined;
  MyListings: undefined;
};

export type ProfileStackParamList = {
  Profile: undefined;
  Settings: undefined;
  CreateListing: undefined;
  MyListings: undefined;
};

export type RootTabParamList = {
  ProfileStack: undefined;
  Favorites: undefined;
  Home: undefined;
  ProductDetails: {product?: Product};
};

const ProfileStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="CreateListing" component={CreateListingScreen} />
      <Stack.Screen name="MyListings" component={MyListingsScreen} />
    </Stack.Navigator>
  );
};

const Tabs = () => (
  <Tab.Navigator
    screenOptions={({route}) => ({
      tabBarIcon: ({focused, color, size}) => {
        let icon;

        if (route.name === 'Home') {
          icon = focused
            ? require('./src/assets/tabs/home_active.png')
            : require('./src/assets/tabs/home.png');
        } else if (route.name === 'ProfileStack') {
          icon = focused
            ? require('./src/assets/tabs/profile_active.png')
            : require('./src/assets/tabs/profile.png');
        } else if (route.name === 'Favorites') {
          icon = focused
            ? require('./src/assets/tabs/bookmark_active.png')
            : require('./src/assets/tabs/bookmark.png');
        }

        // You can return any component that you like here!
        return <Image style={{width: 24, height: 24}} source={icon} />;
      },
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: {borderTopColor: colors.lightGrey},
    })}>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Favorites" component={FavoritesScreen} />
    <Tab.Screen name="ProfileStack" component={ProfileStack} />
  </Tab.Navigator>
);

const App = () => {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId: Config.GOOGLE_CLIENT_ID,
      iosClientId: Config.GOOGLE_IOS_CLIENT_ID,
      scopes: ['https://www.googleapis.com/auth/drive.readonly'],
      offlineAccess: false,
    });
  }, []);
  const isSignedIn = false;

  const theme: Theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: colors.white,
    },
  };

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={theme}>
        <Stack.Navigator>
          {isSignedIn ? (
            <>
              <Stack.Screen
                name="Tabs"
                component={Tabs}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="ProductDetails"
                component={ProductDetailsScreen}
                options={{headerShown: false}}
              />
            </>
          ) : (
            <>
              <Stack.Screen
                name="Splash"
                component={Splash}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="Signin"
                component={Signin}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="Signup"
                component={Signup}
                options={{headerShown: false}}
              />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
