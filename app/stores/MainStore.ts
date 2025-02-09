import {makeAutoObservable} from 'mobx';
import {Filter, Product} from '../types';
import {filterData, products as mockProducts} from '../data/data';
import {makePersistable} from 'mobx-persist-store';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface CartItem extends Product {
  quantity: number;
}

class MainStore {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  activeFilter: Filter = filterData[0];
  cart: CartItem[] = [];
  error: string | null = null;
  selectedItem: {
    image: string;
    price: number;
    name: string;
    id: number;
    category: string;
  } = {category: '', id: 0, image: '', name: '', price: 0};
  search: string = '';
  loyaltyList: {date: string}[] = [];
  favorites: number[] = [];
  orderHistory: {items: CartItem[]; date: string}[] = [];

  constructor() {
    makeAutoObservable(this);

    makePersistable(this, {
      name: 'ProductStore',
      properties: ['loyaltyList', 'favorites', 'orderHistory'],
      storage: AsyncStorage,
    });
  }

  loadProducts = () => {
    try {
      this.products = mockProducts;
      this.filteredProducts = mockProducts;
      this.applyFilter();
    } catch (error: any) {}
  };

  setFilter = (filter: Filter) => {
    this.activeFilter = filter;
    this.applyFilter();
  };

  setSelectedItem = (item: Product) => {
    this.selectedItem = item;
  };

  setSearch = (query: string) => {
    this.search = query;
    this.applyFilterAndSearch();
  };

  private applyFilterAndSearch = () => {
    let filtered = this.products;

    // Применяем фильтр по категории
    if (this.activeFilter.name.toLowerCase() !== 'all') {
      filtered = filtered.filter(
        product =>
          product.category.toLowerCase() ===
          this.activeFilter.name.toLowerCase(),
      );
    }

    // Применяем поиск
    if (this.search.trim()) {
      const searchQuery = this.search.toLowerCase().trim();
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery),
      );
    }

    this.filteredProducts = filtered;
  };

  private applyFilter = () => {
    this.applyFilterAndSearch();
  };

  handlePlus = (product: Product) => {
    const existingItem = this.cart.find(item => item.id === product.id);

    if (existingItem) {
      existingItem.quantity += 1;
      this.cart = [...this.cart];
    } else {
      this.cart.push({...product, quantity: 1});
    }
  };

  handleMinus = (productId: number) => {
    const existingItem = this.cart.find(item => item.id === productId);

    if (existingItem) {
      if (existingItem.quantity > 1) {
        existingItem.quantity -= 1;
        this.cart = [...this.cart];
      } else {
        this.removeFromCart(productId);
      }
    }
  };

  addLoyalty = (code: string) => {
    if (code === 'bonus') {
      const now = new Date();
      const formattedDate = `${now.toLocaleDateString('en-US', {
        day: '2-digit',
        month: 'long',
      })} | ${now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
      })}`;

      this.loyaltyList.push({
        date: formattedDate,
      });
      this.error = null;
      return true;
    } else {
      this.error = 'Invalid code';
    }
    return undefined;
  };

  clearLoyalty = () => {
    this.loyaltyList = [];
  };

  removeFromCart = (productId: number) => {
    this.cart = this.cart.filter(item => item.id !== productId);
  };

  clearCart = () => {
    this.cart = [];
  };

  get cartTotal() {
    return this.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  getItemQuantity = (productId: number): number => {
    const item = this.cart.find(item => item.id === productId);
    return item ? item.quantity : 0;
  };

  get totalItems() {
    return this.cart.reduce((sum, item) => sum + item.quantity, 0);
  }

  toggleFavorite = (productId: number) => {
    if (this.favorites.includes(productId)) {
      this.favorites = this.favorites.filter(id => id !== productId);
    } else {
      this.favorites.push(productId);
    }
  };

  isFavorite = (productId: number): boolean => {
    return this.favorites.includes(productId);
  };

  handleBuy = (productId: number) => {
    const item = this.cart.find(item => item.id === productId);
    if (!item) return;

    // Добавляем в историю заказов
    const now = new Date();
    const formattedDate = `${now.toLocaleDateString('en-US', {
      day: '2-digit',
      month: 'long',
    })} | ${now.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    })}`;

    this.orderHistory.push({
      items: [item],
      date: formattedDate,
    });

    // Удаляем купленный товар из корзины
    this.removeFromCart(productId);
  };
}

export default MainStore;
