import React from 'react';
import {
  NavigationAction,
  NavigationState,
  StackActions,
} from '@react-navigation/native';
import _ from 'lodash';

export const navigationRef = React.createRef<any>();

function getCurrentRoute() {
  if (!navigationRef.current) {
    return null;
  }

  let state = navigationRef.current.getRootState();
  while (state?.routes) {
    state = state.routes[state.index];
  }

  if (state?.name === 'Tab') {
    return state?.state?.routes[state.state.index];
  }

  return state;
}

function getStackRoutes() {
  if (!navigationRef.current) {
    return null;
  }

  let state = navigationRef.current.getRootState();
  return state;
}

export function navigate(name: string, params?: any) {
  navigationRef.current.navigate(name, params);
}

function hasRouteName(routeName: string) {
  const {routes} = navigationRef.current.getRootState();
  const index = _.findIndex(routes, (item: any) => item.name === routeName);

  return index !== -1;
}

function goBack() {
  const nav = navigationRef.current;
  nav.canGoBack() && nav.goBack();
}

function replace(routeName: string, params?: any) {
  navigationRef.current.dispatch(StackActions.replace(routeName, params));
}

function push(routeName: string, params?: any) {
  navigationRef.current.dispatch(StackActions.push(routeName, params));
}

function setParams(params: {}) {
  navigationRef.current.setParams(params);
}

function dispatch(
  action: NavigationAction | ((state: NavigationState) => NavigationAction),
) {
  navigationRef.current.dispatch(action);
}

function isRoute(routeName: string) {
  const currentRoute = getCurrentRoute();
  return currentRoute && currentRoute.name === routeName;
}

const Navigation = {
  goBack,
  replace,
  navigate,
  push,
  getCurrentRoute,
  setParams,
  dispatch,
  isRoute,
  getStackRoutes,
  hasRouteName,
};

export default Navigation;
