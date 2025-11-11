// ============================================
// PAGE 1: RESTAURANT DISCOVERY DASHBOARD
// Main landing page with hero, categories, and restaurant listings
// ============================================

import Image from 'next/image';
import { mockRestaurants } from '@/lib/data';
import { RestaurantCard } from '@/components/restaurant-card';
import { CategoryCard } from '@/components/category-card';
import { Truck, CreditCard, ShoppingBag } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default function HomePage() {
  const featuredRestaurants = mockRestaurants.filter((r) => r.featured);
  const allRestaurants = mockRestaurants;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Column - Text Content */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Your Culinary Journey, Delivered
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                Explore local favorites near you and savor every bite.
              </p>

              <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg mb-6">
                Order Now
              </button>

              {/* Feature Icons */}
              <div className="flex gap-6 mt-8">
                <div className="flex flex-col items-center">
                  <div className="bg-gray-100 p-3 rounded-full mb-2">
                    <ShoppingBag className="w-6 h-6 text-gray-700" />
                  </div>
                  <span className="text-sm text-gray-600 text-center">
                    Browse
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-gray-100 p-3 rounded-full mb-2">
                    <CreditCard className="w-6 h-6 text-gray-700" />
                  </div>
                  <span className="text-sm text-gray-600 text-center">
                    Pay Securely
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-gray-100 p-3 rounded-full mb-2">
                    <Truck className="w-6 h-6 text-gray-700" />
                  </div>
                  <span className="text-sm text-gray-600 text-center">
                    Fast Delivery
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column - Hero Image */}
            <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/generated/hero-food.jpg"
                alt="Delicious food"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Popular Categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <CategoryCard
              title="Pizza"
              subtitle="Food Delivery"
              image="/generated/pizza-category.jpg"
              rating={4}
            />
            <CategoryCard
              title="Burgers"
              subtitle="Sed Delivery"
              image="/generated/burger-category.jpg"
              rating={5}
            />
            <CategoryCard
              title="Desserts"
              subtitle="Pay Guest"
              image="/generated/dessert-category.jpg"
              rating={4}
            />
            <CategoryCard
              title="Drinks"
              subtitle="Refreshments"
              image="/generated/drinks-category.jpg"
              rating={5}
            />
          </div>
        </div>
      </section>

      {/* Featured Restaurants */}
      {featuredRestaurants.length > 0 && (
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            {/* Promo Banner */}
            <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black rounded-xl p-6 mb-8 shadow-md">
              <p className="text-lg font-semibold">
                ⚡ Get 15% Off on your first order using code: <span className="font-bold">FLAVOR15</span>
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Featured Restaurants
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredRestaurants.map((restaurant) => (
                <RestaurantCard key={restaurant.id} restaurant={restaurant} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Restaurants */}
      <section id="restaurants" className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Restaurants Near You
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {allRestaurants.map((restaurant) => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
          </div>
        </div>
      </section>

      {/* App Promotion Section */}
      <section className="py-16 bg-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Taste the Difference?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Get the best food deals with
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200">
              Download Our App
            </button>
          </div>
          <div className="flex justify-center gap-4 mt-6">
            <span className="text-gray-400">App Store</span>
            <span className="text-gray-400">•</span>
            <span className="text-gray-400">Google Play</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-8 border-t">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">About Us</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Our Story</li>
                <li>Career</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Services</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Careers</li>
                <li>Booking</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Services</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Food Delivery</li>
                <li>Catering</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Contact</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Email: info@flavorfinds.com</li>
                <li>FAQs</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}