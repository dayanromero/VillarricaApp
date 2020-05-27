import React, {memo, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import BottomButtons from '../../components/Button/BottomButtons';
import UserProfileNavigation from '../../navigation/UserProfileNavigation';
import ModalDialog from '../../components/Modal/ModalDialog';
import {theme} from '../../core/theme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const userImg = require('../../assets/user.png');

const UserScreen = ({route, ...props}) => {
  const [modalVisible, setModalVisible] = useState({visible: false, data: ''});
  const {userId} = route.params;

  handleModalOpen = (data) => setModalVisible({visible: true, data: data});
  onClose = () => setModalVisible(false);

  const btns = [
    {
      title: 'Salida',
      action: () => handleModalOpen('Salida'),
    },
    {
      title: 'Ingreso',
      action: () => handleModalOpen('Ingreso'),
    },
  ];

  return (
    <View style={styles.container}>
      <ModalDialog showModal={modalVisible} onClose={onClose} />
      <View style={styles.userInfo}>
        <Icon name='account-circle-outline' style={styles.icon} />
        <View>
          <Text style={styles.h1}>Junior Noriega</Text>
          <Text style={styles.h2}>81 Jenkins Meadow Suite 697</Text>
          <Text style={styles.h3}>Prueba: Negativo {userId}</Text>
        </View>
      </View>
      <UserProfileNavigation />
      <BottomButtons btns={btns} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.grey,
    paddingTop: 0,
  },
  userInfo: {
    width: '100%',
    marginVertical: 30,
    alignItems: 'center',
  },
  icon: {
    textAlign: 'center',
    fontSize: 100,
    color: theme.colors.secondary,
  },
  h1: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black'
  },
  h2: {
    fontSize: 18,
    textAlign: 'center',
    color: 'black'
  },
  h3: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black'
  },
});

export default memo(UserScreen);
