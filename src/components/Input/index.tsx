import React, {useState, FC} from 'react';
import {
  Pressable,
  Text,
  TextInput,
  View,
  Image,
  TextInputProps,
} from 'react-native';
import {s} from './styles';

interface IInput extends TextInputProps {
  label?: string;
  isPassword?: boolean;
}
const Input: FC<IInput> = ({
  label,
  placeholder,
  isPassword,
  value,
  onChangeText,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const onEyePress = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  let currentPathEye = isPasswordVisible
    ? require('../../assets/eye.png')
    : require('../../assets/eye_closed.png');

  return (
    <View style={s.container}>
      <Text style={s.label}>{label}</Text>
      <View style={s.inputContainer}>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={isPassword && !isPasswordVisible}
          placeholder={placeholder}
          style={s.input}
        />

        {isPassword ? (
          <Pressable onPress={onEyePress}>
            <Image style={s.eye} source={currentPathEye} />
          </Pressable>
        ) : null}
      </View>
    </View>
  );
};

export default React.memo(Input);
