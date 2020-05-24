import React, { Component } from 'react';
import { View, SafeAreaView, StyleSheet } from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';
// import MapPoints from '../components/MapPoints';
// import SlideUp from '../components/SlideUp';
import SearchBar from '../components/SearchBar';
// import ModalDialog from '../components/ModalDialog'

MapboxGL.setAccessToken(
    'pk.eyJ1IjoiZGF5cm9tIiwiYSI6ImNrYTc5aXg0YzAxM2oyeXFlZWYwejU4cTYifQ.uQCDALmLyuOI-QzPxo1_EA'
);

export default class Dashboard extends Component {
    state = {
        showUserLocation: true,
        location: [-76.4863147, 3.009516],
        showSlide: false,
        setModalVisible: {
            visible: false, data: ''
        },
        userId: 0
    };

    handleModalOpen = (data) => {
        this.setState({
            setModalVisible: {
                visible: true, data
            }
        })
    }

    handleModalClose = () => {
        this.setState({
            setModalVisible: {
                visible: false, data: ''
            }
        })
    }

    showContent = (id) => {
        this.setState({
            showSlide: true,
            userId: id
        });
    }

    render() {
        const { navigation } = this.props;
        return (
            <SafeAreaView style={styles.container}>
                {/* <ModalDialog
                    showModal = {this.state.setModalVisible}
                    onClose = {this.handleModalClose}
                /> */}
                <View style={styles.container}>
                    <SearchBar />
                    <MapboxGL.MapView
                        style={styles.container}
                        zoomLevel={10}
                        showUserLocation={true}
                    >
                        <MapboxGL.Camera
                            zoomLevel={15}
                            animationMode={'flyTo'}
                            centerCoordinate={this.state.location}
                        />
                        <MapboxGL.UserLocation />
                        {/* <MapPoints show = {this.showContent.bind(this)}/> */}
                    </MapboxGL.MapView>
                </View>
                {/* <SlideUp
                    slide={this.state}
                    navigation={navigation}
                    showModal = {this.handleModalOpen}
                />        */}
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})