import React, {CSSProperties, FC} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {s} from './styles';

interface IButton {
  title: string;
  onPress?: () => void;
  style?: CSSProperties | {};
}
const Button: FC<IButton> = ({title, onPress, style}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onPress}
      style={[s.container, style]}>
      <Text style={s.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default React.memo(Button);
