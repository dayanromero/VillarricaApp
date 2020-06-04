import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, KeyboardAvoidingView} from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import InputText from '../../components/Input/InputText';
import DatePicker from '../../components/DatePicker/DatePicker';
import InputSelect from '../../components/Input/InputSelect';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { theme } from '../../core/theme';
import Button from '../../components/Button/Button';

const NewUserScreen = ({ navigation }) => {
   const [expeditionDate, setexpeditionDate] = useState(null);
   const [documentType, setDocumentType] = useState(null);
   const [testData, setTestData] = useState(null);

   const handleDatePicker = (dateP) => setexpeditionDate(dateP);
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
   const validationSchema = yup.object({
      name: yup.string().required('Campo requerido'),
      address: yup.string().required('Campo requerido'),
      documentType: yup.string().required('Campo requerido'),
      id: yup.number().required('Campo requerido'),
      expeditionDate: yup.string().required('Campo requerido'),
      testResult: yup.string().required('Campo requerido'),
      phone: yup.number().required('Campo requerido'),
      email: yup.string().required('Campo requerido'),
   });
   const initialValues = {
      name: '',
      address: '',
      documentType: '',
      id: '',
      expeditionDate: '',
      testResult: '',
      phone: '',
      email: '',
   };

   return (
      <View style={styles.container}>
         <ScrollView style={styles.scrollView}>
            <View>
               <Icon name="account-circle-outline" style={styles.icon} />
               <Text style={styles.text}>
                  Por favor llegue los campos a continuacion para registrar un
                  ciudadano.
               </Text>
            </View>
            <KeyboardAvoidingView>
               <>
                  <Formik
                     initialValues={initialValues}
                     enableReinitialize
                     validationSchema={validationSchema}
                     onSubmit={(values, { setSubmitting, resetForm }) => {
                        setSubmitting(true);
                        console.log('values', values);
                        //setEmail('')
                        resetForm({});
                        setSubmitting(false);
                     }}>
                     {({
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        values,
                        errors,
                        touched,
                     }) => (
                        <View>
                           <InputText
                              style={styles.input}
                              returnKeyType="next"
                              placeholder={'Nombres'}
                              keyboardType={'default'}
                              onChangeText={handleChange('name')}
                              onBlur={handleBlur('name')}
                              autoCapitalize="none"
                              value={values.name}
                              errorText={touched.name && errors.name}
                           />
                           <InputText
                              style={styles.input}
                              returnKeyType="next"
                              placeholder={'Direccion'}
                              keyboardType={'default'}
                              onChangeText={handleChange('address')}
                              onBlur={handleBlur('address')}
                              autoCapitalize="none"
                              value={values.address}
                              errorText={touched.address && errors.address}
                           />
                           <InputSelect
                              items={optionsId}
                              value={documentType}
                              onPress={handleChange('documentType')}
                              onChangeText={handleState}
                              placeholder={'Tipo de documento'}
                              onBlur={handleBlur}
                              value={values.documentType}
                              errorText={
                                 touched.documentType && errors.documentType
                              }
                           />
                           <InputText
                              style={styles.input}
                              returnKeyType="next"
                              placeholder={'Numero de documento'}
                              keyboardType={'number-pad'}
                              onChangeText={handleChange('id')}
                              onBlur={handleBlur('id')}
                              autoCapitalize="none"
                              value={values.id}
                              errorText={touched.id && errors.id}
                           />
                           <DatePicker
                              onPress={handleChange('expeditionDate')}
                              styles={styles.input}
                              placeholder={'Fecha de expedicion'}
                              onChangeText={handleDatePicker}
                              onBlur={handleBlur('expeditionDate')}
                              value={expeditionDate}
                              errorText={
                                touched.expeditionDate && errors.expeditionDate
                             }
                           />
                           <InputSelect
                              items={optionsTest}
                              value={testData}
                              onPress={handleChange('testResult')}
                              placeholder={'Prueba'}
                              onChangeText={handleStateTest}
                              onBlur={handleBlur('testResult')}
                              value={values.testResult}
                              errorText={
                                 touched.testResult && errors.testResult
                              }
                           />
                           <InputText
                              style={styles.input}
                              returnKeyType="next"
                              placeholder={'Telefono'}
                              keyboardType={'phone-pad'}
                              onChangeText={handleChange('phone')}
                              onBlur={handleBlur('phone')}
                              autoCapitalize="none"
                              value={values.phone}
                              errorText={touched.phone && errors.phone}
                           />
                           <InputText
                              style={styles.input}
                              returnKeyType="next"
                              placeholder={'Correo electronico'}
                              keyboardType={'email-address'}
                              onChangeText={handleChange('email')}
                              onBlur={handleBlur('email')}
                              autoCapitalize="none"
                              value={values.email}
                              errorText={touched.email && errors.email}
                           />

                           <Button
                              title={'Guardar'}
                              onPress={handleSubmit}>
                              {'Guardar'}
                           </Button>
                           <Text>{JSON.stringify(values, null, 2)}</Text>
                        </View>
                     )}
                  </Formik>
               </>
            </KeyboardAvoidingView>
            </ScrollView>
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
      borderColor: 'black',
   },
   text: {
      fontSize: 16,
      textAlign: 'center',
      marginBottom: 20,
   },
   icon: {
      textAlign: 'center',
      fontSize: 100,
      color: theme.colors.secondary,
   },
});

export default NewUserScreen;
