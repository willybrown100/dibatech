import React, { useState } from 'react';
import { View, Button, Platform, Text, TouchableOpacity, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import CustomButtom from '@/components/CustomButtom';

export default function TimePicker() {
  const [time, setTime] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event: any, selectedTime?: Date) => {
    setShow(Platform.OS === 'ios'); // iOS stays open
    if (selectedTime) {
      setTime(selectedTime);
    }
  };

  const formattedTime = time.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <View >

    <View style={styles.container}>
      <TouchableOpacity style={styles.timeBox} onPress={() => setShow(true)}>
        <Text style={styles.timeText}>{formattedTime}</Text>
      </TouchableOpacity>

      {show && (
          <DateTimePicker
          testID="dateTimePicker"
          value={time}
          mode="time"
          is24Hour={false}
          display="default"
          onChange={onChange}
        />
    )}
    </View>
  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    alignItems: 'center',
  },
  timeBox: {
    padding: 12,
    backgroundColor: '#F5EFDF',
    borderRadius: 8,
  },
  timeText: {
    color: 'black',
    fontSize: 16,
  },
});
