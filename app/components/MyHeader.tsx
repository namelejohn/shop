import React from 'react';
import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import COLORS from '../styles/colors.ts';

const MyHeader = ({
  title,
  showBack = false,
  rightItem = null,
}: {
  title: string;
  showBack?: boolean;
  rightItem?: React.ReactNode;
}) => {
  const navigation: any = useNavigation();

  function navToMenu() {
    navigation.navigate('Menu');
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          {showBack && (
            <Pressable onPress={navigation.goBack} style={styles.backBtn}>
              <Image
                source={require('../assets/back.png')}
                style={{
                  width: 30,
                  height: 30,
                  resizeMode: 'contain',
                  marginLeft: 10,
                }}
              />
            </Pressable>
          )}
        </View>
        <Text style={styles.headerTitle}>{title}</Text>
      </View>
      <View style={styles.cartContainer}>{rightItem && rightItem}</View>
    </View>
  );
};

const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    width: width,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 4,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 10,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
  },
  backIcon: {
    width: 52,
    height: 52,
    resizeMode: 'contain',
  },
  headerTitle: {
    fontSize: 35,
    fontWeight: 800,
    color: COLORS.white,
    marginLeft: 12,
  },
  cartContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cartButton: {
    width: 40,
    height: 40,
    backgroundColor: '#FF00FF',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartIcon: {
    width: 20,
    height: 20,
    tintColor: 'white',
  },
  badge: {
    position: 'absolute',
    top: -5,
    right: -5,
    width: 18,
    height: 18,
    backgroundColor: 'orange',
    borderRadius: 9,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  badgeText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
  backBtn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backBtnTitle: {
    color: COLORS.primary,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default MyHeader;
