import React, { Component } from 'react';
import { View, SafeAreaView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { fetchData } from './actions';
import Map from '../../components/MapLocations/Map';
import SlideUp from '../../components/SlideUp/SlideUp';
import SearchBar from '../../components/Search/SearchBar';
import ModalDialog from '../../components/Modal/ModalDialog';
import Loading from '../../components/Loading/Loading';
import { MapLocationContext } from './context';

class Dashboard extends Component {
    state = {
        showUserLocation: true,
        location: [-76.4863147, 3.009516],
        showSlide: false,
        setModalVisible: {
            visible: false,
            data: '',
        },
        userId: 0,
    };

    setLocation = (data) => {
        this.setState({ location: data });
    };

    handleModalOpen = (data) => {
        this.setState({
            setModalVisible: {
                visible: true,
                data: data,
            },
        });
    };

    handleModalClose = () => {
        this.setState({
            setModalVisible: {
                visible: false,
                data: '',
            },
        });
    };

    showContent = (id) => {
        this.setState({
            showSlide: true,
            userId: id,
        });
    };

    dataSource = {
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

    getUserData = (id) => {
        this.props.searchData(id);
    };

    render() {
        const { navigation, data, loading } = this.props;
        return (
            <SafeAreaView style={styles.container}>
                <ModalDialog
                    showModal={this.state.setModalVisible}
                    onClose={this.handleModalClose}
                />
                {loading ? (
                    <Loading />
                ) : (
                    <View style={styles.container}>
                        <SearchBar
                            navigation={navigation}
                            onPress={this.getUserData}
                        />
                        <MapLocationContext.Provider
                            value={{
                                showContent: this.showContent,
                                setLocation: this.setLocation,
                                location: this.state.location,
                                dataSource: this.dataSource,
                            }}>
                            <Map />
                        </MapLocationContext.Provider>
                    </View>
                )}
                <SlideUp
                    slide={this.state}
                    navigation={navigation}
                    showModal={this.handleModalOpen}
                />
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

const mapStateToProps = (state) => {
    const { loading, data, error } = state.search;
    return {
        data,
        loading,
        error,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        searchData: (id) => {
            return dispatch(fetchData(id));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
