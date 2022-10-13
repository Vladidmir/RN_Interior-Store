import React, {useState, FC} from 'react';
import {Image, Linking, Pressable, ScrollView, Text, View} from 'react-native';
import {s} from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../../components/Header';
import ListItem from '../../../components/ListItem';
import Button from '../../../components/Button';
import {RootStackParamList} from '../../../../App';
import {NativeStackScreenProps} from '@react-navigation/native-stack/lib/typescript/src/types';
import EditableBox from '../../../components/EditableBox';

interface ISettings
  extends NativeStackScreenProps<RootStackParamList, 'Settings'> {}

const Settings: FC<ISettings> = ({navigation}) => {
  const [editing, setEditing] = useState(false);
  const [values, setValues] = useState({name: 'User', email: 'user@mail.com'});

  const onEditPress = () => {
    setEditing(true);
  };

  const onSave = () => {
    setEditing(false);
  };

  const onChange = (key: string, value: string) => {
    setValues(v => ({...v, [key]: value}));
  };

  const onItemPress = () => {
    Linking.openURL('https://google.com');
  };

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView>
      <Header showBack onBackPress={goBack} title="Settings" />
      <ScrollView style={s.container}>
        <View style={s.sectionHeader}>
          <Text style={s.sectionTitle}>Personal Information</Text>
          <Pressable onPress={onEditPress}>
            <Image
              style={s.icon}
              source={require('../../../assets/edit.png')}
            />
          </Pressable>
        </View>
        <EditableBox
          label="Name"
          onChangeText={v => onChange('name', v)}
          value={values.name}
          editable={editing}
        />
        <EditableBox
          label="Email"
          onChangeText={v => onChange('email', v)}
          value={values.email}
          editable={editing}
        />
        {editing ? (
          <Button style={s.button} onPress={onSave} title="Save" />
        ) : null}

        <Text style={[s.sectionTitle, {marginTop: 40}]}>Help Center</Text>
        <ListItem onPress={onItemPress} extraStyle={s.item} title="FAQ" />
        <ListItem
          onPress={onItemPress}
          extraStyle={s.item}
          title="Contact Us"
        />
        <ListItem
          onPress={onItemPress}
          extraStyle={s.item}
          title="Privacy & Terms"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default React.memo(Settings);
