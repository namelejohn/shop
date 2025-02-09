import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Product} from '../types';
import COLORS from '../styles/colors.ts';
import {useStore} from '../stores/StoreContext.tsx';
import {observer} from 'mobx-react';
import {BORDER_RADIUS} from '../styles/constants.ts';
import FastImage from 'react-native-fast-image';

const ProductItemView = ({item}: {item: Product}) => {
  const {productStore} = useStore();
  const {handlePlus, toggleFavorite, isFavorite} = productStore;

  const handleAddToCart = () => {
    handlePlus(item);
  };

  return (
    <View style={styles.card}>
      <FastImage source={{uri: item.image}} style={styles.image} />
      <TouchableOpacity
        style={styles.heartContainer}
        onPress={() => toggleFavorite(item.id)}>
        <Image
          source={
            isFavorite(item.id)
              ? require('../assets/black_heart.png')
              : require('../assets/heart.png')
          }
          style={styles.heart}
        />
      </TouchableOpacity>
      <View style={styles.titleContainer}>
        <View style={styles.header}>
          <Text style={styles.name}>{item.name}</Text>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>${item.price}</Text>
        </View>
      </View>
      <View style={styles.counterContainer}>
        <TouchableOpacity style={styles.addButton} onPress={handleAddToCart}>
          <Image
            source={require('../assets/trash.png')}
            style={{width: 16, height: 16, resizeMode: 'contain'}}
          />
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: width * 0.55,
    borderRadius: 12,
    marginBottom: 10,
    marginHorizontal: 10,
    backgroundColor: COLORS.primary,
    // alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
    borderRadius: 12,
  },
  header: {
    justifyContent: 'space-between',
  },
  price: {
    fontSize: 17,
    fontWeight: 700,
    color: COLORS.textColor,
  },
  name: {
    color: COLORS.textColor,
    fontSize: 15,
    fontWeight: '500',
  },
  desc: {
    color: COLORS.grayText,
    fontWeight: '600',
    fontSize: 15,
    marginTop: 4,
  },
  details: {
    fontSize: 12,
    color: 'gray',
    marginTop: 5,
  },
  counterContainer: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
  },
  addButton: {
    borderRadius: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.white,
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
  buttonText: {
    textAlign: 'center',
    color: COLORS.black,
    marginLeft: 6,
  },
  icon: {
    width: 18,
    height: 18,
  },
  cart: {
    width: 52,
    height: 52,
  },
  weight: {
    color: COLORS.grayText,
  },
  detailContainer: {
    flexDirection: 'row',
  },
  titleContainer: {
    paddingVertical: 4,
    paddingLeft: 10,
  },
  priceContainer: {
    paddingVertical: 4,
    borderRadius: BORDER_RADIUS,
  },
  heartContainer: {
    position: 'absolute',
    right: 6,
    top: 6,
    backgroundColor: COLORS.white,
    borderRadius: 100,
    padding: 4,
  },
  heart: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
});

export default observer(ProductItemView);
