import React from 'react';
import MapboxGL from '@react-native-mapbox-gl/maps';

const locationIcon = require('../../assets/icon_location.png');

const MapLocations = (props) => {
    const points = props.point;

    let icon = {
        iconImage: locationIcon,
        iconAllowOverlap: true,
        iconSize: 1.2,
    };

    if (points) {
        return (
            <MapboxGL.ShapeSource
                id={'MapPoints'}
                hitbox={{ width: 20, height: 20 }}
                onPress={(points) => {
                    let { features: [data], } = points;
                    let {
                        id,
                        geometry: { coordinates },
                    } = data;
                    props.centerLocation(coordinates);
                    props.show(id);
                }}
                shape={points}>
                <MapboxGL.SymbolLayer id={'locationIcon'} style={icon} />
            </MapboxGL.ShapeSource>
        );
    }
    return <MapboxGL.ShapeSource />;
};

export default MapLocations;
