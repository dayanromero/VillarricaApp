import React, { memo, useEffect } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
} from 'react-native';
import SlidingUpPanel from 'rn-sliding-up-panel';
import { theme } from '../../core/theme';
import BottomButtons from '../Button/BottomButtons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const dragImg = require('../../assets/drag-icon.png');
const { height } = Dimensions.get('window');

const slideUp = ({ ...props }) => {
    let { slide, handleModal, userData, navigation } = props;

    if (slide) this._panel.show();

    const userScreen = () => {
        navigation.navigate('UserScreen');
    };

    const btns = [
        {
            title: 'Salida',
            action: () => handleModal('Salida'),
        },
        {
            title: 'Ingreso',
            action: () => handleModal('Ingreso'),
        },
    ];

    return (
        <SlidingUpPanel
            ref={(c) => (this._panel = c)}
            draggableRange={{ top: height / 3.5, bottom: 0 }}>
            <View style={styles.container}>
                <Image source={dragImg} style={styles.dragIcon} />
                <View style={styles.userInfo}>
                    <TouchableOpacity onPress={userScreen}>
                        <Icon
                            name='account-circle-outline'
                            style={styles.icon}
                        />
                    </TouchableOpacity>
                    {userData ? (
                        <View>
                            <Text style={styles.h1}>{userData.name}</Text>
                            <Text style={styles.h2}>C.C {userData.id}</Text>
                            <Text style={styles.h3}>
                                Prueba: {userData.testResult}
                            </Text>
                        </View>
                    ) : null}
                </View>
                <View style={styles.bottons}>
                    <BottomButtons btns={btns} />
                </View>
            </View>
        </SlidingUpPanel>
    );
};

const styles = StyleSheet.create({
    container: {
        height: height / 3.5,
        backgroundColor: 'white',
        alignItems: 'center',
    },
    bottons: {
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    dragIcon: {
        width: 70,
        height: 6,
        margin: 10,
    },
    userInfo: {
        flex: 1,
        width: '100%',
        padding: 15,
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'space-between',
    },
    icon: {
        width: 100,
        height: 100,
        marginRight: 20,
        textAlign: 'center',
        fontSize: 100,
        color: theme.colors.secondary,
    },
    h1: {
        fontSize: 24,
        fontWeight: 'bold',
        color: theme.colors.primary,
    },
    h2: {
        fontSize: 18,
    },
    h3: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default memo(slideUp);
