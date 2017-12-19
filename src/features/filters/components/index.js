import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
} from "react-native";

import Footer from "./Footer";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#ecf0f1"
  },
  content: {
    flex: 0,
    alignItems: "center"
  }
});

const Filters = props => (
  <View style={styles.root}>
    <Footer onSelectFilter={props.updateFilter} selected={props.filter} />
  </View>
);
export default Filters;
