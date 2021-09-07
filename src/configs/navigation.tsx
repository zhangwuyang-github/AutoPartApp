import React from 'react';
import {CardStyleInterpolators} from '@react-navigation/stack';
import {Dimensions, Image, Platform, Pressable} from 'react-native';
import Navigation from '../services/navigation';
import {headerBack} from '../components/Common/BackIcon';
import {NavigationProps} from '../type/navigation';

const {width} = Dimensions.get('window');

const scale = width / 375;

const transitionSpecConfig = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 1000,
    mass: 6,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

const navOptions: any = {
  headerTintColor: '#333',
  headerBackTitleVisible: false,
  headerBackTitle: null,
  headerTransparent: false,
  headerTitleAlign: 'center',
  headerTitleStyle: {
    fontSize: 16,
    color: 'rgba(51, 51, 51, 1)',
    fontFamily: 'PingFangSC-Semibold',
    fontWeight: '700',
  },
  headerStyle: {
    shadowColor: 'transparent',
    elevation: 0,
  },
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  cardStyle: {
    backgroundColor: '#F7F7F7',
  },
};

if (Platform.OS === 'android') {
  navOptions.headerLeft = () => (
    <Pressable
      style={{paddingLeft: 10 * scale}}
      onPress={() => {
        Navigation.goBack();
      }}>
      <Image
        source={require('@images/navigation/back.png')}
        style={{width: 24 * scale, height: 24 * scale}}
      />
    </Pressable>
  );
}

if (Platform.OS === 'ios') {
  navOptions.headerBackImage = headerBack;
}

const tabOptions = {
  style: {
    borderTopWidth: 0,
    backgroundColor: 'transparent',
    height: 55,
  },
};

function withNavigationOptions(
  {navigation, route}: NavigationProps<any>,
  options: any,
) {
  if (typeof options === 'function') {
    options = options({navigation, route});
  }

  if (options.headerStyle) {
    options.headerStyle = {
      ...navOptions.headerStyle,
      ...options.headerStyle,
    };
  }

  return {
    ...navOptions,
    ...options,
    detachPreviousScreen: !navigation.isFocused(),
  };
}

export {navOptions, tabOptions, withNavigationOptions, transitionSpecConfig};
