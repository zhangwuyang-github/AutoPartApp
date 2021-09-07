import React from 'react';
import {View, StyleSheet} from 'react-native';

const LoginScreen: React.FC<{}> = ({}) => {
  return <View style={styles.container} />;
};

const styles = StyleSheet.create({
  container: {},
});

const navigationOptions = {
  title: '登陆',
};

export default {
  screen: LoginScreen,
  navigationOptions,
};

export interface RouteParams {}
