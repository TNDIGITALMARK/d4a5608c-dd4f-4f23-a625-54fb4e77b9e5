// ============================================
// MOCK DATA FOR RESTAURANT APP
// Matching MVP Specification
// ============================================

import { Restaurant, MenuItem, UserAddress } from './types';

export const mockRestaurants: Restaurant[] = [
  {
    id: 'marios_italian_kitchen',
    name: "Mario's Italian Kitchen",
    cuisine: 'Italian',
    rating: 4.8,
    deliveryTime: '25-35 min',
    image: '/generated/restaurant-italian.jpg',
    description: 'Authentic Italian cuisine with fresh pasta and wood-fired pizza',
    featured: true,
  },
  {
    id: 'spice_garden_thai',
    name: 'Spice Garden Thai',
    cuisine: 'Thai',
    rating: 4.6,
    deliveryTime: '20-30 min',
    image: '/generated/restaurant-thai.jpg',
    description: 'Traditional Thai dishes with authentic spices and fresh ingredients',
    featured: false,
  },
  {
    id: 'burger_barn_express',
    name: 'Burger Barn Express',
    cuisine: 'American',
    rating: 4.4,
    deliveryTime: '15-25 min',
    image: '/generated/hero-food.jpg',
    description: 'Gourmet burgers and classic American comfort food',
    featured: false,
  },
  {
    id: 'fresh_salad_co',
    name: 'Fresh Salad Co',
    cuisine: 'Healthy',
    rating: 4.7,
    deliveryTime: '10-20 min',
    image: '/generated/restaurant-salad.jpg',
    description: 'Fresh, healthy salads and bowls made to order',
    featured: false,
  },
];

export const mockMenuItems: MenuItem[] = [
  // Mario's Italian Kitchen Menu
  {
    id: 'margherita_pizza',
    name: 'Margherita Pizza',
    description: 'Fresh mozzarella, basil, and San Marzano tomato sauce on wood-fired crust',
    price: 16.99,
    image: '/generated/pizza-category.jpg',
    category: 'Pizza',
    restaurantId: 'marios_italian_kitchen',
  },
  {
    id: 'chicken_alfredo_pasta',
    name: 'Chicken Alfredo Pasta',
    description: 'Grilled chicken breast with creamy Alfredo sauce over fettuccine',
    price: 18.99,
    image: '/generated/restaurant-italian.jpg',
    category: 'Pasta',
    restaurantId: 'marios_italian_kitchen',
  },
  {
    id: 'caesar_salad',
    name: 'Caesar Salad',
    description: 'Crisp romaine lettuce, parmesan cheese, croutons, and Caesar dressing',
    price: 12.99,
    image: '/generated/restaurant-salad.jpg',
    category: 'Salads',
    restaurantId: 'marios_italian_kitchen',
  },
  {
    id: 'tiramisu_dessert',
    name: 'Tiramisu',
    description: 'Classic Italian dessert with coffee-soaked ladyfingers and mascarpone',
    price: 7.99,
    image: '/generated/dessert-category.jpg',
    category: 'Desserts',
    restaurantId: 'marios_italian_kitchen',
  },

  // Spice Garden Thai Menu
  {
    id: 'pad_thai',
    name: 'Pad Thai',
    description: 'Stir-fried rice noodles with shrimp, tofu, peanuts, and tamarind sauce',
    price: 14.99,
    image: '/generated/restaurant-thai.jpg',
    category: 'Noodles',
    restaurantId: 'spice_garden_thai',
  },
  {
    id: 'green_curry',
    name: 'Green Curry',
    description: 'Spicy coconut curry with bamboo shoots, Thai basil, and your choice of protein',
    price: 15.99,
    image: '/generated/restaurant-thai.jpg',
    category: 'Curries',
    restaurantId: 'spice_garden_thai',
  },

  // Burger Barn Express Menu
  {
    id: 'classic_burger',
    name: 'Classic Burger',
    description: 'Angus beef patty with lettuce, tomato, onion, pickles, and special sauce',
    price: 13.99,
    image: '/generated/burger-category.jpg',
    category: 'Burgers',
    restaurantId: 'burger_barn_express',
  },
  {
    id: 'bacon_cheeseburger',
    name: 'Bacon Cheeseburger',
    description: 'Double beef patty, crispy bacon, cheddar cheese, and BBQ sauce',
    price: 16.99,
    image: '/generated/hero-food.jpg',
    category: 'Burgers',
    restaurantId: 'burger_barn_express',
  },

  // Fresh Salad Co Menu
  {
    id: 'mediterranean_bowl',
    name: 'Mediterranean Bowl',
    description: 'Mixed greens, feta cheese, olives, cucumber, tomatoes, and tahini dressing',
    price: 14.99,
    image: '/generated/restaurant-salad.jpg',
    category: 'Bowls',
    restaurantId: 'fresh_salad_co',
  },
  {
    id: 'protein_power_bowl',
    name: 'Protein Power Bowl',
    description: 'Grilled chicken, quinoa, avocado, cherry tomatoes, and lemon vinaigrette',
    price: 15.99,
    image: '/generated/restaurant-salad.jpg',
    category: 'Bowls',
    restaurantId: 'fresh_salad_co',
  },
];

export const mockUserAddresses: UserAddress[] = [
  {
    id: '1',
    label: 'Home',
    address: '123 Main Street, Apt 4B, New York, NY 10001',
    isDefault: true,
  },
  {
    id: '2',
    label: 'Work',
    address: '456 Business Plaza, Suite 200, New York, NY 10002',
    isDefault: false,
  },
];

// Helper function to get menu items for a restaurant
export function getMenuItemsByRestaurant(restaurantId: string): MenuItem[] {
  return mockMenuItems.filter((item) => item.restaurantId === restaurantId);
}

// Helper function to get restaurant by ID
export function getRestaurantById(id: string): Restaurant | undefined {
  return mockRestaurants.find((restaurant) => restaurant.id === id);
}

// Helper function to get menu item by ID
export function getMenuItemById(id: string): MenuItem | undefined {
  return mockMenuItems.filter((item) => item.id === id)[0];
}
