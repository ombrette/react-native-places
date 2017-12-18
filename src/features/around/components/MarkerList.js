import React from "react";
import MapView from 'react-native-maps';

const MarkerList = props => {
  return props.places.map((item, index) => {
    return (
      <MapView.Marker
        coordinate={item.position}
        title={item.label}
        key={item.id}
      />
    );
  });
};
export default MarkerList;
