import React, { Component } from 'react';
import { View, SafeAreaView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { fetchData } from '../../store/actions';
import Map from '../../components/MapLocations/Map';
import SlideUp from '../../components/SlideUp/SlideUp';
import SearchBar from '../../components/Search/SearchBar';
import ModalDialog from '../../components/Modal/ModalDialog';
import Loading from '../../components/Loading/Loading';

class Dashboard extends Component {
    state = {
        showUserLocation: true,
        location: [-76.4863147, 3.009516],
        showSlide: false,
        setModalVisible: {
            visible: false,
            data: '',
            loading: false,
        },
        userId: 0,
    };

    setLocation = (data) => this.setState({ location: data });

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

    getUserData = (id) => {
        this.props.getData(id);
    };

    render() {
        const { navigation, data } = this.props;
        console.log('data', data)
        return (
            <SafeAreaView style={styles.container}>
                <ModalDialog
                    showModal={this.state.setModalVisible}
                    onClose={this.handleModalClose}
                />
                {!Loading ? (
                    <Loading />
                ) : (
                    <View style={styles.container}>
                        <SearchBar
                            navigation={navigation}
                            onPress={this.getUserData}
                        />
                        <Map
                            location={this.state.location}
                            setLocation={this.setLocation}
                            showContent={this.showContent}
                        />
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
    return {
        dataUser: state.login.data,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getData: (id) => {
            return dispatch(fetchData(id));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
