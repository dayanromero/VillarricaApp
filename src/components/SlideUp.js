import React, { memo } from 'react';
import { 
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import SlidingUpPanel from 'rn-sliding-up-panel';
import { theme } from '../core/theme';
import BottomButtons from './BottomButtons';

const dragImg = require('../assets/drag-icon.png');
const userImg = require('../assets/user.png'); 
const { height } = Dimensions.get('window')

const slideUp = ({navigation, ...props}) => {
  let { slide:{ showSlide, userId }, showModal} = props;
  
    if (showSlide) this._panel.show();

    const userScreen = () => {
      navigation.navigate('UserScreen', { userId })
    };

    return (
        <SlidingUpPanel
          ref={c => this._panel = c}
          draggableRange={{top: height / 3.5, bottom: 0}}
        >
          <View style={styles.container}>
            <Image source={dragImg} style={styles.dragIcon} />
            <View style={styles.userInfo}>
              <TouchableOpacity onPress={userScreen}>
                <Image source={userImg} style={styles.userImg}/>
              </TouchableOpacity>
              <View >
                <Text style={styles.h1}>Junior Noriega</Text> 
                <Text style={styles.h2}>81 Jenkins Meadow Suite 697</Text>
                <Text style={styles.h3}>Prueba: Negativo: { userId }</Text>
              </View>   
            </View> 
              <View style={styles.bottons}>
                <BottomButtons handleModal = {showModal}/>
              </View>
          </View>
        </SlidingUpPanel>
    )
}

const styles = StyleSheet.create({
  container: {
    height: height / 3.5,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  bottons: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  dragIcon: {
    width: 70,
    height: 6,
    margin: 10
  },
  userInfo: {
    flex:1,
    width: '100%',
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'space-between'
  },
  userImg: {
    width: 74,
    height: 74,
    marginRight: 20
  },
  h1: {
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.colors.primary
  },
  h2: {
    fontSize: 18
  },
  h3: {
    fontSize: 18,
    fontWeight: 'bold'
  }
})

export default memo(slideUp);