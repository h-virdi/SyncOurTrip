import DateTimePicker from '@react-native-community/datetimepicker';
import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';

type Props = {
    label: string; //button label
    initialDate?: Date; //intial date (defaults to current date)
    onChange: (date: Date) => void; //function to notify parent when user picks a date
};

const DateTimePickerComponent = ({ label, initialDate = new Date(), onChange }: Props) => { //set default value for initialDate
  const [date, setDate] = useState(initialDate); //stores selected date
  const [showPicker, setShowPicker] = useState(false); //controls visibility of data picker

  const handleChange = (_event: any, selectedDate?: Date) => { //function called when a user selects a date
    setShowPicker(false); //hides date picker
    if (selectedDate) { //if new date is selected,
      setDate(selectedDate); //update to new date selected
      onChange(selectedDate); //inform parent component
    }
  };

return (
    <View style={{ marginBottom: 10 }}>
      <Button title={`Select ${label} Time`} onPress={() => setShowPicker(true)} /> 
      <Text>Time of {label}: {date.toLocaleString()}</Text>
      {showPicker && (
        <DateTimePicker
          value={date}
          mode="datetime"
          display="default"
          onChange={handleChange}
        />
      )}
    </View>
  );
};

export default DateTimePickerComponent;