import React from 'react';
import {View, StyleSheet} from 'react-native';

import HeaderSearch from '../../components/HeaderSearch';

const HomeScreen: React.FC<{}> = ({}) => {
  return (
    <View style={styles.container}>
      <HeaderSearch />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default HomeScreen;
