import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Searchbar as Search } from 'react-native-paper';
import { theme } from '../core/theme';

export default class SearchBar extends React.Component {
  state = {
    searchQuery: '',
  };

  _onChangeSearch = query => this.setState({ searchQuery: query });

  render() {
    const { searchQuery } = this.state;
    return (
      <View style={styles.container}>
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
    padding: 8,
    backgroundColor: theme.colors.primary
  },
  search: {
    height: 55
  }
});
