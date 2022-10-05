import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {s} from './styles';

const Separator: FC<{text?: string}> = ({text}) => {
  return (
    <View style={s.container}>
      <View style={s.line} />
      <Text style={s.text}>{text}</Text>
      <View style={s.line} />
    </View>
  );
};

export default React.memo(Separator);
