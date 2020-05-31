import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchDataLocations } from '../../store/actions/index';
import {View, Text, StyleSheet} from 'react-native';
import {Dialog, Portal, Divider} from 'react-native-paper';
import {formatDate} from '../../core/utils';
import InputSelect from '../Input/InputSelect';
import Button from '../Button/Button';

let date = new Date();

class ModalDialog extends Component {
  state = {
    lugar: 'Seleccione locacion',
    options: ['Via a Cali', 'Via a Puerto Tejada', 'Via a Jamundi']
  };

  componentDidMount() {
    this.props.getLocationById();
  }

  _hideDialog = () => this.props.onClose();
  handleState = text => this.setState({ lugar: text });

  render() {
    const {
      showModal: {visible, typeOfRegister},
    } = this.props;

    data.map((loc)=> {
      console.log('loc', loc.name)
    })

    return (
      <View>
        <Portal>
          <Dialog visible={visible} onDismiss={this._hideDialog}>
            <Dialog.Title style={styles.title}>Registrar {typeOfRegister}</Dialog.Title>
            <Dialog.Content>
              <View style={styles.textContainer}>
                <Text style={[styles.texts, styles.bold]}>Fecha: </Text>
                <Text style={styles.texts}>{formatDate(date, 'f')}</Text>
              </View>
              <Divider />
              <View style={styles.textContainer}>
                <Text style={[styles.texts, styles.bold]}>Hora: </Text>
                <Text style={styles.texts}>{formatDate(date, 'h')}</Text>
              </View>
              <Divider />
              <View style={{marginBottom: 40}}>
                <InputSelect
                  items={this.state.options}
                  value={this.state.lugar}
                  onPress={this.handleState}
                />
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
    textTransform: 'uppercase',
  },
  bold: {
    fontWeight: 'bold',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  loginButton: {
    marginVertical: 8,
  },
});

const mapStateToProps = (state) => {
  const { loading, data, error } = state.location;
  return {
    data,
    loading,
    error,
};
};

const mapDispatchToProps = (dispatch) => {
  return {
      getLocationById: (id) => {
          return dispatch(fetchDataLocations(id));
      },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalDialog);
