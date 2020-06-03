import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import ReactNativePickerModule from 'react-native-picker-module';
import InputText from './InputText';

const InputSelect = ({...props}) => {
  const {items, value, onPress, placeholder} = props;
  const handleData = (value, index) => onPress(value, index);
  let pickerRef = null;

  return (
    <>
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
          title='Seleccione'
          items={items}
          onValueChange={(value, index) =>{
             handleData(value, index)
            }}
        />
      </TouchableOpacity>
    </>
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
