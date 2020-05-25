import React, {useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import InputText from '../components/InputText';
import BottomButtons from '../components/BottomButtons';

const NewUserScreen = ({navigation}) => {

  const userScreen = () => navigation.navigate('DashboardMap')
  const btns = [
    {
      title:'Cancelar',
      action: () => userScreen()
    },
    {
      title:'Guardar',
      action: () => console.log('Guardar')
    }
  ];

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View >
          <InputText
            style={styles.input}
            returnKeyType="next"
            placeholder={'Nombres'}
            keyboardType={'default'}
            onChangeText={() => {}}
            autoCapitalize="none"
          />
          <InputText
            style={styles.input}
            returnKeyType="next"
            placeholder={'Apellidos'}
            keyboardType={'default'}
            onChangeText={() => {}}
            autoCapitalize="none"
          />
          <InputText
            style={styles.input}
            returnKeyType="next"
            placeholder={'Direccion'}
            keyboardType={'default'}
            onChangeText={() => {}}
            autoCapitalize="none"
          />
          <InputText
            style={styles.input}
            returnKeyType="next"
            placeholder={'Tipo de documento'}
            keyboardType={'default'}
            onChangeText={() => {}}
            autoCapitalize="none"
          />
          <InputText
            style={styles.input}
            returnKeyType="next"
            placeholder={'Numero de documento'}
            keyboardType={'number-pad'}
            onChangeText={() => {}}
            autoCapitalize="none"
          />
          <InputText
            style={styles.input}
            returnKeyType="next"
            placeholder={'Fecha de expedicion'}
            keyboardType={'default'}
            onChangeText={() => {}}
            autoCapitalize="none"
          />
          <InputText
            style={styles.input}
            returnKeyType="next"
            placeholder={'Prueba'}
            keyboardType={'default'}
            onChangeText={() => {}}
            autoCapitalize="none"
          />
          <InputText
            style={styles.input}
            returnKeyType="next"
            placeholder={'Telefono'}
            keyboardType={'phone-pad'}
            onChangeText={() => {}}
            autoCapitalize="none"
          />
          <InputText
            style={styles.input}
            returnKeyType="next"
            placeholder={'Correo electronico'}
            keyboardType={'email-address'}
            onChangeText={() => {}}
            autoCapitalize="none"
          />
        </View>
      </ScrollView>
        <BottomButtons btns={btns}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    padding: 16
  },
  input: {
    fontSize: 16,
  },
});

export default NewUserScreen;
