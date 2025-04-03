'use client';

export default function FlyingPlane() {
  return (
    <div className="flex flex-col items-center justify-center mb-12">
      {/* Plane sliding in from right */}
      <div 
        className="animate-slide-in-right mb-8"
        style={{
          inline-size: '280px',
          height: '160px',
          position: 'relative'
        }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 24 24"
          className="text-white drop-shadow-2xl"
          style={{ transform: 'rotate(-5deg)' }}
        >
          <path
            d="M22 16.27L21.54 16.95C21.19 17.6 20.44 18 19.67 18H17V16C17 15.45 16.55 15 16 15H13V13H14C14.55 13 15 12.55 15 12V10H16C17.1 10 18 9.1 18 8V5.27C19.81 5.74 21 7.34 21 9.18V12.18L22 13.18V16.27M10 15H7C6.45 15 6 15.45 6 16V18H3.33C2.56 18 1.81 17.6 1.46 16.95L1 16.27V13.18L2 12.18V9.18C2 7.34 3.19 5.74 5 5.27V8C5 9.1 5.9 10 7 10H8V12C8 12.55 8.45 13 9 13H10V15M12 4C13.1 4 14 4.9 14 6V8H9V6C9 4.9 9.9 4 11 4H12Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* Banner sliding in from left */}
      <div className="animate-slide-in-left">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#4da8ff] font-michroma tracking-wider drop-shadow-lg">
            CG Model Tek
          </h2>
          <div className="h-0.5 w-48 bg-[#4da8ff] mx-auto mt-2 rounded-full drop-shadow-lg opacity-90"></div>
        </div>
      </div>
    </div>
  );
} 