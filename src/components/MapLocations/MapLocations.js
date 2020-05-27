import React from 'react';
import MapboxGL from '@react-native-mapbox-gl/maps';

const locationIcon = require('../../assets/icon_location.png');

const MapLocations = (props) => {
  let dataSource = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        id: '1',
        properties: {
          icon: 'locationIcon',
        },
        geometry: {
          type: 'Point',
          coordinates: [-76.4863147, 3.009516],
        },
      },
      {
        type: 'Feature',
        id: '2',
        properties: {
          icon: 'locationIcon',
        },
        geometry: {
          type: 'Point',
          coordinates: [-76.4809974, 3.0089435],
        },
      },
      {
        type: 'Feature',
        id: '3',
        properties: {
          icon: 'locationIcon',
        },
        geometry: {
          type: 'Point',
          coordinates: [-76.4786371, 3.0086007],
        },
      },
    ],
  };

  let icon = {
    iconImage: locationIcon,
    iconAllowOverlap: true,
    iconSize: 1.2,
  };

  let viewItem = (
    <MapboxGL.ShapeSource
      id={'exampleShapeSource'}
      hitbox={{width: 20, height: 20}}
      onPress={(dataSource) => {
        let {
          features: [data],
        } = dataSource;
        let {
          id,
          geometry: {coordinates},
        } = data;
        props.centerLocation(coordinates);
        props.show(id);
      }}
      shape={dataSource}>
      <MapboxGL.SymbolLayer id={'locationIcon'} style={icon} />
    </MapboxGL.ShapeSource>
  );
  return viewItem;
};

export default MapLocations;
