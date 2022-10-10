import React, {FC} from 'react';
import {ScrollView, Text, Image, View, Pressable, Linking} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NativeStackScreenProps} from '@react-navigation/native-stack/lib/typescript/src/types';

import Button from '../../../components/Button';
import ImageCarousel from '../../../components/ImageCarousel';
import {RootStackParamList, RootTabParamList} from '../../../../App';
import {s} from './styles';

interface IProductDetail
  extends NativeStackScreenProps<RootStackParamList, 'ProductDetails'> {}

const ProductDetails: FC<IProductDetail> = ({route, navigation}) => {
  const {product} = route?.params || {};

  const onBackPress = () => {
    navigation.goBack();
  };

  const onContact = () => {
    // Make a phone call
    const phone = '+30974140464';
    Linking.openURL(`tel:${phone}`);

    // Send an Email
    const email = 'support@mail.com';
    Linking.openURL(`mailto:${email}`);
  };

  return (
    <SafeAreaView style={s.safe}>
      <ScrollView style={s.container}>
        {product?.images?.length ? (
          <ImageCarousel images={product?.images} />
        ) : (
          <Image style={s.image} source={{uri: product?.image}} />
        )}
        <View style={s.content}>
          <Text style={s.title}>{product?.title}</Text>
          <Text style={s.price}>{product?.price}</Text>
          <Text style={s.description}>{product?.description}</Text>
        </View>

        <Pressable onPress={onBackPress} style={s.backContainer}>
          <Image
            style={s.backIcon}
            source={require('../../../assets/back.png')}
          />
        </Pressable>
      </ScrollView>

      <View style={s.footer}>
        <Pressable style={s.bookmarkContainer}>
          <Image
            style={s.bookmarkIcon}
            source={require('../../../assets/bookmark_blue.png')}
          />
        </Pressable>
        <Button
          style={{flex: 0.85 / 1}}
          onPress={onContact}
          title="Contact Seller"
        />
      </View>
    </SafeAreaView>
  );
};

export default React.memo(ProductDetails);
