import React, {useState, FC} from 'react';
import {categories} from '../../data/categories';
import {
  Pressable,
  Text,
  TextInput,
  View,
  Image,
  TextInputProps,
  ViewStyle,
  TouchableOpacity,
  Modal,
} from 'react-native';
import {s} from './styles';
import {Category} from '../types/data';

interface IInput extends TextInputProps {
  label?: string;
  isPassword?: boolean;
  extraStyle?: ViewStyle;
  picker?: boolean;
  options?: Category[];
  onChangeText: (text: Category | ACategory | string) => void;
  value?: any;
}

import {ACategory} from '../../screens/app/CreateListingScreen';

const Input: FC<IInput> = ({
  label,
  placeholder,
  isPassword,
  value,
  onChangeText,
  extraStyle,
  picker,
  options,
  ...props
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isPickerModalVisible, setPickerModalVisible] = useState(false);

  const onEyePress = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  let currentPathEye = isPasswordVisible
    ? require('../../assets/eye.png')
    : require('../../assets/eye_closed.png');

  const onSelect = (opt: Category) => {
    onChangeText(opt);
    setPickerModalVisible(false);
  };
  return (
    <View style={s.container}>
      <Text style={s.label}>{label}</Text>
      {picker ? (
        <Pressable
          onPress={() => setPickerModalVisible(true)}
          style={s.inputContainer}>
          {value ? (
            <Text style={[s.input, extraStyle]}>{value?.title}</Text>
          ) : (
            <Text style={[s.placeholder, extraStyle]}>{placeholder}</Text>
          )}

          <Image style={s.arrow} source={require('../../assets/arrow.png')} />
        </Pressable>
      ) : (
        <View style={s.inputContainer}>
          <TextInput
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            secureTextEntry={isPassword && !isPasswordVisible}
            style={[s.input, extraStyle]}
            {...props}
          />

          {isPassword ? (
            <Pressable onPress={onEyePress}>
              <Image style={s.eye} source={currentPathEye} />
            </Pressable>
          ) : null}
        </View>
      )}

      <Modal transparent visible={isPickerModalVisible}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => setPickerModalVisible(false)}
          style={s.modalWrapper}>
          <TouchableOpacity activeOpacity={1} style={s.modalContent}>
            <Text style={s.headerTitle}>Select options</Text>

            {options?.map(opt => {
              if (!opt?.id) {
                return null;
              }

              const selected = value?.id === opt?.id;

              return (
                <Text
                  onPress={() => onSelect(opt)}
                  style={[s.optionText, selected ? s.selectedOption : {}]}
                  key={opt?.title}>
                  {opt?.title}
                </Text>
              );
            })}
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default React.memo(Input);
