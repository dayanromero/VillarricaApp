import React, { useState } from 'react';
import { View } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { formatDate } from '../core/utils';
import InputText from './InputText';

const DatePicker = ({...props}) => {
  const {value, styles, onPress, placeholder} = props;
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => setDatePickerVisibility(true);
  const hideDatePicker = () => setDatePickerVisibility(false);

  const handleConfirm = (date) => {
    onPress(date);
    hideDatePicker();
  };

  return (
    <View>
      <InputText
        style={styles}
        placeholder={placeholder}
        autoCapitalize='none'
        onTouchStart={showDatePicker}
        value={formatDate(value, 'f')}
      />

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode='date'
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        headerTextIOS={'Seleccionar fecha'}
      />
    </View>
  );
};

export default DatePicker;
