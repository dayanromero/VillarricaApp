import React, { useState } from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { Picker } from '@react-native-community/picker';

const InputSelect = () => {

  const [valueText, setValueText] = useState('Seleccione zona');
  const dataAndImageSet = {
    data: ['Via a Cali', 'Via a Puerto Tejada', 'Via a Jamundi']
  }

  state = {
    language: 'java',
  };
  return (
    // <View>
    //   <TouchableOpacity
    //     style={styles.text}
    //     onPress={() => pickerRef.show()}
    //   >
    //       <View style={styles.textContainer}>
    //         <Text style={[styles.texts, styles.bold]}>Lugar: </Text>
    //         <Text style={styles.texts}>{valueText}</Text>
    //        </View>
    //   </TouchableOpacity>

    //   <ReactNativePickerModule
    //     pickerRef={e => (pickerRef = e)}
    //     selectedValue={selectedIndex}
    //     title={'Seleccionar'}
    //     items={dataAndImageSet.data}
    //     onDismiss={() => console.log("onDismiss")}
    //     onCancel={() => console.log("Cancelled")}
    //     onValueChange={(valueText, index) => {
    //       console.log("value: ", valueText)
    //       console.log("index: ", index)
    //       setValueText(valueText)
    //       setSelectedIndex(index)
    //     }}
    //   />
    // </View>
  <View>
    <View style={styles.textContainer}>
      <Text style={[styles.texts, styles.bold]}>Lugar: </Text>
      <Text style={styles.texts}>{valueText}</Text>
    </View>
        <Picker
          selectedValue={this.state.language}
          style={{height: 50, width: 100}}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({language: itemValue})
          }>
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
        </View>
  )
}

const styles = StyleSheet.create({
    textContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      texts: {
        fontSize: 16,
        paddingTop: 20,
        textTransform: 'uppercase'
      },
      bold: {
          fontWeight:'bold'
      }
  });

  export default InputSelect