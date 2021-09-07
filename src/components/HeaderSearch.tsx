import React from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {bezelLessScreen, Width} from '../services/devices';

const HeaderSearch: React.FC<{}> = ({}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topView}>
        <Image
          source={require('../assets/images/tab/category.png')}
          style={styles.category}
        />
        <Text style={styles.redlogo}>
          AutoParts<Text style={styles.logo}>Prime</Text>
        </Text>
        <View style={styles.carWrap}>
          <Image
            source={require('../assets/images/home/car.png')}
            style={styles.icon}
          />
          <Image
            source={require('../assets/images/home/cart.png')}
            style={styles.icon}
          />
        </View>
      </View>
      <View style={styles.searchBar}>
        <View style={styles.search}>
          <View style={styles.default}>
            <Image
              source={require('../assets/images/home/search.png')}
              style={styles.category}
            />
            <Text style={styles.searchText}>Search by ZWY</Text>
          </View>

          <Image
            source={require('../assets/images/home/code.png')}
            style={styles.category}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const scale = Width / 375;

const top = bezelLessScreen ? 120 * scale : 140 * scale;

const styles = StyleSheet.create({
  container: {
    height: top,
    borderWidth: 1,
  },
  topView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12 * scale,
    alignItems: 'center',
  },
  category: {
    width: 25 * scale,
    height: 25 * scale,
  },
  carWrap: {
    flexDirection: 'row',
    marginLeft: 40 * scale,
  },
  icon: {
    width: 25 * scale,
    height: 25 * scale,
    marginLeft: 20 * scale,
  },
  redlogo: {
    fontSize: 20 * scale,
    fontFamily: 'PingFangSC-Semibold',
    fontWeight: '700',
    color: 'red',
    fontStyle: 'italic',
  },
  logo: {
    color: 'black',
  },
  searchBar: {
    flex: 1,
    alignItems: 'center',
  },
  search: {
    width: '95%',
    height: 36 * scale,
    backgroundColor: '#FFF',
    borderRadius: 18 * scale,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20 * scale,
  },
  default: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchText: {
    fontSize: 14 * scale,
    color: '#CCC',
  },
});

export default HeaderSearch;
