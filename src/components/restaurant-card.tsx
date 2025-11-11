// ============================================
// RESTAURANT CARD COMPONENT
// Matches Design Reference - Category Cards
// ============================================

import Image from 'next/image';
import Link from 'next/link';
import { Restaurant } from '@/lib/types';
import { Star, Clock } from 'lucide-react';

interface RestaurantCardProps {
  restaurant: Restaurant;
}

export function RestaurantCard({ restaurant }: RestaurantCardProps) {
  return (
    <Link href={`/restaurant/${restaurant.id}`}>
      <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer group">
        {/* Image Section */}
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={restaurant.image}
            alt={restaurant.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {restaurant.featured && (
            <div className="absolute top-3 left-3 bg-yellow-400 text-black text-xs font-semibold px-3 py-1 rounded-full">
              Featured
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="p-4">
          <div className="flex items-start justify-between mb-2">
            <div className="flex-1">
              <h3 className="font-semibold text-lg text-gray-900 mb-1">
                {restaurant.name}
              </h3>
              <p className="text-sm text-gray-500">{restaurant.cuisine}</p>
            </div>
          </div>

          {/* Rating and Delivery Time */}
          <div className="flex items-center gap-4 mt-3">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium text-gray-900">
                {restaurant.rating}
              </span>
            </div>
            <div className="flex items-center gap-1 text-gray-500">
              <Clock className="w-4 h-4" />
              <span className="text-sm">{restaurant.deliveryTime}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
