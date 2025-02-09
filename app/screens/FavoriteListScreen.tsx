import React from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import {Product} from '../types';
import {useStore} from '../stores/StoreContext.tsx';
import {observer} from 'mobx-react';
import COLORS from '../styles/colors.ts';
import {SafeAreaView} from 'react-native-safe-area-context';
import ProductCard from '../components/ProductItemView.tsx';
import ScreenBg from '../components/ScreenBg.tsx';
import MyHeader from '../components/MyHeader.tsx';

interface FavoriteListScreenProps {
  navigation: any;
}

const FavoriteListScreen: React.FC<FavoriteListScreenProps> = props => {
  const {productStore} = useStore();
  const {favorites, products} = productStore;

  const favoriteProducts = products.filter(product =>
    favorites.includes(product.id),
  );

  const renderItem = ({item}: {item: Product}) => <ProductCard item={item} />;

  return (
    <ScreenBg>
      <SafeAreaView edges={['left', 'right']} style={styles.mainContainer}>
        <MyHeader showBack title={'Favourites'} />
        <FlatList
          data={favoriteProducts}
          numColumns={2}
          keyExtractor={item => item.id.toString()}
          renderItem={renderItem}
          contentContainerStyle={styles.container}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Image
                source={require('../assets/white_heart.png')}
                style={styles.emptyIcon}
              />
              <Text style={styles.emptyText}>There's nothing here yet..</Text>
            </View>
          }
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
    paddingTop: 16,
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
  emptyContainer: {
    backgroundColor: COLORS.primary,
    borderRadius: 16,
    alignItems: 'center',
    padding: 60,
    marginTop: 100,
    marginHorizontal: 20,
  },
  emptyIcon: {
    width: 124,
    height: 124,
    resizeMode: 'contain',
  },
  emptyText: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: 800,
    textAlign: 'center',
  },
});

export default observer(FavoriteListScreen);
