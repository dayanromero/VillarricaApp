import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Searchbar as Search } from 'react-native-paper';
import { theme } from '../core/theme';
import Icon from 'react-native-vector-icons/Ionicons';

export default class SearchBar extends React.Component {
  state = {
    searchQuery: '',
  };

  _onChangeSearch = query => this.setState({ searchQuery: query });

  render() {
    const { searchQuery } = this.state;
    return (
      <View style={styles.container}>
        <Icon.Button name='ios-menu' size={25}
          backgroundColor={theme.colors.primary}
          onPress={() => navigation.openDrawer()}
        ></Icon.Button>
        <Search
          style={styles.search}
          placeholder='Buscar numero de cedula'
          onChangeText={this._onChangeSearch}
          value={searchQuery}
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    padding: 8,
    backgroundColor: theme.colors.primary
  },
  search: {
    height: 55,
    width: '88%'
  }
});
