import React, { Component } from 'react';
import {
   View,
   Text,
   StyleSheet,
   ScrollView,
   SafeAreaView,
   KeyboardAvoidingView,
} from 'react-native';
import { connect } from 'react-redux';
import { saveNewUser } from './actions/';
import { Formik } from 'formik';
import * as yup from 'yup';
import InputText from '../../components/Input/InputText';
import DatePicker from '../../components/DatePicker/DatePicker';
import InputSelect from '../../components/Input/InputSelect';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { theme } from '../../core/theme';
import Button from '../../components/Button/Button';
import Loading from '../../components/Loading/Loading';

class NewUserScreen extends Component {
   state = {
      expeditionDate: '',
      documentType: '',
      testData: '',
   };

   handleDatePicker = (dateP) =>
      this.setState({
         expeditionDate: dateP,
      });

   handleState = (text) =>
      this.setState({
         documentType: text,
      });

   handleStateTest = (text) =>
      this.setState({
         testData: text,
      });

   userScreen = () => this.props.navigation.navigate('DashboardMap');

   optionsId = [
      'Tarjeta de identidad',
      'Cedula',
      'Pasaporte',
      'Cedula de extranjeria',
   ];
   optionsTest = [
      'Positivo',
      'Negativo',
      'Sin prueba',
      'En espera de resultados',
   ];
   validationSchema = yup.object({
      name: yup.string().required('Campo requerido'),
      address: yup.string().required('Campo requerido'),
      documentType: yup.string().required('Campo requerido'),
      id: yup.number().required('Campo requerido'),
      expeditionDate: yup.string().required('Campo requerido'),
      testResult: yup.string().required('Campo requerido'),
      phone: yup.number().required('Campo requerido'),
      email: yup.string().required('Campo requerido'),
   });

   initialValues = {
      name: '',
      address: '',
      documentType: '',
      id: '',
      expeditionDate: '',
      testResult: '',
      phone: '',
      email: '',
   };

   render() {
      const { loading } =this.props;
      return (
         <SafeAreaView style={styles.container}>
            {loading ? (
               <Loading />
            ) : (
               <ScrollView style={styles.scrollView}>
                  <View>
                     <Icon name="account-circle-outline" style={styles.icon} />
                     <Text style={styles.text}>
                        Por favor llegue los campos a continuacion para
                        registrar un ciudadano.
                     </Text>
                  </View>
                  <KeyboardAvoidingView>
                     <>
                        <Formik
                           initialValues={this.initialValues}
                           enableReinitialize
                           validationSchema={this.validationSchema}
                           onSubmit={(values, { setSubmitting, resetForm }) => {
                              setSubmitting(true);
                              console.log('values', values);
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
                                    errorText={
                                       touched.address && errors.address
                                    }
                                 />
                                 <InputSelect
                                    items={this.optionsId}
                                    value={this.state.documentType}
                                    onPress={handleChange('documentType')}
                                    onChangeText={this.handleState}
                                    placeholder={'Tipo de documento'}
                                    onBlur={handleBlur}
                                    value={values.documentType}
                                    errorText={
                                       touched.documentType &&
                                       errors.documentType
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
                                    onChangeText={this.handleDatePicker}
                                    onBlur={handleBlur('expeditionDate')}
                                    value={this.state.expeditionDate}
                                    errorText={
                                       touched.expeditionDate &&
                                       errors.expeditionDate
                                    }
                                 />
                                 <InputSelect
                                    items={this.optionsTest}
                                    value={this.state.testData}
                                    onPress={handleChange('testResult')}
                                    placeholder={'Prueba'}
                                    onChangeText={this.handleStateTest}
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
                                 <View style={styles.downButton}>
                                    <Button
                                       style={styles.button}
                                       title={'Cancelar'}
                                       onPress={this.userScreen}>
                                       {'Cancelar'}
                                    </Button>
                                    <Button
                                       style={styles.button}
                                       title={'Guardar'}
                                       onPress={handleSubmit}>
                                       {'Guardar'}
                                    </Button>
                                 </View>
                                 {/* <Text>{JSON.stringify(values, null, 2)}</Text> */}
                              </View>
                           )}
                        </Formik>
                     </>
                  </KeyboardAvoidingView>
               </ScrollView>
            )}
         </SafeAreaView>
      );
   }
}

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
   downButton: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 60,
   },
   button: {
      width: '48%',
      marginVertical: 10,
   },
});

const mapStateToProps = (state) => {
   const { data, loading, error } = state.createUser;
   return { data, loading, error };
};

const mapDispatchToProps = (dispatch) => {
   return {
      saveNewCiudadano: (data) => {
         return dispatch(saveNewUser(data));
      },
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewUserScreen);
