import React, { useState } from "react";
import { View } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { formatDate } from "../core/utils";
import InputText from "./InputText";

const DatePicker = ({value, styles, onPress}) => {

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
        placeholder={"Fecha de expedicion"}
        autoCapitalize="none"
        onTouchStart={showDatePicker}
        value={formatDate(value, "f")}
      />

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};

export default DatePicker;
