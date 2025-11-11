// ============================================
// CATEGORY CARD COMPONENT
// Circular food images with category labels
// ============================================

import Image from 'next/image';
import Link from 'next/link';
import { Star } from 'lucide-react';

interface CategoryCardProps {
  title: string;
  subtitle: string;
  image: string;
  rating?: number;
  href?: string;
}

export function CategoryCard({ title, subtitle, image, rating, href = '#' }: CategoryCardProps) {
  return (
    <Link href={href}>
      <div className="flex flex-col items-center group cursor-pointer">
        {/* Circular Image */}
        <div className="relative w-32 h-32 mb-3 overflow-hidden rounded-full shadow-md group-hover:shadow-lg transition-shadow duration-200">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>

        {/* Title */}
        <h3 className="font-semibold text-base text-gray-900 mb-1">
          {title}
        </h3>

        {/* Subtitle */}
        <p className="text-sm text-gray-500">{subtitle}</p>

        {/* Optional Rating */}
        {rating && (
          <div className="flex items-center gap-1 mt-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${
                  i < Math.floor(rating)
                    ? 'fill-yellow-400 text-yellow-400'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}
