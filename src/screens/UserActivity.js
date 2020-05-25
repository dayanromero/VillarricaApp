import * as React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
//import InfoCard from '../components/InfoCard';

const UserActivity = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* <InfoCard /> */}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    marginTop: 10,
    marginHorizontal: 10,
  },
})

export default UserActivity 