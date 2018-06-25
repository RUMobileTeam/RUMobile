import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import HomeScreen from './src/screens/HomeScreen';
import StopScreen from './src/screens/StopScreen';
import RouteScreen from './src/screens/RouteScreen';
import FoodScreen from './src/screens/FoodScreen';
import LinkScreen from './src/screens/LinkScreen';
import MoreScreen from './src/screens/MoreScreen';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="home_screen" component={HomeScreen} hideNavBar type="reset" />
          <Scene key="stop_screen" component={StopScreen} hideNavBar type="reset" />
          <Scene key="route_screen" component={RouteScreen} hideNavBar type="reset" />
          <Scene key="food_screen" component={FoodScreen} hideNavBar type="reset" />
          <Scene key="links_screen" component={LinkScreen} hideNavBar type="reset" />
          <Scene key="more_screen" component={MoreScreen} hideNavBar type="reset" />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
