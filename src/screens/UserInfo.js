import * as React from 'react';
import { Text, View, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { Divider } from 'react-native-paper';
import { theme } from '../core/theme';

export default class UserInfo extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.textsContainer}>
            <Text style={[styles.textL, styles.texts]}>Nombre: </Text>
            <Text style={[styles.textR, styles.texts]}>Junior Noriega</Text>
          </View>
          <Divider />
          <View style={styles.textsContainer}>
            <Text style={[styles.textL, styles.texts]}>Direccion: </Text>
            <Text style={[styles.textR, styles.texts]}>81 Jenkins Meadow Suite 697</Text>
          </View>
          <Divider />
          <View style={styles.textsContainer}>
            <Text style={[styles.textL, styles.texts]}>Tipo de Documento: </Text>
            <Text style={[styles.textR, styles.texts]}>Cedula</Text>
          </View>
          <Divider />
          <View style={styles.textsContainer}>
            <Text style={[styles.textL, styles.texts]}>Numero de Documento: </Text>
            <Text style={[styles.textR, styles.texts]}>52 920 623</Text>
          </View>
          <Divider />
          <View style={styles.textsContainer}>
            <Text style={[styles.textL, styles.texts]}>Telefono: </Text>
            <Text style={[styles.textR, styles.texts]}>311 650 6263</Text>
          </View>
          <Divider />
        </ScrollView>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'white',
  },
  scrollView: {
    marginVertical:20,
    marginHorizontal: 20,
  },
  textsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  texts: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  textL: {
    fontSize: 16,
    fontWeight:'bold',
    textTransform: 'uppercase'
  },
  textR: {
    fontSize: 16,
    textTransform: 'capitalize'
  },
})