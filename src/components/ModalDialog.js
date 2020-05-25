import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Dialog, Portal, Divider } from 'react-native-paper';
import InputSelect from './InputSelect';
import Button from './Button';

let date = new Date()

export default class ModalDialog extends React.Component {
  constructor(props) {
    super(props);
  }

  _hideDialog = () => this.props.onClose();

  render() {
    const { showModal: { visible, data } } = this.props;
    return (
      <View>
        <Portal>
          <Dialog
            visible={visible}
            onDismiss={this._hideDialog}
          >
            <Dialog.Title style={styles.title}>Registrar {data}</Dialog.Title>

            <Dialog.Content>
              <View style={styles.textContainer}>
                <Text style={[styles.texts, styles.bold]}>Fecha: </Text>
                <Text style={styles.texts}>Fecha</Text>
              </View>
              <Divider />
              <View style={styles.textContainer}>
                <Text style={[styles.texts, styles.bold]}>Hora: </Text>
                <Text style={styles.texts}>Hora</Text>
              </View>
              <Divider />
              <View style={{ marginBottom: 40 }}>
                <InputSelect />
              </View>
              <Button
                title={'Registrar'}
                style={styles.loginButton}
                onPress={this._hideDialog}
              />
            </Dialog.Content>
          </Dialog>
        </Portal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  texts: {
    fontSize: 16,
    paddingTop: 20,
    paddingBottom: 20,
    textTransform: 'uppercase'
  },
  bold: {
    fontWeight: 'bold'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  loginButton: {
    marginVertical: 8,
  },
})