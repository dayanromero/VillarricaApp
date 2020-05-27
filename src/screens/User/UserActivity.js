import * as React from 'react';
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

export default UserActivity 