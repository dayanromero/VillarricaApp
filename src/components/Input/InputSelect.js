import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import ReactNativePickerModule from 'react-native-picker-module';
import InputText from './InputText';
import { theme } from '../../core/theme';


const InputSelect = ({ errorText, ...props }) => {
   const { items, value, onPress, placeholder, onChangeText } = props;
   const handleData = (value, index) => onPress(value, index);
   let pickerRef = null;

   return (
      <>
         <TouchableOpacity style={styles.text}>
            <View>
               <InputText
                  onTouchStart={() => pickerRef.show()}
                  style={styles}
                  placeholder={placeholder}
                  value={value}
               />
               {errorText ? (
                  <Text style={styles.error}>{errorText}</Text>
               ) : null}
            </View>
            <ReactNativePickerModule
               pickerRef={(e) => (pickerRef = e)}
               selectedValue={value}
               title="Seleccione"
               items={items}
               onValueChange={(value, index) => {
                  if (onChangeText) onChangeText(value);
                  handleData(value, index);
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
   error: {
      fontSize: 14,
      color: theme.colors.error,
      paddingHorizontal: 4,
      paddingTop: 4,
   },
});

export default InputSelect;
