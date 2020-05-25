import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card, Paragraph, Divider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import { theme } from '../core/theme';

const InfoCard = () =>  {
  return (
    <Card style={styles.card}>
      <Card.Content>
        <Paragraph>
          <Icon name='ios-calendar' style={styles.icon} />
           <Text style={styles.t}>20 de marzo de 2020</Text>
        </Paragraph>
          <View style={styles.textsContainer}>
            <Text style={[styles.textL, styles.texts]}>Hora Salida: </Text>
            <Text style={styles.texts}>7:45am</Text>
          </View>
          <Divider />
          <View style={styles.textsContainer}>
            <Text style={[styles.textL, styles.texts]}>Hora Ingreso: </Text>
            <Text style={styles.texts}>3:25pm</Text>
          </View>
          <Divider />
          <View style={styles.textsContainer}>
            <Text style={[styles.textL, styles.texts]}>Lugar: </Text>
            <Text style={styles.texts}>Via Puerto Tejada</Text>
          </View>
      </Card.Content>
    </Card>
  )
}
const styles = StyleSheet.create({
  texts: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  texts: {
    paddingTop: 20,
    paddingBottom: 20,
    fontSize: 16,
  },
  textL: {
    fontWeight:'bold',
    textTransform: 'uppercase'
  },
  card: {
    marginBottom: 10,
  },
  icon: {
    marginRight: 10,
    color: theme.colors.secondary,
    fontSize: 20,
  },
  t: {
    paddingLeft:30,
  }
})

export default InfoCard;