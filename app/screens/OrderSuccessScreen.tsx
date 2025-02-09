import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import COLORS from '../styles/colors.ts';
import {SafeAreaView} from 'react-native-safe-area-context';
import MyImageBg from '../components/ScreenBg.tsx';
import {useStore} from '../stores/StoreContext.tsx';
import {CartItem} from '../stores/MainStore.ts';
import {BORDER_RADIUS} from '../styles/constants.ts';
import MyHeader from '../components/MyHeader.tsx';

function generateOrderSummary(cartItems: CartItem[]) {
  const itemsText = cartItems
    .map(
      (item: any) =>
        `${item.name} - ${item.quantity} шт. - $${item.price * item.quantity}`,
    )
    .join('\n');

  return `${itemsText}`;
}

const OrderSuccessScreen = ({navigation}: any) => {
  const {productStore} = useStore();
  const {cart} = productStore;

  const qrCodeValue = generateOrderSummary(cart) || 'default';

  return (
    <MyImageBg>
      <SafeAreaView edges={['left', 'right']} style={styles.container}>
        <MyHeader showBack title={'Basket'} />
        <View style={styles.contentContainer}>
          <View style={styles.iconContainer}>
            <Image source={require('../assets/success.png')} />
            <Text style={styles.successText}>
              {'Your order has been\nsuccessfully placed!'}
            </Text>
          </View>

          <View style={styles.qrContainer}>
            <QRCode
              backgroundColor={'transparent'}
              value={qrCodeValue}
              size={140}
              color={COLORS.white}
            />
          </View>
        </View>
      </SafeAreaView>
    </MyImageBg>
  );
};

const {height, width} = Dimensions.get('screen');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    justifyContent: 'center',
  },
  successText: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
  },
  qrContainer: {
    padding: 20,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 10,
    paddingHorizontal: 60,
  },
  contentContainer: {
    borderRadius: BORDER_RADIUS,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingTop: 20,
  },
  successIcon: {
    width: 300,
    height: 200,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 100,
    zIndex: 9999,
  },
  catImg: {
    width: 400,
    resizeMode: 'contain',
    position: 'absolute',
    top: -height * 0.15,
    left: -180,
  },
  iconContainer: {
    backgroundColor: COLORS.cardBg,
    borderRadius: 16,
    paddingHorizontal: 60,
    paddingVertical: 30,
  },
});

export default OrderSuccessScreen;
