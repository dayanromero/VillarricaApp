import React, { useState } from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import ReactNativePickerModule from "react-native-picker-module"

const InputSelect = ({onPress}) => {

  const [valueText, setValueText] = useState('Seleccione locacion');
  const data= ['Via a Cali', 'Via a Puerto Tejada', 'Via a Jamundi'];

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
        pickerRef={e => (pickerRef = e)}
        selectedValue={valueText}
        title={valueText}
        items={data}
        onValueChange={valueText => setValueText(valueText)}
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