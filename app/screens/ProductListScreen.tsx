import React, {useEffect} from 'react';
import {FlatList, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {Product} from '../types';
import {useStore} from '../stores/StoreContext.tsx';
import {observer} from 'mobx-react';
import COLORS from '../styles/colors.ts';
import {SafeAreaView} from 'react-native-safe-area-context';
import ProductCard from '../components/ProductItemView.tsx';
import ScreenBg from '../components/ScreenBg.tsx';
import Filter from '../components/Filter.tsx';
import MyHeader from '../components/MyHeader.tsx';

interface HomeScreenProps {
  navigation: any;
}

const ProductListScreen: React.FC<HomeScreenProps> = props => {
  const {productStore} = useStore();
  const {loadProducts, filteredProducts, activeFilter, setFilter, cart} =
    productStore;

  const isCartEmpty = cart.length === 0;

  function navToFavorites() {
    props.navigation.navigate('Favorites');
  }

  const navToCart = () => {
    props.navigation.navigate('Cart');
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const renderItem = ({item}: {item: Product}) => <ProductCard item={item} />;

  function navToBonuses() {
    props.navigation.navigate('Bonuses');
  }

  const RightItem = () => {
    return (
      <View style={styles.rightItemContainer}>
        <Pressable style={styles.iconContainer} onPress={navToFavorites}>
          <Image style={styles.icon} source={require('../assets/heart.png')} />
        </Pressable>
        <Pressable style={styles.iconContainer} onPress={navToCart}>
          <Image
            style={{width: 22, height: 22, resizeMode: 'contain'}}
            source={require('../assets/trash.png')}
          />
          {!isCartEmpty && (
            <View style={styles.badgeContainer}>
              <Text style={styles.badge}>{cart.length}</Text>
            </View>
          )}
        </Pressable>
        <Pressable
          style={[styles.iconContainer, {marginRight: 8}]}
          onPress={navToBonuses}>
          <Image style={styles.icon} source={require('../assets/bonus.png')} />
        </Pressable>
      </View>
    );
  };

  return (
    <ScreenBg>
      <SafeAreaView edges={['left', 'right']} style={styles.mainContainer}>
        <MyHeader title={'Shop'} rightItem={<RightItem />} />
        <Filter activeFilter={activeFilter} onSelect={setFilter} />
        <FlatList
          data={filteredProducts}
          numColumns={2}
          keyExtractor={item => item.id.toString()}
          renderItem={renderItem}
          contentContainerStyle={styles.container}
          showsVerticalScrollIndicator={false}
        />
      </SafeAreaView>
    </ScreenBg>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: 70,
  },
  container: {
    paddingTop: 30,
    paddingBottom: 400,
  },
  image: {
    width: '100%',
    height: 140,
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingBottom: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  price: {
    color: 'gray',
    marginVertical: 5,
  },
  button: {
    backgroundColor: '#5C0DAC',
    padding: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: '#FFF',
    textAlign: 'center',
  },
  columnContainer: {
    justifyContent: 'space-evenly',
  },
  filterText: {
    fontSize: 16,
    lineHeight: 16,
    color: COLORS.white,
    fontWeight: '600',
    margin: 20,
  },
  headerImgContainer: {
    paddingTop: 10,
    paddingHorizontal: 20,
  },
  cartBtnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  cartBtnText: {
    color: COLORS.white,
    fontWeight: '700',
    marginLeft: 6,
  },
  cartBtnWrapContainer: {
    marginRight: 8,
  },
  floatingButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  cartIcon: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  iconContainer: {
    backgroundColor: COLORS.secondary,
    borderRadius: 65,
    padding: 6,
    marginRight: 6,
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  rightItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  badgeContainer: {
    position: 'absolute',
    bottom: -2,
    right: -4,
    borderRadius: 60,
    backgroundColor: COLORS.white,
    padding: 1,
    paddingHorizontal: 4,
  },
  badge: {
    color: COLORS.black,
    fontSize: 10,
  },
});

export default observer(ProductListScreen);
