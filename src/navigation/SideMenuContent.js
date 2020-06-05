import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Title, Drawer } from 'react-native-paper';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { theme } from '../core/theme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const SideMenuContent = (props) => {
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                marginTop: 15,
                            }}>
                            <Icon
                                name="account-circle-outline"
                                style={styles.icon}
                            />
                            <Title style={styles.title}>Administrador</Title>
                        </View>
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            labelStyle={{ fontSize: 16 }}
                            icon={() => (
                                <Icon
                                    name="home"
                                    color={theme.colors.grey}
                                    size={30}
                                />
                            )}
                            label="Inicio"
                            onPress={() => {
                                props.navigation.navigate('inicio');
                            }}
                        />
                        <DrawerItem
                            labelStyle={{ fontSize: 16 }}
                            icon={() => (
                                <Icon
                                    name="account-plus"
                                    color={theme.colors.grey}
                                    size={30}
                                />
                            )}
                            label="Crear Usuario"
                            onPress={() => {
                                props.navigation.navigate('crear-usuario');
                            }}
                        />
                        <DrawerItem
                            labelStyle={{ fontSize: 16 }}
                            icon={() => (
                                <Icon
                                    name="map-marker-plus"
                                    color={theme.colors.grey}
                                    size={30}
                                />
                            )}
                            label="Crear zona"
                            onPress={() => {
                                props.navigation.navigate('crear-usuario');
                            }}
                        />
                    </Drawer.Section>
                    
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({ color, size }) => (
                        <Icon name="logout-variant" color={color} size={30} />
                    )}
                    label="Salir"
                    onPress={() => {
                        signOut();
                    }}
                />
            </Drawer.Section>
        </View>
    );
};

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
        backgroundColor: theme.colors.primary,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1,
    },
    icon: {
        textAlign: 'center',
        fontSize: 80,
        fontWeight: '100',
        color: theme.colors.secondary,
    },
});

export default SideMenuContent;
