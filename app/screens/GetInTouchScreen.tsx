import React, {useState, useRef} from 'react';
import {Image, Pressable, StyleSheet, View} from 'react-native';
import {Formik} from 'formik';
import COLORS from '../styles/colors';
import {SafeAreaView} from 'react-native-safe-area-context';
import ScreenBg from '../components/ScreenBg.tsx';
import CustomInput from '../components/CustomInput.tsx';
import MyHeader from '../components/MyHeader.tsx';

const GetInTouchScreen = ({navigation}: any) => {
  const [formData, setFormData] = useState({
    phone: '',
    address: '',
    index: '',
    date: '',
  });

  const isComplete =
    formData.phone !== '' &&
    formData.address !== '' &&
    formData.index !== '' &&
    formData.date !== '';

  const formikRef = useRef(null);

  const handleSubmitFormik = () => {
    navigation.navigate('MenuTab');
  };

  return (
    <ScreenBg>
      <SafeAreaView edges={['left', 'right']} style={styles.container}>
        <MyHeader
          showBack
          title={'Contacts'}
          rightItem={
            <Pressable
              disabled={true}
              onPress={() => {
                if (isComplete) {
                  // вызываем сабмит у Formik через ref
                  (formikRef.current as any)?.handleSubmit();
                }
              }}
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

        <Formik
          innerRef={formikRef}
          initialValues={{
            phone: '',
            address: '',
            index: '',
            date: '',
            comments: '',
          }}
          onSubmit={handleSubmitFormik}>
          {({handleChange, values}) => (
            <View style={styles.formContainer}>
              <CustomInput
                label={''}
                style={styles.input}
                placeholder="Phone number"
                placeholderTextColor={COLORS.grayText}
                value={values.phone}
                onChangeText={val => {
                  handleChange('phone')(val);
                  setFormData(prev => ({...prev, phone: val}));
                }}
              />

              <CustomInput
                label={''}
                style={styles.input}
                placeholder="Address"
                placeholderTextColor={COLORS.grayText}
                value={values.address}
                onChangeText={val => {
                  handleChange('address')(val);
                  setFormData(prev => ({...prev, address: val}));
                }}
              />

              <CustomInput
                label={''}
                style={styles.input}
                placeholder="Date"
                placeholderTextColor={COLORS.grayText}
                value={values.date}
                onChangeText={val => {
                  handleChange('date')(val);
                  setFormData(prev => ({...prev, date: val}));
                }}
              />

              <CustomInput
                label={''}
                style={styles.input}
                placeholder="Index"
                placeholderTextColor={COLORS.grayText}
                value={values.index}
                onChangeText={val => {
                  handleChange('index')(val);
                  setFormData(prev => ({...prev, index: val}));
                }}
              />
            </View>
          )}
        </Formik>
      </SafeAreaView>
    </ScreenBg>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
  },
  formContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  input: {
    flex: 1,
    color: COLORS.black,
    paddingHorizontal: 20,
    fontStyle: 'italic',
  },
});

export default GetInTouchScreen;
