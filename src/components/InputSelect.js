import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import ReactNativePickerModule from 'react-native-picker-module';
import InputText from '../components/InputText';

const InputSelect = ({data, value, onPress, placeholder}) => {
  const handleData = (text) => onPress(text);

  return (
    <View>
      <TouchableOpacity style={styles.text}>
        <InputText
          onTouchStart={() => pickerRef.show()}
          style={styles}
          placeholder={placeholder}
          value={value}
        />
        <ReactNativePickerModule
          pickerRef={(e) => (pickerRef = e)}
          selectedValue={value}
          title="Seleccione"
          items={data}
          onValueChange={(value, index) => handleData(value)}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  texts: {
    fontSize: 16,
    paddingTop: 20,
    textTransform: 'uppercase',
  },
  bold: {
    fontWeight: 'bold',
  },
});

export default InputSelect;
