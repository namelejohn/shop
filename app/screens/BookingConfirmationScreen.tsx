import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import COLORS from '../styles/colors.ts';
import ScreenBg from '../components/ScreenBg.tsx';
import {BORDER_RADIUS} from '../styles/constants.ts';
import MyHeader from '../components/MyHeader.tsx';

const BookingConfirmationScreen = ({navigation}: any) => {
  return (
    <ScreenBg>
      <SafeAreaView edges={['top']} style={styles.container}>
        <MyHeader showBack title={'Reservation'} />
        <View style={styles.contentContainer}>
          <Image source={require('../assets/success.png')} />
          <Text style={styles.subtitle}>
            {'Your reservation has\nbeen successfully placed'}
          </Text>
        </View>
      </SafeAreaView>
    </ScreenBg>
  );
};

const {height, width} = Dimensions.get('screen');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    zIndex: 99999,
  },
  title: {
    fontSize: 32,
    fontWeight: 700,
    textAlign: 'center',
    color: COLORS.white,
    marginTop: 80,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 800,
    textAlign: 'center',
    color: COLORS.white,
    marginTop: 20,
    marginBottom: 20,
  },
  bottomTitle: {
    fontSize: 15,
    fontWeight: 600,
    textAlign: 'center',
    color: COLORS.white,
    marginTop: 20,
    opacity: 0.7,
  },
  icon: {
    width: 280,
    height: 200,
    position: 'absolute',
    top: height / 5,
    left: width / 8,
  },
  buttonContainer: {
    marginBottom: 40,
    marginTop: 10,
  },
  contentContainer: {
    borderRadius: BORDER_RADIUS,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 16,
    backgroundColor: COLORS.cardBg,
    marginTop: 50,
  },
  linearContainer: {
    alignItems: 'center',
  },
  imgContainer: {
    alignSelf: 'center',
  },
  catImg: {
    width: 400,
    resizeMode: 'contain',
    position: 'absolute',
    bottom: -60,
    left: -180,
    opacity: 0.3,
    zIndex: 0,
  },
  qrContainer: {
    padding: 20,
    borderRadius: 10,
    marginTop: 10,
  },
});

export default BookingConfirmationScreen;
