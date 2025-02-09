import {Event, Filter, Product} from '../types';

export const products: Product[] = [
  // Breakfasts
  {
    id: 1,
    name: 'Smoothie',
    image: 'https://object.pscloud.io/cms/cms/Uploads/image_7FDAnH.png',
    price: 5.0,
    category: 'Breakfasts',
    description: 'with berries',
  },
  {
    id: 2,
    name: 'Fresh Orange Juice',
    image:
      'https://avatars.mds.yandex.net/i?id=b8dff3e8dea1c9f9d8689c1c05d3b4d4aad03f89-10346227-images-thumbs&n=13',
    price: 4.0,
    category: 'Breakfasts',
    description: 'with orange',
  },
  {
    id: 3,
    name: 'Green Tea',
    image:
      'https://avatars.mds.yandex.net/i?id=42870a2945afc1ff6e40cebe99881bc7_l-5879090-images-thumbs&n=13',
    price: 3.0,
    category: 'Breakfasts',
    description: 'with jasmine',
  },
  {
    id: 4,
    name: 'Milkshake',
    image:
      'https://i.pinimg.com/736x/fe/4d/ac/fe4dace9e76654cda833479dde0429c4.jpg',
    price: 5.5,
    category: 'Breakfasts',
    description: 'with vanilla',
  },

  // Main Courses
  {
    id: 5,
    name: 'Grilled Salmon',
    image: 'https://i.ytimg.com/vi/dHMZ5tXWI6s/maxresdefault.jpg',
    price: 18.0,
    category: 'Main Courses',
    description: 'with salmon',
  },
  {
    id: 6,
    name: 'Steak with Fries',
    image: 'https://oliveresto.com/images/slides/3.jpeg',
    price: 20.0,
    category: 'Main Courses',
    description: 'with beef',
  },
  {
    id: 7,
    name: 'Chicken Alfredo Pasta',
    image:
      'https://i.pinimg.com/originals/bd/5a/29/bd5a2901225d822ece33cabd7f5eade2.jpg',
    price: 15.5,
    category: 'Main Courses',
    description: 'with sauce',
  },
  {
    id: 8,
    name: 'BBQ Ribs',
    image:
      'https://simply-delicious-food.com/wp-content/uploads/2020/06/Sticky-BBQ-ribs-3.jpg',
    price: 22.0,
    category: 'Main Courses',
    description: 'with BBQ sauce',
  },

  // Salads
  {
    id: 9,
    name: 'Caesar Salad',
    image:
      'https://avatars.mds.yandex.net/i?id=a63160b1ebcc920c855e2dc1272cfaa74deb54a5-10451794-images-thumbs&n=13',
    price: 10.0,
    category: 'Salads',
    description: 'with parmesan',
  },
  {
    id: 10,
    name: 'Greek Salad',
    image:
      'https://avatars.mds.yandex.net/get-altay/7186075/2a0000018771c556fb65cdf728ab072414a3/XXL_height',
    price: 9.0,
    category: 'Salads',
    description: 'with olives',
  },
  {
    id: 11,
    name: 'Quinoa Bowl',
    image:
      'https://i.pinimg.com/736x/a1/84/63/a1846358441b1addf4b3bbc75b435ab8--cooking-light-recipes-entree-recipes.jpg',
    price: 11.0,
    category: 'Salads',
    description: 'with avocado',
  },
  {
    id: 12,
    name: 'Caprese Salad',
    image: 'https://cdn.metro-cc.ru/ru/ru_pim_151860001001_03.png',
    price: 8.5,
    category: 'Salads',
    description: 'with mozzarella',
  },

  // Appetizers
  {
    id: 13,
    name: 'Mozzarella Sticks',
    image:
      'https://avatars.mds.yandex.net/i?id=4e57e1fa29d05186bc0db7951bc8aace7b8e0e0a-10843465-images-thumbs&n=13',
    price: 8.0,
    category: 'Appetizers',
    description: 'with marinara sauce',
  },
  {
    id: 14,
    name: 'Chicken Wings',
    image:
      'https://i.pinimg.com/736x/44/1d/79/441d79239b576b0ecb0b91d194faae64.jpg',
    price: 12.0,
    category: 'Appetizers',
    description: 'with buffalo sauce',
  },
  {
    id: 15,
    name: 'Garlic Bread',
    image:
      'https://avatars.mds.yandex.net/i?id=5657dc1513ea6dd880f2f5e953fd898a_l-5340698-images-thumbs&n=13',
    price: 6.0,
    category: 'Appetizers',
    description: 'with garlic butter',
  },
  {
    id: 16,
    name: 'Stuffed Jalapenos',
    image:
      'https://avatars.mds.yandex.net/i?id=63c223420fb36e0de7dffb45e76a5360a4435b0a-8186099-images-thumbs&n=13',
    price: 9.0,
    category: 'Appetizers',
    description: 'with cheese filling',
  },

  // Desserts
  {
    id: 17,
    name: 'Chocolate Cake',
    image:
      'https://avatars.mds.yandex.net/i?id=8aebc76462ff9bcce571e9becbe8d458_l-5342984-images-thumbs&n=13',
    price: 7.0,
    category: 'Desserts',
    description: 'with chocolate',
  },
  {
    id: 18,
    name: 'Apple Pie',
    image:
      'https://media.vprok.ru/recipe/x956/zi/oi/zeclnlxh7kqoo7r6oqlnj25ajrywoizi.jpeg',
    price: 5.0,
    category: 'Desserts',
    description: 'with cinnamon',
  },
  {
    id: 19,
    name: 'Cheesecake',
    image:
      'https://i.pinimg.com/736x/71/f9/be/71f9be2df19d9096e85042f7a18d21ec.jpg',
    price: 6.5,
    category: 'Desserts',
    description: 'with berries',
  },
  {
    id: 20,
    name: 'Ice Cream Sundae',
    image:
      'https://i.pinimg.com/736x/31/cc/a9/31cca9f311dcf38722983b1d5acc2659.jpg',
    price: 4.5,
    category: 'Desserts',
    description: 'with toppings',
  },
];

