import React, { useState } from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import ReactNativePickerModule from "react-native-picker-module"

const InputSelect = () => {

  const [valueText, setValueText] = useState('Seleccione zona');
  const [selectedIndex, setSelectedIndex] = useState(null);
  const locations = {
    data: ['Via a Cali', 'Via a Puerto Tejada', 'Via a Jamundi'],
  };

  return (
    <View>
      <TouchableOpacity
        style={styles.text}
        onPress={() => pickerRef.show()}
      >
          <View style={styles.textContainer}>
            <Text style={[styles.texts, styles.bold]}>Lugar: </Text>
            <Text style={styles.texts}>{valueText}</Text>
          </View>
      <ReactNativePickerModule
        pickerRef={(e) => (pickerRef = e)}
        selectedValue={selectedIndex}
        title={'Seleccione una locaion'}
        items={locations.data}
        onDismiss={() => console.log('onDismiss')}
        onCancel={() => console.log('Cancelled')}
        
        onValueChange={(valueText, index) => {
          console.log('value: ', valueText);
          console.log('index: ', index);
          setValueText(valueText);
          setSelectedIndex(index);
        }}
      />
      </TouchableOpacity>
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