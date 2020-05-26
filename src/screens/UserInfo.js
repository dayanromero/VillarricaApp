import * as React from 'react';
import {Text, View, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {Divider, Card} from 'react-native-paper';
import {theme} from '../core/theme';

const UserInfo = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Card >
          <Card.Content>
            <View style={styles.textsContainer}>
              <Text style={[styles.textL, styles.texts]}>Nombre: </Text>
              <Text style={[styles.textR, styles.texts]}>Junior Noriega</Text>
            </View>
            <Divider />
            <View style={styles.textsContainer}>
              <Text style={[styles.textL, styles.texts]}>Direccion: </Text>
              <Text style={[styles.textR, styles.texts]}>
                81 Jenkins Meadow Suite 697
              </Text>
            </View>
            <Divider />
            <View style={styles.textsContainer}>
              <Text style={[styles.textL, styles.texts]}>
                Tipo de Documento:{' '}
              </Text>
              <Text style={[styles.textR, styles.texts]}>Cedula</Text>
            </View>
            <Divider />
            <View style={styles.textsContainer}>
              <Text style={[styles.textL, styles.texts]}>
                Numero de Documento:{' '}
              </Text>
              <Text style={[styles.textR, styles.texts]}>52 920 623</Text>
            </View>
            <Divider />
            <View style={styles.textsContainer}>
              <Text style={[styles.textL, styles.texts]}>Telefono: </Text>
              <Text style={[styles.textR, styles.texts]}>311 650 6263</Text>
            </View>
          </Card.Content>
        </Card>
        <Divider />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.grey,
  },
  scrollView: {
    marginTop: 10,
    marginHorizontal: 10,
  },
  textsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  texts: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  textL: {
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  textR: {
    fontSize: 16,
    textTransform: 'capitalize',
  },
});

export default UserInfo;
