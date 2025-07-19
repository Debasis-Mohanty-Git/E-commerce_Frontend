import React, { useRef } from 'react';
import AliceCarousel from 'react-alice-carousel';
import HomeCard from '../HomeSectionCard/HomeCard';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

function HomeSectionCarosel({ sectionName, data }) {
  const carouselRef = useRef();

  const responsive = {
    0: { items: 1 },
    480: { items: 2 },
    768: { items: 3 },
    1024: { items: 5 },
    1280: { items: 5.5 },
  };

  const items = data.slice(0, 10).map((item, index) => (
    <HomeCard key={index} product={item} />
  ));

  const slidePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.slidePrev();
    }
  };

  const slideNext = () => {
    if (carouselRef.current) {
      carouselRef.current.slideNext();
    }
  };

  return (

    <div className="w-full px-4 md:px-10 lg:px-20 py-6">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
        {sectionName}
      </h2>
      <div className="relative p-8">
        <AliceCarousel
          mouseTracking
          items={items}
          disableButtonsControls
          disableDotsControls
          responsive={responsive}
          infinite={false}
          ref={carouselRef}
        />

        {/* Left Arrow */}
        <button
          onClick={slidePrev}
          className="absolute top-1/2 -translate-y-1/2 left-2 md:left-4 bg-white text-black rounded-full shadow-md z-50 p-2 hover:bg-gray-200 transition"
          aria-label="Previous"
        >
          <KeyboardArrowLeftIcon />
        </button>

        {/* Right Arrow */}
        <button
          onClick={slideNext}
          className="absolute top-1/2 -translate-y-1/2 right-2 md:right-4 bg-white text-black rounded-full shadow-md z-50 p-2 hover:bg-gray-200 transition"
          aria-label="Next"
        >
          <KeyboardArrowRightIcon />
        </button>
      </div>
    </div>
  );
}

export default HomeSectionCarosel;
