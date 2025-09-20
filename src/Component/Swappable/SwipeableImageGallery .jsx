import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react'

const SwipeableImageGallery = ({ images = [], content }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [translateX, setTranslateX] = useState(0);
    const containerRef = useRef(null);

    

    const nextSlide = () => {
        if (currentIndex < images.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.clientX);
    };

    const handleTouchStart = (e) => {
        setIsDragging(true);
        setStartX(e.touches[0].clientX);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        const currentX = e.clientX;
        const diff = currentX - startX;
        setTranslateX(diff);
    };

    const handleTouchMove = (e) => {
        if (!isDragging) return;
        const currentX = e.touches[0].clientX;
        const diff = currentX - startX;
        setTranslateX(diff);
    };

    const handleDragEnd = () => {
        if (!isDragging) return;
        setIsDragging(false);

        const threshold = 100;

        if (translateX > threshold && currentIndex > 0) {
            prevSlide();
        } else if (translateX < -threshold && currentIndex < images.length - 1) {
            nextSlide();
        }

        setTranslateX(0);
    };

    useEffect(() => {
        const handleMouseUp = () => handleDragEnd();
        const handleTouchEnd = () => handleDragEnd();

        document.addEventListener('mouseup', handleMouseUp);
        document.addEventListener('touchend', handleTouchEnd);

        return () => {
            document.removeEventListener('mouseup', handleMouseUp);
            document.removeEventListener('touchend', handleTouchEnd);
        };
    }, [isDragging, translateX, currentIndex]);

    if (!images || images.length === 0) {
        return (
            <div className="text-center text-gray-400 p-10 bg-gray-900 rounded-xl">
                No images available.
            </div>
        );
    }


  return (
    <div className='w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <div className='bg-[#2d3748] mt-19 sm:mt-19 lg:mt-19 rounded-lg sm:rounded-xl overflow-hidden shadow-lg sm:shadow-2xl'>
        <div 
          ref={containerRef} 
          className='relative h-[250px] xs:h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden cursor-grab active:cursor-grabbing select-none touch-pan-y' 
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          <div 
            className='flex h-full transition-transform duration-300 ease-out' 
            style={{
              transform: `translateX(calc(-${currentIndex * 100}% + ${isDragging ? translateX : 0}px))`,
            }}
          >
            {images.map((src, index) => (
              <div key={index} className='w-full h-full flex-shrink-0'>
                <img 
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className='w-full h-full'
                  draggable={false}
                />
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 disabled:opacity-30 disabled:cursor-not-allowed text-white p-1.5 sm:p-2 rounded-full transition-all backdrop-blur-sm z-10"
          >
            <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
          </button>
          
          <button
            onClick={nextSlide}
            disabled={currentIndex === images.length - 1}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 disabled:opacity-30 disabled:cursor-not-allowed text-white p-1.5 sm:p-2 rounded-full transition-all backdrop-blur-sm z-10"
          >
            <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
          </button>

          {/* Counter */}
          <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-black/50 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm backdrop-blur-sm z-10">
            {currentIndex + 1} / {images.length}
          </div>

          {/* Dot Indicators for mobile */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 sm:hidden">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className='mt-6 sm:mt-8 lg:mt-10'>
        <div className='text-sm sm:text-base lg:text-lg leading-relaxed text-[#4a5568]  px-2 sm:px-0' 
             style={{ fontFamily: 'Roboto, sans-serif' }}>
          {content}
        </div>
      </div>
    </div>
  );
};

export default SwipeableImageGallery;