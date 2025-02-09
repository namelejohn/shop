import React, {useEffect, useState} from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import COLORS from '../styles/colors.ts';
import MyHeader from '../components/MyHeader.tsx';
import ScreenBg from '../components/ScreenBg.tsx';

const MONTH_NAMES = [
  'JAN',
  'FEB',
  'MAR',
  'APR',
  'MAY',
  'JUN',
  'JUL',
  'AUG',
  'SEP',
  'OCT',
  'NOV',
  'DEC',
];

const today = new Date();
const MOCK_DATES = Array.from({length: 5}, (_, i) => {
  const date = new Date(today);
  date.setDate(date.getDate() + i);
  return {
    day: date.getDate(),
    month: MONTH_NAMES[date.getMonth()],
  };
});

const MOCK_TIMES = [
  '10:00',
  '11:00',
  '13:00',
  '14:00',
  '14:15',
  '15:00',
  '15:15',
  '15:40',
  '16:00',
  '16:30',
  '16:45',
  '17:30',
];

export default function BookingScreen({navigation}: any) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedDateIndex, setSelectedDateIndex] = useState<number | null>(
    null,
  );
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (name && phone && selectedDateIndex !== null && selectedTime) {
      setIsComplete(true);
    } else {
      setIsComplete(false);
    }
  }, [name, phone, selectedDateIndex, selectedTime]);

  const handleConfirm = () => {
    navigation.navigate('BookingConfirmation');
  };

  return (
    <ScreenBg>
      <SafeAreaView style={styles.safeArea}>
        <MyHeader
          showBack
          title={'Reservation'}
          rightItem={
            <Pressable
              disabled={!isComplete}
              onPress={handleConfirm}
              style={{marginRight: 10}}>
              <Image
                source={
                  isComplete
                    ? require('../assets/check.png')
                    : require('../assets/check_inactive.png')
                }
                style={{width: 30, height: 30, resizeMode: 'contain'}}
              />
            </Pressable>
          }
        />

        <ScrollView contentContainerStyle={styles.contentContainer}>
          <TextInput
            placeholder="Your name"
            placeholderTextColor="#ad7777"
            style={styles.input}
            value={name}
            onChangeText={setName}
          />
          <TextInput
            placeholder="Your phone number"
            placeholderTextColor="#ad7777"
            style={styles.input}
            keyboardType="phone-pad"
            value={phone}
            onChangeText={setPhone}
          />

          <Text style={styles.sectionTitle}>Select date</Text>

          <View style={styles.dateContainer}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {MOCK_DATES.map((d, index) => {
                const isSelected = index === selectedDateIndex;
                return (
                  <TouchableOpacity
                    key={index}
                    style={[
                      styles.dateItem,
                      isSelected && styles.dateItemSelected,
                    ]}
                    onPress={() => setSelectedDateIndex(index)}>
                    <Text
                      style={[
                        styles.dateDay,
                        isSelected && styles.dateDaySelected,
                      ]}>
                      {d.day}
                    </Text>
                    <Text
                      style={[
                        styles.dateMonth,
                        isSelected && styles.dateMonthSelected,
                      ]}>
                      {d.month}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>

          <View style={styles.timesWrapper}>
            {MOCK_TIMES.map((time, idx) => {
              const isChosen = time === selectedTime;
              return (
                <TouchableOpacity
                  key={idx}
                  style={[styles.timeSlot, isChosen && styles.timeSlotSelected]}
                  onPress={() => setSelectedTime(time)}>
                  <Text
                    style={[
                      styles.timeSlotText,
                      isChosen && styles.timeSlotTextSelected,
                    ]}>
                    {time}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
      </SafeAreaView>
    </ScreenBg>
  );
}

const BG_COLOR = '#7A1F1F';
const ITEM_COLOR = '#932323';
const SELECTED_COLOR = '#fff';
const TEXT_COLOR = '#fff';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: BG_COLOR,
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  input: {
    backgroundColor: ITEM_COLOR,
    borderRadius: 12,
    height: 50,
    paddingHorizontal: 15,
    fontSize: 16,
    color: TEXT_COLOR,
    marginBottom: 16,
  },
  sectionTitle: {
    color: TEXT_COLOR,
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 10,
  },
  dateContainer: {
    marginBottom: 20,
  },
  dateItem: {
    width: 70,
    height: 70,
    backgroundColor: ITEM_COLOR,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  dateItemSelected: {
    backgroundColor: SELECTED_COLOR,
  },
  dateDay: {
    color: TEXT_COLOR,
    fontSize: 20,
    fontWeight: '600',
  },
  dateDaySelected: {
    color: COLORS.black,
  },
  dateMonth: {
    color: TEXT_COLOR,
    fontSize: 12,
  },
  dateMonthSelected: {
    color: COLORS.black,
  },
  timesWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  timeSlot: {
    width: 80,
    paddingVertical: 10,
    backgroundColor: ITEM_COLOR,
    borderRadius: 10,
    marginRight: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  timeSlotSelected: {
    backgroundColor: SELECTED_COLOR,
  },
  timeSlotText: {
    fontSize: 16,
    color: '#fff',
  },
  timeSlotTextSelected: {
    fontWeight: '700',
    color: COLORS.black,
  },
});
