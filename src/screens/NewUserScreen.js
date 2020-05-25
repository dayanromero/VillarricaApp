import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NewUserScreen = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <Text>Nuevo usuario</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignContent: 'center',
    },
  });
  

export default NewUserScreen;
