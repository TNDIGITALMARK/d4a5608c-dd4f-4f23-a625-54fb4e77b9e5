// ============================================
// PAGE 2: RESTAURANT DETAIL AND MENU VIEW
// Detailed restaurant page with full menu
// ============================================

'use client';

import { use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getRestaurantById, getMenuItemsByRestaurant } from '@/lib/data';
import { MenuItemCard } from '@/components/menu-item-card';
import { useCart } from '@/lib/cart-context';
import { Star, Clock, ArrowLeft, MapPin } from 'lucide-react';
import { MenuItem } from '@/lib/types';
import { useRouter } from 'next/navigation';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function RestaurantDetailPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const router = useRouter();
  const { addToCart } = useCart();
  const restaurant = getRestaurantById(resolvedParams.id);
  const menuItems = getMenuItemsByRestaurant(resolvedParams.id);

  if (!restaurant) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Restaurant Not Found
          </h1>
          <Link
            href="/"
            className="text-orange-500 hover:text-orange-600 font-medium"
          >
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  // Group menu items by category
  const categories = Array.from(
    new Set(menuItems.map((item) => item.category))
  );

  const handleAddToCart = (item: MenuItem) => {
    addToCart(item);
    // Show a success toast or feedback (optional)
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Button */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back</span>
          </button>
        </div>
      </div>

      {/* Restaurant Header */}
      <section className="bg-white py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Restaurant Image */}
            <div className="md:col-span-1">
              <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={restaurant.image}
                  alt={restaurant.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Restaurant Info */}
            <div className="md:col-span-2">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                {restaurant.name}
              </h1>
              <p className="text-lg text-gray-600 mb-4">
                {restaurant.description}
              </p>

              {/* Restaurant Metrics */}
              <div className="flex flex-wrap items-center gap-6 mb-6">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold text-gray-900">
                    {restaurant.rating}
                  </span>
                  <span className="text-gray-500">(500+ ratings)</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Clock className="w-5 h-5" />
                  <span>{restaurant.deliveryTime}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <MapPin className="w-5 h-5" />
                  <span>2.5 miles away</span>
                </div>
              </div>

              {/* Cuisine Tag */}
              <div className="inline-block bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium">
                {restaurant.cuisine} Cuisine
              </div>

              {/* Order Options */}
              <div className="flex gap-4 mt-6">
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 shadow-md">
                  Delivery
                </button>
                <button className="bg-white hover:bg-gray-50 text-gray-900 font-semibold px-8 py-3 rounded-lg border-2 border-gray-300 transition-colors duration-200">
                  Pickup
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Our Menu
          </h2>

          {/* Menu Items by Category */}
          <div className="space-y-12">
            {categories.map((category) => {
              const categoryItems = menuItems.filter(
                (item) => item.category === category
              );

              return (
                <div key={category}>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                    {category}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categoryItems.map((item) => (
                      <MenuItemCard
                        key={item.id}
                        item={item}
                        onAdd={handleAddToCart}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Floating Cart Button (Mobile) */}
      <Link
        href="/cart"
        className="md:hidden fixed bottom-6 right-6 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-4 rounded-full shadow-lg flex items-center gap-2 transition-colors duration-200"
      >
        View Cart
      </Link>
    </div>
  );
}
