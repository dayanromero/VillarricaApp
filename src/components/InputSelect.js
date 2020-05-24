import React, { useState } from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
//import ReactNativePickerModule from 'react-native-picker-module';

const InputSelect = () => {
  let pickerRef = null;

  const [valueText, setValueText] = useState('Ciudad');
  const [selectedIndex, setSelectedIndex] = useState(null);
  const dataAndImageSet = {
    data: ['Via a Cali', 'Via a Puerto Tejada', 'Via a Jamundi']
  }

  return (
    <View>
      <TouchableOpacity
        style={styles.text}
        onPress={() => pickerRef.show()}
      >
          <View style={styles.textContainer}>
            <Text style={[styles.texts, styles.bold]}>Lugar: </Text>
            <Text style={styles.texts}>TEasdsdsad</Text>
           </View>
      </TouchableOpacity>

      {/* <ReactNativePickerModule
        pickerRef={e => (pickerRef = e)}
        selectedValue={selectedIndex}
        title={'Seleccionar'}
        items={dataAndImageSet.data}
        onDismiss={() => console.log("onDismiss")}
        onCancel={() => console.log("Cancelled")}
        onValueChange={(valueText, index) => {
          console.log("value: ", valueText)
          console.log("index: ", index)
          setValueText(valueText)
          setSelectedIndex(index)
        }}
      /> */}
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