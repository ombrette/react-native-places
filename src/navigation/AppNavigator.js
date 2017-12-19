import React from "react";
import { View, Text } from "react-native";
import {
  StackNavigator,
  DrawerNavigator,
  TabNavigator
} from "react-navigation";

import Footer from "../features/places/components/Footer";

import Home from "../features/home";
import Places from "../features/places";
import Filters from "../features/filters";
import Around from "../features/around";
import Friends from "../features/friends";

const Tabs = TabNavigator({
  Places: {
    screen: Places,
    navigationOptions: {
      header: null
    }
  },
  Around: {
    screen: Around,
    navigationOptions: {
      header: null
    }
  },
  Friends: {
    screen: Friends,
    navigationOptions: {
      header: null
    }
  }
});

// this.props.navigation.navigate("DrawerClose");
// this.props.navigation.navigate("DrawerOpen");
const Drawer = DrawerNavigator(
  {
    Drawer: {
      screen: Tabs,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    drawerPosition: "right",
    contentComponent: props => (
      <Filters />
    )
  }
);

const RootNavigator = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: null
    }
  },
  Places: {
    screen: Drawer,
    navigationOptions: {
      header: null
    }
  }
});

export default RootNavigator;
