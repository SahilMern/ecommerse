import { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import HomeSectionCard from './components/HomeSectionCard';

const Sliders = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const slidePrev = () => setActiveIndex(activeIndex - 1);
  const slideNext = () => setActiveIndex(activeIndex + 1);

  const data = [
    { id: 1, content: 'Slide 1' },
    { id: 2, content: 'Slide 2' },
    { id: 3, content: 'Slide 3' },
    { id: 4, content: 'Slide 3' },
    { id: 5, content: 'Slide 3' },
    { id: 6, content: 'Slide 3' },
    { id: 7, content: 'Slide 3' },

    // Add more data as needed
  ];

  return (
    <div className="relative px-8 lg:px-8">
      <div className="relative p-5">
        <Slider {...settings} initialSlide={activeIndex}>
          {data.map((item) => (
            <div key={item.id}>
              <HomeSectionCard item={item} />
            </div>
          ))}
        </Slider>
        <button
          className="slider-button"
          onClick={slidePrev}
          aria-label="Previous Slide"
        >
          Prev
        </button>

        <button
          className="slider-button"
          onClick={slideNext}
          aria-label="Next Slide"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Sliders;
