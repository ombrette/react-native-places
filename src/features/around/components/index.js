import React from "react";
import { View, StyleSheet, Text } from "react-native";

import MapView from 'react-native-maps';
import MarkerList from "./MarkerList";

const styles = StyleSheet.create({
  divStyle: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  mapStyle: {
    ...StyleSheet.absoluteFillObject,
    flex: 1
  },
});

const Around = props => (
  <View style={styles.divStyle}>
    <MapView style={styles.mapStyle}>
      <MarkerList places={props.places} />
    </MapView>
  </View>
);

export default Around;
