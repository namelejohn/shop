import React from 'react';
import {FlatList, Image, Platform, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {observer} from 'mobx-react-lite';
import {useStore} from '../stores/StoreContext.tsx';
import ScreenBg from '../components/ScreenBg.tsx';
import CartItemView from '../components/CartItemView.tsx';
import COLORS from '../styles/colors.ts';
import MyButton from '../components/MyButton.tsx';
import {FONT_WEIGHT} from '../styles/constants.ts';
import MyHeader from '../components/MyHeader.tsx';

const emptyIcon = require('../assets/empty.png');
const OrderScreen = ({navigation}: any) => {
  const {productStore} = useStore();
  const {cart, cartTotal} = productStore;
  const isEmpty = cart.length === 0;

  const navigateToConfirmScreen = () => {
    navigation.navigate('Checkout');
  };
  const navigateToShop = () => {
    navigation.navigate('Shop');
  };

  return (
    <ScreenBg>
      <SafeAreaView edges={['top']} style={styles.container}>
        <MyHeader showBack title={'Basket'} />
        <View style={styles.container}>
          <FlatList
            data={cart}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
              <CartItemView
                navigateToCheckout={navigateToConfirmScreen}
                item={item}
              />
            )}
            contentContainerStyle={{paddingBottom: 100, paddingTop: 20}}
            ListEmptyComponent={<EmptyCartView />}
          />
        </View>
        {cart.length > 0 && (
          <View>
            <View style={styles.footer}>
              <Text style={styles.footerText}>Subtotal:</Text>
              <Text style={styles.footerTextValue}>${cartTotal}</Text>
            </View>
            <View style={styles.footer}>
              <Text style={styles.footerText}>Commission:</Text>
              <Text style={styles.footerTextValue}>${0}</Text>
            </View>
          </View>
        )}
        <View>
          {!isEmpty && (
            <MyButton
              onPress={navigateToConfirmScreen}
              title={'Total'}
              secondTitle={`$${cartTotal}`}
              containerStyle={{
                width: '90%',
                marginBottom: 40,
                marginTop: 20,
                alignSelf: 'center',
              }}
            />
          )}
        </View>
      </SafeAreaView>
    </ScreenBg>
  );
};

const EmptyCartView = () => {
  return (
    <View style={styles.emptyCartContainer}>
      <Image source={emptyIcon} style={styles.emptyIcon} />
      <Text style={styles.emptyCartText}>
        {'You still have an\nempty shopping cart..'}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'right',
  },
  removeText: {
    color: COLORS.error,
    textAlign: 'right',
  },
  emptyCartContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 80,
  },
  emptyCartIcon: {
    width: 100,
    height: 100,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
    marginBottom: 10,
  },
  totalText: {
    fontSize: 20,
    fontWeight: '600',
    color: COLORS.white,
  },
  bottomContainer: {
    ...Platform.select({
      android: {
        paddingBottom: 20,
      },
    }),
    paddingTop: 10,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 4,
  },
  emptyCartText: {
    fontSize: 20,
    fontWeight: 800,
    color: COLORS.white,
    textAlign: 'center',
    marginTop: 20,
  },
  emptyCartSubText: {
    fontSize: 18,
    textAlign: 'center',
    color: COLORS.white,
    opacity: 0.5,
    fontWeight: '400',
    marginTop: 20,
  },
  emptyIcon: {
    width: 180,
    height: 180,
    marginTop: 40,
    resizeMode: 'contain',
  },
  headerContainer: {
    alignItems: 'center',
    backgroundColor: 'rgba(5, 5, 5, 0.03)',
    paddingVertical: 10,
  },
  cartLengthText: {
    color: COLORS.black,
  },
  headerRight: {
    marginRight: 10,
  },
  headerRightTitle: {
    fontSize: 16,
  },
  cartHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 6,
  },
  cartHeaderTitle: {
    fontSize: 14,
    fontWeight: '600',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 4,
  },
  totalAmount: {
    color: COLORS.primary,
  },
  footer: {
    paddingTop: 10,
    paddingLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  footerText: {
    fontSize: 18,
    fontWeight: 500,
    color: '#FFA3A3',
    marginBottom: 4,
  },
  footerTextValue: {
    fontSize: 18,
    fontWeight: 500,
    color: COLORS.white,
    marginBottom: 4,
  },
  deleteAllText: {
    color: COLORS.textColor,
    fontWeight: FONT_WEIGHT,
    fontStyle: 'italic',
    alignSelf: 'flex-end',
    marginRight: 20,
  },
  arrow: {
    width: 70,
    height: 90,
    resizeMode: 'contain',
  },
});

export default observer(OrderScreen);
