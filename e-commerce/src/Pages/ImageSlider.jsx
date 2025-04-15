import React, { useState, useEffect } from 'react';

const ImageSlider = () => {
  const images = [
    { url: '/Images/product_1.png', text: '60% off' },
    { url: '/Images/img.png', text: '50%  off' },
    
    
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 

    return () => clearInterval(intervalId); 
  }, []);

  return (
    <div className="relative h-80 w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 transition-all duration-1000"
        style={{
          backgroundImage: `url(${images[currentIndex].url})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Content */}
      <div className="absolute inset-0 flex justify-center items-center text-white z-10">
        <h1 className="text-5xl font-bold">{images[currentIndex].text}</h1>
      </div>
    </div>
  );
};




export default ImageSlider