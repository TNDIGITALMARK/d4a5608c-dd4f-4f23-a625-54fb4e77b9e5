// ============================================
// PAGE 3: ORDER CONFIRMATION AND TRACKING
// Cart page with checkout and order tracking
// ============================================

'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCart } from '@/lib/cart-context';
import { ArrowLeft, Minus, Plus, Trash2, CreditCard, Truck, CheckCircle2 } from 'lucide-react';

export default function CartPage() {
  const router = useRouter();
  const { cart, updateQuantity, removeFromCart, clearCart, getCartTotal } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderStatus, setOrderStatus] = useState<'preparing' | 'ready' | 'delivering' | 'delivered'>('preparing');

  const subtotal = getCartTotal();
  const tax = subtotal * 0.08; // 8% tax
  const deliveryFee = 4.99;
  const total = subtotal + tax + deliveryFee;

  const handlePlaceOrder = () => {
    setOrderPlaced(true);
    // Simulate order status updates
    setTimeout(() => setOrderStatus('ready'), 3000);
    setTimeout(() => setOrderStatus('delivering'), 6000);
    setTimeout(() => setOrderStatus('delivered'), 9000);
  };

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          {/* Order Tracking */}
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="mb-6">
              <CheckCircle2 className="w-20 h-20 text-green-500 mx-auto" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Order Confirmed!
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Your order has been placed and is being prepared.
            </p>

            {/* Order Status Timeline */}
            <div className="space-y-6 mb-8">
              <div className={`flex items-center gap-4 p-4 rounded-lg ${orderStatus === 'preparing' ? 'bg-orange-50 border-2 border-orange-500' : 'bg-gray-50'}`}>
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${orderStatus === 'preparing' ? 'bg-orange-500 text-white' : 'bg-gray-300 text-gray-600'}`}>
                  1
                </div>
                <div className="text-left flex-1">
                  <h3 className="font-semibold text-gray-900">Preparing Your Order</h3>
                  <p className="text-sm text-gray-600">Restaurant is cooking your food</p>
                </div>
                {orderStatus !== 'preparing' && <CheckCircle2 className="w-6 h-6 text-green-500" />}
              </div>

              <div className={`flex items-center gap-4 p-4 rounded-lg ${orderStatus === 'ready' ? 'bg-orange-50 border-2 border-orange-500' : 'bg-gray-50'}`}>
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${['ready', 'delivering', 'delivered'].includes(orderStatus) ? 'bg-orange-500 text-white' : 'bg-gray-300 text-gray-600'}`}>
                  2
                </div>
                <div className="text-left flex-1">
                  <h3 className="font-semibold text-gray-900">Ready for Pickup</h3>
                  <p className="text-sm text-gray-600">Order is ready and waiting for driver</p>
                </div>
                {['delivering', 'delivered'].includes(orderStatus) && <CheckCircle2 className="w-6 h-6 text-green-500" />}
              </div>

              <div className={`flex items-center gap-4 p-4 rounded-lg ${orderStatus === 'delivering' ? 'bg-orange-50 border-2 border-orange-500' : 'bg-gray-50'}`}>
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${['delivering', 'delivered'].includes(orderStatus) ? 'bg-orange-500 text-white' : 'bg-gray-300 text-gray-600'}`}>
                  3
                </div>
                <div className="text-left flex-1">
                  <h3 className="font-semibold text-gray-900">Out for Delivery</h3>
                  <p className="text-sm text-gray-600">Driver is on the way to you</p>
                </div>
                {orderStatus === 'delivered' && <CheckCircle2 className="w-6 h-6 text-green-500" />}
              </div>

              <div className={`flex items-center gap-4 p-4 rounded-lg ${orderStatus === 'delivered' ? 'bg-green-50 border-2 border-green-500' : 'bg-gray-50'}`}>
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${orderStatus === 'delivered' ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-600'}`}>
                  4
                </div>
                <div className="text-left flex-1">
                  <h3 className="font-semibold text-gray-900">Delivered</h3>
                  <p className="text-sm text-gray-600">Enjoy your meal!</p>
                </div>
              </div>
            </div>

            {/* Estimated Time */}
            <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-6 mb-8">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Truck className="w-6 h-6 text-orange-600" />
                <span className="text-lg font-semibold text-gray-900">
                  Estimated Delivery Time
                </span>
              </div>
              <p className="text-3xl font-bold text-orange-600">25-35 min</p>
            </div>

            {/* Order Summary */}
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h3 className="font-semibold text-gray-900 mb-4">Order Summary</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-medium">${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Delivery Fee</span>
                  <span className="font-medium">${deliveryFee.toFixed(2)}</span>
                </div>
                <div className="border-t pt-2 flex justify-between">
                  <span className="font-semibold text-gray-900">Total</span>
                  <span className="font-bold text-orange-600 text-lg">${total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                clearCart();
                router.push('/');
              }}
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Your Cart is Empty
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Start adding some delicious food to your cart!
          </p>
          <Link
            href="/"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 inline-block"
          >
            Browse Restaurants
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-6"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">Continue Shopping</span>
        </button>

        <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Cart</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <div
                key={item.menuItem.id}
                className="bg-white rounded-xl shadow-sm p-6 flex gap-4"
              >
                {/* Item Image */}
                <div className="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src={item.menuItem.image}
                    alt={item.menuItem.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Item Details */}
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {item.menuItem.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-3 line-clamp-1">
                    {item.menuItem.description}
                  </p>
                  <p className="font-bold text-gray-900">
                    ${item.menuItem.price.toFixed(2)}
                  </p>
                </div>

                {/* Quantity Controls */}
                <div className="flex flex-col items-end justify-between">
                  <button
                    onClick={() => removeFromCart(item.menuItem.id)}
                    className="text-red-500 hover:text-red-600 transition-colors"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(item.menuItem.id, item.quantity - 1)}
                      className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-8 text-center font-semibold">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.menuItem.id, item.quantity + 1)}
                      className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Order Summary
              </h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Tax (8%)</span>
                  <span className="font-medium">${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Delivery Fee</span>
                  <span className="font-medium">${deliveryFee.toFixed(2)}</span>
                </div>
                <div className="border-t pt-3 flex justify-between">
                  <span className="font-bold text-gray-900 text-lg">Total</span>
                  <span className="font-bold text-orange-600 text-xl">
                    ${total.toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Delivery Address */}
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <h3 className="font-semibold text-gray-900 mb-2">Delivery Address</h3>
                <p className="text-sm text-gray-600">
                  123 Main Street, Apt 4B<br />
                  New York, NY 10001
                </p>
              </div>

              {/* Payment Method */}
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <h3 className="font-semibold text-gray-900 mb-2">Payment Method</h3>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <CreditCard className="w-4 h-4" />
                  <span>Credit Card •••• 4242</span>
                </div>
              </div>

              <button
                onClick={handlePlaceOrder}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
