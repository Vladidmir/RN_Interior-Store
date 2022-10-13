import React, {useState, FC} from 'react';
import {
  ActivityIndicator,
  Image,
  KeyboardAvoidingView,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {s} from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../../components/Header';
import {
  launchImageLibrary,
  ImageLibraryOptions,
  Callback,
  Asset,
  ImagePickerResponse,
} from 'react-native-image-picker';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import {categories} from '../../../data/categories';

import {RootStackParamList} from '../../../../App';
import {NativeStackScreenProps} from '@react-navigation/native-stack/lib/typescript/src/types';
import {ACategory, Category} from '../../../components/types/data';

export type Values = {
  title?: string;
  price?: string;
  description?: string;
  category?: ACategory;
};

interface ICreateListing
  extends NativeStackScreenProps<RootStackParamList, 'CreateListing'> {}
const CreateListing: FC<ICreateListing> = ({navigation}) => {
  const [images, setImages] = useState<Asset[]>([]);
  const [values, setValues] = useState<Values>({});
  const [loading, setLoading] = useState(false);
  const goBack = () => {
    navigation.goBack();
  };

  const uploadNewImage = async () => {
    setLoading(true);
    const imageRes: ImagePickerResponse = await launchImageLibrary(
      {
        mediaType: 'photo',
        selectionLimit: 4,
      },
      response => response,
    );

    setImages(list => [
      ...list,
      ...(imageRes?.assets?.length ? imageRes.assets : []),
    ]);
    setLoading(false);
  };

  const onDeleteImage = (image: Asset) => {
    setImages(list => {
      const filteredImages = list.filter(
        img => img?.fileName !== image?.fileName,
      );
      return filteredImages;
    });
  };

  const onChange = (value: string | Category | ACategory, key: string) => {
    setValues(val => ({...val, [key]: value}));
  };

  return (
    <SafeAreaView>
      <Header
        showBack={true}
        onBackPress={goBack}
        title="Create a new listing"
      />

      <ScrollView style={s.container}>
        <KeyboardAvoidingView behavior="position">
          <Text style={s.sectionTitle}>Upload Photos</Text>

          <View style={s.imageRow}>
            <TouchableOpacity
              disabled={loading}
              style={s.uploadContainer}
              onPress={uploadNewImage}>
              <View style={s.uploadCircle}>
                <Text style={s.uploadPlus}>+</Text>
              </View>
            </TouchableOpacity>

            {images?.map(image => (
              <View style={s.imageCont} key={image?.fileName}>
                <Image style={s.image} source={{uri: image?.uri}} />
                <Pressable hitSlop={20} onPress={() => onDeleteImage(image)}>
                  <Image
                    style={s.delete}
                    source={require('../../../assets/close.png')}
                  />
                </Pressable>
              </View>
            ))}

            {loading ? <ActivityIndicator /> : null}
          </View>

          <Input
            placeholder="Listing Title"
            label="Title"
            value={values.title}
            onChangeText={v => onChange(v, 'title')}
          />
          <Input
            placeholder="Select the category"
            label="Category"
            value={values.category}
            onChangeText={v => onChange(v, 'category')}
            picker
            options={categories}
          />
          <Input
            placeholder="Enter price in USD"
            label="Price"
            value={values.price}
            onChangeText={v => onChange(v, 'price')}
            keyboardType="numeric"
          />
          <Input
            extraStyle={s.textarea}
            placeholder="Tell us more..."
            label="Description"
            value={values.description}
            onChangeText={v => onChange(v, 'description')}
            multiline
          />
        </KeyboardAvoidingView>

        <Button title="Submit" style={s.button} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default React.memo(CreateListing);
