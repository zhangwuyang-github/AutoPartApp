import LoginScreen, {
  RouteParams as LoginScreenRouteParams,
} from '../containers/LoginScreen';

export type AppStackParamList = {
  LoginSceen: LoginScreenRouteParams;
};

export const routes = [
  {
    name: 'login',
    component: LoginScreen.screen,
    options: LoginScreen.navigationOptions,
  },
];
