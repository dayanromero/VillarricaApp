import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';
import MapLocations from '../../components/MapLocations/MapLocations';
import { MapLocationContext } from '../../screens/Dashboard/context';

MapboxGL.setAccessToken(
    'pk.eyJ1IjoiZGF5cm9tIiwiYSI6ImNrYTc5aXg0YzAxM2oyeXFlZWYwejU4cTYifQ.uQCDALmLyuOI-QzPxo1_EA',
);

const Dashboard = () => {
    return (
        <MapLocationContext.Consumer>
            {(value) => (
                <MapboxGL.MapView
                    style={styles.container}
                    zoomLevel={10}
                    showUserLocation={true}>
                    <MapboxGL.Camera
                        zoomLevel={15}
                        animationMode={'flyTo'}
                        centerCoordinate={value.location}
                    />

                    <MapboxGL.UserLocation />
                    <MapLocations
                        show={value.showContent}
                        centerLocation={value.setLocation}
                        point={value.dataSource}
                    />
                </MapboxGL.MapView>
            )}
        </MapLocationContext.Consumer>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default Dashboard;
