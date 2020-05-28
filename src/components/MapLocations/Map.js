import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';
import MapLocations from '../../components/MapLocations/MapLocations';

MapboxGL.setAccessToken(
    'pk.eyJ1IjoiZGF5cm9tIiwiYSI6ImNrYTc5aXg0YzAxM2oyeXFlZWYwejU4cTYifQ.uQCDALmLyuOI-QzPxo1_EA',
);

const Dashboard = ({...props}) => {
    const {showContent, location, setLocation} = props;
    const showLocation = (id) => showContent(id)
    const newLocation = (coor) => setLocation(coor)

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

    return (
        <MapboxGL.MapView
            style={styles.container}
            zoomLevel={10}
            showUserLocation={true}>
            <MapboxGL.Camera
                zoomLevel={15}
                animationMode={'flyTo'}
                centerCoordinate={location}
            />

            <MapboxGL.UserLocation/>
            <MapLocations
                show={showLocation}
                centerLocation={newLocation}
                point={dataSource}
            />
        </MapboxGL.MapView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default Dashboard;
