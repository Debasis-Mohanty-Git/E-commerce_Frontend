import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { MainCaroselData } from './MainCaroselData';
  
const MainCarosel = () => {
  const items = MainCaroselData.map((item, index) => (
    <img
  key={index}
  className="cursor-pointer w-full object-cover h-auto"
  role="presentation"
  src={item.image}
  alt={`carousel-img-${index}`}
/>

  ));

  return (
    <AliceCarousel
      mouseTracking
      items={items}
      autoPlay
      infinite
      disableButtonsControls
      autoPlayInterval={1500}
    />
  );
};

export default MainCarosel;
