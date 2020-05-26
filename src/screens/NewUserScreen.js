import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import InputText from '../components/InputText';
import DatePicker from '../components/DatePicker';
import InputSelect from '../components/InputSelect';
import BottomButtons from '../components/BottomButtons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {theme} from '../core/theme';

const NewUserScreen = ({navigation}) => {
  const [expedicionDate, setExpedicionDate] = useState(null);
  const [documentType, setDocumentType] = useState(null);
  const [testData, setTestData] = useState(null);

  const handleDatePicker = (dateP) => setExpedicionDate(dateP);
  const handleState = (text) => setDocumentType(text);
  const handleStateTest = (text) => setTestData(text);

  const userScreen = () => navigation.navigate('DashboardMap');
  
  let optionsId = [
    'Tarjeta de identidad',
    'Cedula',
    'Pasaporte',
    'Cedula de extranjeria',
  ];
  let optionsTest = [
    'Positivo',
    'Negativo',
    'Sin prueba',
    'En espera de resultados',
  ];

  const btns = [
    {
      title: 'Cancelar',
      action: () => userScreen(),
    },
    {
      title: 'Guardar',
      action: () => console.log('Guardar'),
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View>
          <Icon name='account-circle-outline' style={styles.icon} />
          <Text style={styles.text}>
            Por favor llegue los campos a continuacion para registrar un nuevo usuario.
          </Text>
        </View>
        <KeyboardAwareScrollView>
          <>
            <InputText
              style={styles.input}
              returnKeyType='next'
              placeholder={'Nombres'}
              keyboardType={'default'}
              onChangeText={() => {}}
              autoCapitalize='none'
            />
            <InputText
              style={styles.input}
              returnKeyType='next'
              placeholder={'Apellidos'}
              keyboardType={'default'}
              onChangeText={() => {}}
              autoCapitalize='none'
            />
            <InputText
              style={styles.input}
              returnKeyType='next'
              placeholder={'Direccion'}
              keyboardType={'default'}
              onChangeText={() => {}}
              autoCapitalize='none'
            />
            <InputSelect
              items={optionsId}
              value={documentType}
              onPress={handleState}
              placeholder={'Tipo de documento'}
            />
            <InputText
              style={styles.input}
              returnKeyType='next'
              placeholder={'Numero de documento'}
              keyboardType={'number-pad'}
              onChangeText={() => {}}
              autoCapitalize='none'
            />
            <DatePicker
              value={expedicionDate}
              onPress={handleDatePicker}
              styles={styles.input}
              placeholder={'Fecha de expedicion'}
            />
            <InputSelect
              items={optionsTest}
              value={testData}
              onPress={handleStateTest}
              placeholder={'Prueba'}
            />
            <InputText
              style={styles.input}
              returnKeyType='next'
              placeholder={'Telefono'}
              keyboardType={'phone-pad'}
              onChangeText={() => {}}
              autoCapitalize='none'
            />
            <InputText
              style={styles.input}
              returnKeyType='next'
              placeholder={'Correo electronico'}
              keyboardType={'email-address'}
              onChangeText={() => {}}
              autoCapitalize='none'
            />
          </>
        </KeyboardAwareScrollView>
      </ScrollView>
      <BottomButtons btns={btns} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.grey,
  },
  scrollView: {
    padding: 16,
  },
  input: {
    fontSize: 16,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20
  },
  icon: {
    textAlign: 'center',
    fontSize: 100,
    color: theme.colors.secondary,
  },
});

export default NewUserScreen;
