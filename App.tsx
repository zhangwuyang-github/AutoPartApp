import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './src/bootstrap/home';
import MyScreen from './src/bootstrap/my';
import {Image} from 'react-native';
import CategoryScreen from './src/bootstrap/category';

const Tab = createBottomTabNavigator();

export default function App() {
  const getIcon = (name: string) => {
    let icon = null;
    // prettier-ignore
    switch (name) {
      case 'Home': icon = require('./src/assets/images/tab/home.png'); break;
      case 'HomeFocused': icon = require('./src/assets/images/tab/home_focused.png'); break;
      case 'Category': icon = require('./src/assets/images/tab/category.png'); break;
      case 'CategoryFocused': icon = require('./src/assets/images/tab/category_focused.png'); break;
      case 'My': icon = require('./src/assets/images/tab/my.png'); break;
      case 'MyFocused': icon = require('./src/assets/images/tab/my_focused.png'); break;
    }
    return icon;
  };

  const iconSize = {
    width: 24,
    height: 24,
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'HomeFocused' : 'Home';
            } else if (route.name === 'Category') {
              iconName = focused ? 'CategoryFocused' : 'Category';
            } else if (route.name === 'My') {
              iconName = focused ? 'MyFocused' : 'My';
            }

            if (iconName) {
              return <Image source={getIcon(iconName)} style={iconSize} />;
            }
          },
          headerShown: false,
        })}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Category" component={CategoryScreen} />
        <Tab.Screen name="My" component={MyScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
