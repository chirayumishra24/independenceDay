import React, { useState, useEffect } from 'react';

// Maps chapters to their dominant hero image
// 0: Home/general, 1-4: Chapters
const imageMappings = {
  0: '/backgrounds/freedom-struggle.png',
  1: '/backgrounds/dandi-march.png',
  2: '/backgrounds/bhagat-singh.png',
  3: '/backgrounds/rani-lakshmibai.png',
  4: '/backgrounds/freedom-fighters.png'
};

const extraImages = [
  '/backgrounds/india-gate.png',
  '/backgrounds/republic-parade.png'
];

const allImages = [...Object.values(imageMappings), ...extraImages];

export default function BackgroundSlideshow({ chapter = 0 }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // When chapter changes, set the initial image to match the chapter
  useEffect(() => {
    // Find the index of the image for this chapter
    const startingImage = imageMappings[chapter] || imageMappings[0];
    const index = allImages.indexOf(startingImage);
    setCurrentIndex(index !== -1 ? index : 0);
  }, [chapter]);

  // Handle slideshow cycling
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % allImages.length);
    }, 8000); // 8 seconds per slide
    
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="background-wrapper">
      {allImages.map((src, index) => (
        <div 
          key={src}
          className={`slide ${index === currentIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url(${src})` }}
        />
      ))}
      <div className="bg-overlay" />
    </div>
  );
}
