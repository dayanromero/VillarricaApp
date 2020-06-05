import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import BottomButtons from '../../components/Button/BottomButtons';
import UserProfileNavigation from '../../navigation/UserProfileNavigation';
import ModalDialog from '../../components/Modal/ModalDialog';
import { theme } from '../../core/theme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { UserContext } from './context/UserContext';

const userImg = require('../../assets/user.png');

class UserScreen extends Component {
    state = {
        modalVisible: {
            visible: false,
            typeOfRegister: '',
        },
    };

    handleModalOpen = (regisType) => {
        this.setState({
            modalVisible: { visible: true, typeOfRegister: regisType },
        });
    };
    onClose = () => {
        this.setState({
            modalVisible: { visible: false, typeOfRegister: '' },
        });
    };

    btns = [
        {
            title: 'Salida',
            action: () => this.handleModalOpen('Salida'),
        },
        {
            title: 'Ingreso',
            action: () => this.handleModalOpen('Ingreso'),
        },
    ];

    render() {
        const {
            id,
            name,
            testResult,
            documentType,
            phone,
            address,
            city
        } = this.props.data;

        const userData = {
            cedula: id,
            nombre: name,
            prueba: testResult,
            tipoDoc: documentType,
            celular: phone,
            direccion: address,
            ciudad: city,
        };


        return (
            <View style={styles.container}>
                <ModalDialog
                    showModal={this.state.modalVisible}
                    onClose={this.onClose}
                />
                <View style={styles.userInfo}>
                    <Icon name="account-circle-outline" style={styles.icon} />
                    <View>
                        <Text style={styles.h1}>{name}</Text>
                        <Text style={styles.h3}>{testResult}</Text>
                    </View>
                </View>
                <UserContext.Provider value={userData}>
                    <UserProfileNavigation />
                </UserContext.Provider>
                <BottomButtons btns={this.btns} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.grey,
        paddingTop: 0,
    },
    userInfo: {
        width: '100%',
        marginVertical: 30,
        alignItems: 'center',
    },
    icon: {
        textAlign: 'center',
        fontSize: 100,
        color: theme.colors.secondary,
    },
    h1: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'black',
    },
    h3: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'black',
    },
    edit: {

    }
});

const mapStateToProps = (state) => {
    const { data } = state.search;
    return { data };
};
export default connect(mapStateToProps)(UserScreen);
