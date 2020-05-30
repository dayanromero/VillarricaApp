import React, { Component } from 'react';
import { View, SafeAreaView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { fetchData, setErrorFalse } from './actions';
import Map from '../../components/MapLocations/Map';
import SlideUp from '../../components/SlideUp/SlideUp';
import SearchBar from '../../components/Search/SearchBar';
import ModalDialog from '../../components/Modal/ModalDialog';
import Loading from '../../components/Loading/Loading';
import { MapLocationContext } from './context';
import ShowAlert from '../../components/Alert/Alert';

class Dashboard extends Component {
    state = {
        location: [-76.481856, 3.006929],
        showSlide: false,
        showAlert: false,
        setModalVisible: {
            visible: false,
            data: '',
        },
        userId: 0,
    };

    setLocation = (data) => {
        this.setState({ location: data });
    };

    hideAlert = () => this.props.setError();

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

    showContent = () => {
        this.setState({ showSlide: !this.state.showSlide});
    };

    dataSource = (coor) => {
        return {
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
                        coordinates: coor,
                    },
                },
            ],
        };
    };

    getUserData = (id) => this.props.searchById(id);

    render() {
        const { navigation, loading, data, error } = this.props;
        let coor;

        if (error) {
            console.log('hubo un error');
        }
        if (data) {
            const {
                data: { location },
            } = this.props;
            if (location) {
                coor = location.coordinates.split(',').reverse().map(Number);
            }
        }

        return (
            <SafeAreaView style={styles.container}>
                <ModalDialog
                    showModal={this.state.setModalVisible}
                    onClose={this.handleModalClose}
                />
                {error ? (
                    <ShowAlert
                        msg={'Numero de cedula no encontrado.'}
                        setE={this.hideAlert}
                    />
                ) : null}
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
                                location: coor || this.state.location,
                                dataSource: coor ? this.dataSource(coor) : null,
                            }}>
                            <Map />
                        </MapLocationContext.Provider>
                    </View>
                )}
                <SlideUp
                    slide={this.state.showSlide}
                    navigation={navigation}
                    showModal={this.handleModalOpen}
                    userData= {this.props.data}
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
        searchById: (id) => {
            return dispatch(fetchData(id));
        },
        setError: () => {
            return dispatch(setErrorFalse());
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
