// ============================================
// HEADER NAVIGATION COMPONENT
// Dark charcoal header with logo and navigation
// ============================================

'use client';

import Link from 'next/link';
import { ShoppingCart, Utensils } from 'lucide-react';
import { useCart } from '@/lib/cart-context';

export function Header() {
  const { cart } = useCart();
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="bg-[#2D2D2D] text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <Utensils className="w-6 h-6 text-orange-500" />
            <span>FlavorFinds</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-white hover:text-orange-500 transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              href="/#restaurants"
              className="text-white hover:text-orange-500 transition-colors font-medium"
            >
              Restaurants
            </Link>
            <Link
              href="/#menu"
              className="text-white hover:text-orange-500 transition-colors font-medium"
            >
              Menu
            </Link>
            <Link
              href="/#promotions"
              className="text-white hover:text-orange-500 transition-colors font-medium"
            >
              Promotions
            </Link>
            <Link
              href="/#about"
              className="text-white hover:text-orange-500 transition-colors font-medium"
            >
              About Us
            </Link>
          </nav>

          {/* Cart and Action Buttons */}
          <div className="flex items-center gap-4">
            <button className="hidden md:block bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200">
              Sign In
            </button>

            {/* Cart Button */}
            <Link
              href="/cart"
              className="relative p-2 hover:bg-gray-700 rounded-lg transition-colors"
            >
              <ShoppingCart className="w-6 h-6" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
