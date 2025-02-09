import React from 'react';
import {StyleSheet, View} from 'react-native';
import COLORS from '../styles/colors.ts';

interface ScreenBgProps {
  children?: React.ReactNode;
}

const ScreenBg = ({children}: ScreenBgProps) => {
  return <View style={styles.background}>{children}</View>;
};

export default ScreenBg;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: COLORS.screenBg,
  },
});
