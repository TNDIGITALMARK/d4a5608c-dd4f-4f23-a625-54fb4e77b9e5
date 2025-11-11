// ============================================
// MENU ITEM CARD COMPONENT
// For displaying individual menu items with add button
// ============================================

'use client';

import Image from 'next/image';
import { MenuItem } from '@/lib/types';
import { Plus } from 'lucide-react';

interface MenuItemCardProps {
  item: MenuItem;
  onAdd?: (item: MenuItem) => void;
}

export function MenuItemCard({ item, onAdd }: MenuItemCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200">
      {/* Image Section */}
      <div className="relative h-40 w-full overflow-hidden">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <div className="flex-1">
            <h4 className="font-semibold text-base text-gray-900 mb-1">
              {item.name}
            </h4>
            <p className="text-sm text-gray-500 line-clamp-2">
              {item.description}
            </p>
          </div>
        </div>

        {/* Price and Add Button */}
        <div className="flex items-center justify-between mt-3">
          <span className="text-lg font-bold text-gray-900">
            ${item.price.toFixed(2)}
          </span>
          <button
            onClick={() => onAdd?.(item)}
            className="bg-orange-500 hover:bg-orange-600 text-white rounded-lg p-2 transition-colors duration-200"
            aria-label={`Add ${item.name} to cart`}
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
