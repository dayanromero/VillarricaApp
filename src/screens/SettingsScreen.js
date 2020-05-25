import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SettingsScreen = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <Text>Settings</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center"
    },
  });
  

export default SettingsScreen;
