import React, {FC} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {s} from './styles';

interface ICheckbox {
  checked: boolean;
  onCheck: (arg: boolean) => void;
}
const Checkbox: FC<ICheckbox> = ({checked, onCheck}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() => onCheck(!checked)}
      style={s.container}>
      {checked ? (
        <View style={s.innerContainer}>
          <Image
            style={s.checkIcon}
            source={require('../../assets/check.png')}
          />
        </View>
      ) : null}
    </TouchableOpacity>
  );
};

export default React.memo(Checkbox);
