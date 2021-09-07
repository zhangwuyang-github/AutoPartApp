import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {AppStackParamList} from '../routes';

export interface NavigationProps<RouteName extends keyof AppStackParamList> {
  navigation: StackNavigationProp<AppStackParamList, RouteName>;
  route: RouteProp<AppStackParamList, RouteName>;
}
