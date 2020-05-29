import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Searchbar as Search } from 'react-native-paper';
import { theme } from '../../core/theme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const SearchBar = ({ onPress, navigation }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const consultUser = () => onPress(searchQuery);

    return (
        <View style={styles.container}>
            <Icon.Button
                name="menu"
                size={30}
                color="white"
                backgroundColor={theme.colors.primary}
                onPress={() => navigation.openDrawer()}></Icon.Button>
            <Search
                style={styles.search}
                placeholder="Buscar numero de cedula"
                onChangeText={(query) => setSearchQuery(query)}
                value={searchQuery}
                onIconPress={() => searchQuery && consultUser()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        padding: 8,
        backgroundColor: theme.colors.primary,
    },
    search: {
        height: 55,
        width: '85%',
    },
});

export default SearchBar;