export const filterData: Filter[] = [
  {
    id: 1,
    name: 'All',
  },
  {
    id: 2,
    name: 'Breakfasts',
  },
  {
    id: 3,
    name: 'Main Courses',
  },
  {
    id: 4,
    name: 'Salads',
  },
  {
    id: 5,
    name: 'Appetizers',
  },
  {
    id: 6,
    name: 'Desserts',
  },
];

export const eventData: Event[] = [
  {
    id: 1,
    date: 'Saturday, April 20, 2024',
    time: '7:00 PM - 10:00 PM',
    title: 'Flavors of Asia Night',
    desc: 'Experience the rich and diverse culinary heritage of Asia with a specially curated menu featuring dishes from Japan, Thailand, China, and India. Indulge in sushi platters, spicy curries, dim sum, and more. To enhance the evening, enjoy live traditional music performances and a display of cultural artifacts. This is a one-night-only opportunity to immerse yourself in the vibrant flavors and traditions of Asia',
    image: require('../assets/event1.png'),
  },
  {
    id: 2,
    title: 'Wine and Poetry Evening',
    date: 'Friday, May 5, 2024',
    time: '6:30 PM - 9:30 PM',
    desc: 'Enjoy a sophisticated evening of fine wines and spoken word performances. This event combines the art of wine tasting with the beauty of poetry recitations by renowned local poets. Guests will sample wines from around the world paired with gourmet canapés, while relaxing in a cozy and intimate setting. Perfect for lovers of art, literature, and fine dining',
    image: require('../assets/event2.png'),
  },
  {
    id: 3,
    title: 'Summer Barbecue Festival',
    date: 'Sunday, June 9, 2024',
    time: '12:00 PM - 4:00 PM',
    desc: 'Kick off the summer with a lively barbecue festival featuring grilled meats, seafood, and vegetarian options. Enjoy a variety of marinades and sauces, all prepared by our skilled chefs. The event will also feature live music, outdoor seating, and fun activities for kids. It’s the perfect way to spend a sunny afternoon with friends and family',
    image: require('../assets/event3.png'),
  },
];
