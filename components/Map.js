import { Text, View } from "react-native";
import React, { Component } from "react";
import MapView from "react-native-maps";
import tw from "tailwind-react-native-classnames";
import { useSelector } from "react-redux";
import { selectOrigin } from "../slices/navSlice";

const Map = () => {
  const origin = useSelector(selectOrigin);
  return (
    <MapView
      style={tw`flex-1`}
      mapType="mutedStandard"
      initialRegion={{
        latitude: origin ? origin.longitude.lat : 37.78825,
        longitude: origin ? origin.longitude.lng : -122.4324,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
    >
      {origin?.location && (
        <MapView.Marker
          coordinate={{
            latitude: origin ? origin.longitude.lat : 37.78825,
            longitude: origin ? origin.longitude.lng : -122.4324,
          }}
          title="Origin"
          description={origin ? origin.description : "Origin"}
          identifier="origin"
        />
      )}
    </MapView>
  );
};

export default Map;
