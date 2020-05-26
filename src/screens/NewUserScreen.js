import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import InputText from '../components/InputText';
import DatePicker from '../components/DatePicker';
import InputSelect from '../components/InputSelect';
import BottomButtons from '../components/BottomButtons';

const NewUserScreen = ({navigation}) => {
  const [expedicionDate, setExpedicionDate] = useState();
  const [documentType, setDocumentType] = useState();
  const [testData, setTestData] = useState();

  const userScreen = () => navigation.navigate('DashboardMap');
  const handleDatePicker = dateP => setExpedicionDate(dateP);
  const handleState = text => setDocumentType(text);
  const handleStateTest = text => setTestData(text);

  let optionsId = ['Tarjeta de identidad', 'Cedula', 'Pasaporte', 'Cedula de extranjeria'];
  let optionsTest = ['Positivo', 'Negativo', 'Sin prueba', 'En espera de resultados'];

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
        <KeyboardAwareScrollView>
          <View>
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
            <InputSelect
              data={optionsId}
              value={documentType}
              onPress={handleState}
              placeholder={'Tipo de documento'}
            />
            <InputText
              style={styles.input}
              returnKeyType="next"
              placeholder={'Numero de documento'}
              keyboardType={'number-pad'}
              onChangeText={() => {}}
              autoCapitalize="none"
            />
            <DatePicker
              value={expedicionDate}
              onPress={handleDatePicker}
              styles={styles.input}
            />
            <InputSelect
              data={optionsTest}
              value={testData}
              onPress={handleStateTest}
              placeholder={'Prueba'}
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
        </KeyboardAwareScrollView>
      </ScrollView>
      <BottomButtons btns={btns} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    padding: 16,
  },
  input: {
    fontSize: 16,
  },
});

export default NewUserScreen;
