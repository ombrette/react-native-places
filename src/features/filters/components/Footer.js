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
    color: "#98b9f7"
  },
  text: {
    paddingVertical: 2,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#CCC"
  }
});

const Filter = props => (
  <Button title={props.label} onPress={props.onPress} textStyle={props.selected ? [styles.selected, styles.text] : styles.text}/>
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
