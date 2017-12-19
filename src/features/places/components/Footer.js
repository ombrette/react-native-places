import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { Button } from 'react-native-elements';

const styles = StyleSheet.create({
  footer: {
    height: 50,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row"
  },
  selected: {
    color: "#98b9f7",
    backgroundColor: "transparent",
  },
  text: {
    color: "#000",
  }
});

const Filter = props => (
  <Button large title={props.label} onPress={props.onPress} buttonStyle={{backgroundColor: 'transparent'}} textStyle={props.selected ? [styles.selected] : styles.text} />
);

const Footer = props => (
  <View style={styles.footer}>
    <Filter
      label="Visited"
      selected={props.selected === "visited"}
      onPress={props.onSelectFilter.bind(this, "visited")}
    />
    <Filter
      label="New"
      onPress={props.onSelectFilter.bind(this, "new")}
      selected={props.selected === "new"}
    />
    <Filter
      label="All"
      onPress={props.onSelectFilter.bind(this, "all")}
      selected={props.selected === "all"}
    />
  </View>
);
export default Footer;
