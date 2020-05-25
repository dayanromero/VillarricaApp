import React, { memo, useState } from 'react';
import { View, Text, Image, StyleSheet} from 'react-native';
import BottomButtons from '../components/BottomButtons';
import UserProfileNavigation from '../navigation/UserProfileNavigation';
import ModalDialog from '../components/ModalDialog'

const userImg = require('../assets/user.png'); 

const UserScreen = ({ route, ...props }) => {
  const [modalVisible, setModalVisible] = useState({ visible:false, data:'' });
  const { userId } = route.params;

  handleModalOpen = data => setModalVisible({ visible: true, data:data });
  onClose = () => setModalVisible(false);

  return (
    <View style={styles.container}>
      <ModalDialog
          showModal = {modalVisible}
          onClose = {onClose}
      />
      <View style={styles.userInfo}>
        <Image source={userImg} style={styles.userImg}/>
        <View >
          <Text style={styles.h1}>Junior Noriega</Text> 
          <Text style={styles.h2}>81 Jenkins Meadow Suite 697</Text>
          <Text style={styles.h3}>Prueba: Negativo {userId}</Text>
        </View>   
      </View>
      <UserProfileNavigation/>
      <BottomButtons handleModal = {handleModalOpen}/>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'white',
    paddingTop: 0
  },
  userInfo: {
    width: '100%',
    marginVertical: 30,
    alignItems: 'center',
  },
  userImg: {
    width: 84,
    height: 84,
    marginBottom:20,
  },
  h1: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  h2: {
    fontSize: 18,
    textAlign: 'center'
  },
  h3: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})

export default memo(UserScreen);
