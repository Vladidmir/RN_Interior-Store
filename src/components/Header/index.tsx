import React, {useState, FC} from 'react';
import {Pressable, Text, View, Image} from 'react-native';
import Input from '../Input';

import {s} from './styles';

interface IHeader {
  title: string;
  onBackPress: () => void;
  onLogout: () => void;
  showLogout: boolean;
  showSearch: boolean;
  onSearch?: (text: string | '') => void;
  keyword?: any;
  showBack: boolean;
}

const Header: FC<Partial<IHeader>> = ({
  title,
  onBackPress,
  onLogout,
  showLogout,
  showSearch,
  onSearch,
  keyword,
  showBack,
}) => {
  const [showSearchInput, setShowSearchInput] = useState(false);

  const onSearchClick = () => {
    setShowSearchInput(s => !s);
  };

  return (
    <View style={s.mainContainer}>
      <View style={s.container}>
        {showBack ? (
          <Pressable hitSlop={20} onPress={onBackPress}>
            <Image style={s.icon} source={require('../../assets/back.png')} />
          </Pressable>
        ) : showSearch ? (
          <Pressable hitSlop={20} onPress={onSearchClick}>
            <Image style={s.icon} source={require('../../assets/search.png')} />
          </Pressable>
        ) : (
          <View style={s.space} />
        )}

        <Text style={s.title}>{title}</Text>

        {showLogout ? (
          <Pressable hitSlop={20} onPress={onLogout}>
            <Image style={s.icon} source={require('../../assets/logout.png')} />
          </Pressable>
        ) : (
          <View style={s.space} />
        )}
      </View>

      {showSearchInput ? (
        <Input
          onChangeText={onSearch}
          value={keyword}
          placeholder="Type your keyword..."
        />
      ) : null}
    </View>
  );
};

export default React.memo(Header);
