import * as React from 'react';
import { connect } from 'react-redux';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import InfoCard from '../../components/Card/InfoCard';
import {theme} from '../../core/theme';

const UserActivity = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <InfoCard />
        <InfoCard />
        <InfoCard />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.grey,
  },
  scrollView: {
    marginTop: 10,
    marginHorizontal: 10,
  },
})

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

export default connect(mapStateToProps, mapDispatchToProps)(UserActivity);