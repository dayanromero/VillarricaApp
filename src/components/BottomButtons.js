import * as React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import Botton from '../components/Button';

export default class BottomButtons extends React.Component {
  constructor(props) {
    super(props);
  }

  _showDialog = (data) => this.props.handleModal(data);

  render() {
    const ingreso = 'ingreso';
    const salida = 'salida';
    return (
      <View style={styles.buttonContainer}>
        <Botton
          title={'Ingeso'}
          style={styles.button}
          onPress={() => this._showDialog(ingreso)}
        >
          {ingreso}
        </Botton>
        <Botton
          title={'Salida'}
          style={styles.button}
          onPress={() => this._showDialog(salida)}
        >
          {salida}
        </Botton>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingBottom: (Platform.OS === 'ios') ? 20 : 2
  },
  button: {
    width: '49%',
    marginVertical: 8,
  },
});
