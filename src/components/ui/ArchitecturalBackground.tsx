'use client';

import Image from 'next/image';
import { memo } from 'react';

interface ArchitecturalBackgroundProps {
  startIndex: number;
  count: number;
  opacity?: number;
}

// Memoize the component to prevent unnecessary re-renders
const ArchitecturalBackground = memo(function ArchitecturalBackground({ 
  startIndex, 
  count, 
  opacity = 0.25 
}: ArchitecturalBackgroundProps) {
  // Pre-define all image paths to avoid runtime calculations
  const imagePaths = {
    1: '/images/Plane_Architechural_drawings/Plane1.png',
    2: '/images/Plane_Architechural_drawings/Plane2.png',
    3: '/images/Plane_Architechural_drawings/plane3.png',
    4: '/images/Plane_Architechural_drawings/plane4.png',
    5: '/images/Plane_Architechural_drawings/plane5.png',
    6: '/images/Plane_Architechural_drawings/Plane6.png',
    7: '/images/Plane_Architechural_drawings/plane7.png',
    8: '/images/Plane_Architechural_drawings/plane8.png',
    9: '/images/Plane_Architechural_drawings/plane9.png',
    10: '/images/Plane_Architechural_drawings/Plane10.png',
    11: '/images/Plane_Architechural_drawings/plane11.png',
    12: '/images/Plane_Architechural_drawings/plane12.png',
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none mix-blend-soft-light">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 w-full h-full p-8">
        {Array.from({ length: count }).map((_, index) => {
          const imageNumber = startIndex + index;
          // Ensure we don't try to access non-existent images
          const imagePath = imagePaths[imageNumber as keyof typeof imagePaths] || imagePaths[1];
          
          return (
            <div
              key={imageNumber}
              className="relative w-full aspect-[16/9] transform hover:scale-105 transition-transform duration-500"
              style={{ 
                opacity,
                filter: 'brightness(1.2) contrast(1.1)',
                boxShadow: 'inset 0 0 20px rgba(255, 255, 255, 0.1)'
              }}
            >
              <Image
                src={imagePath}
                alt={`Architectural Drawing ${imageNumber}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 33vw" // Fixed sizes attribute
                priority={index < 2} // Reduced priority images for better performance
                loading={index < 2 ? 'eager' : 'lazy'} // Explicit lazy loading for non-priority images
              />
            </div>
          );
        })}
      </div>
    </div>
  );
});

export default ArchitecturalBackground; 