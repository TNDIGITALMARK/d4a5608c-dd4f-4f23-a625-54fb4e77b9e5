// ============================================
// RESTAURANT APP TYPE DEFINITIONS
// ============================================

export interface Restaurant {
  id: string;
  name: string;
  cuisine: string;
  rating: number;
  deliveryTime: string;
  image: string;
  description: string;
  featured: boolean;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  restaurantId: string;
}

export interface CartItem {
  menuItem: MenuItem;
  quantity: number;
  restaurantId: string;
}

export interface Order {
  id: string;
  restaurantId: string;
  restaurantName: string;
  items: CartItem[];
  subtotal: number;
  tax: number;
  deliveryFee: number;
  total: number;
  status: 'preparing' | 'ready' | 'delivering' | 'delivered';
  estimatedTime: string;
  deliveryAddress: string;
}

export interface UserAddress {
  id: string;
  label: string;
  address: string;
  isDefault: boolean;
}
