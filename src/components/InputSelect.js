import React, { useState } from 'react';
import { Text, TouchableOpacity, View, StyleSheet, Picker } from 'react-native';
//import { Picker } from '@react-native-community/picker';

const InputSelect = () => {

  const [valueText, setValueText] = useState('Seleccione zona');
  const locations = ['Via a Cali', 'Via a Puerto Tejada', 'Via a Jamundi'];

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
    // </View>
  <View>
    <View style={styles.textContainer}>
      <Text style={[styles.texts, styles.bold]}>Lugar: </Text>
      <Text style={styles.texts}>{valueText}</Text>
    </View>
        <Picker
          selectedValue={valueText}
          style={{height: 50}}
          onValueChange={(itemValue, itemIndex) =>
            setValueText(itemValue)}
        >
          {locations.map(loc =>
            <Picker.Item key={loc} label={loc} value={loc} />
          )}
        
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