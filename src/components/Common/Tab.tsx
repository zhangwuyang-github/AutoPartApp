import React from 'react';
import {Image, Pressable, StatusBar, StyleSheet, Text} from 'react-native';
import navigation from '../../services/navigation';

interface Props {
  route: any;
  isRouteActive: boolean;
}

const Tab: React.FC<Props> = ({route, isRouteActive}) => {
  const focused = isRouteActive;
  const iconName = `${route.name}${focused ? 'Focused' : ''}`;

  const iconStyle = [
    {
      width: 24,
      height: 24,
    },
  ];

  const labelFocused = focused ? {color: '#FF6633'} : {};

  const getName = () => {
    const menuNames = new Map([
      ['Home', 'Home'],
      ['HomeFocused', 'Home'],
      ['My', 'My'],
      ['MyFocused', 'My'],
    ]);
    return menuNames.get(iconName);
  };

  const getIcon = (name: string) => {
    let icon = null;
    // prettier-ignore
    switch (name) {
      case 'Home': icon = require('@images/tab/home.png'); break;
      case 'HomeFocused': icon = require('@images/tab/home_focused.png'); break;
      case 'My': icon = require('@images/tab/my.png'); break;
      case 'MyFocused': icon = require('@images/tab/my_focused.png'); break;
    }
    return icon;
  };

  const onTabPress = () => {
    StatusBar.setBarStyle('dark-content');
    navigation.navigate(route.name);
  };

  return (
    <Pressable onPress={onTabPress} style={styles.touchable}>
      <Image source={getIcon(iconName)} style={iconStyle} />
      <Text style={[styles.label, labelFocused]}>{getName}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  touchable: {
    flex: 1,
  },
  label: {
    color: '#BDC8D6',
    fontWeight: '400',
    fontSize: 10,
    lineHeight: 14,
    fontFamily: 'PingFangSC-Regular',
  },
});

export default Tab;
