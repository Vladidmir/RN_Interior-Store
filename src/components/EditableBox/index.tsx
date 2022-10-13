import React, {FC} from 'react';
import {Image, Pressable, Text, TextInput, View, ViewStyle} from 'react-native';
import {s} from './styles';

interface IEditableBox {
  label: string;
  value: string;
  onChangeText: (text: string) => void | '';
  extraStyle: ViewStyle;
  editable: boolean;
}
const EditableBox: FC<Partial<IEditableBox>> = ({
  label,
  value,
  onChangeText,
  editable,
  extraStyle,
}) => {
  return (
    <View style={[s.container, extraStyle]}>
      <Text style={s.label}>{label}</Text>
      <TextInput
        editable={editable}
        value={value}
        onChangeText={onChangeText}
        style={s.input}
      />
    </View>
  );
};

export default React.memo(EditableBox);
