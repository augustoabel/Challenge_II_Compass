import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../index.css'

const SectionGrid = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-custom-neutral p-20 text-white">
      <p className="text-xl">Coleções de Halloween</p>

      <Slider {...settings} className="mt-10 mx-4">
        <div className="slider-item bg-blue-500 h-80 rounded-lg">Slide 1</div>
        <div className="slider-item bg-blue-500 h-80 rounded-lg">Slide 2</div>
        <div className="slider-item bg-blue-500 h-80 rounded-lg">Slide 3</div>
        <div className="slider-item bg-blue-500 h-80 rounded-lg">Slide 4</div>
        <div className="slider-item bg-blue-500 h-80 rounded-lg">Slide 5</div>
        <div className="slider-item bg-blue-500 h-80 rounded-lg">Slide 6</div>
      </Slider>

      <div className="mt-10 gap-3">
        <p className="text-xl">Séries em Alta</p>

        <Slider {...settings} className="mt-10">
          <div className="slider-item bg-blue-500 h-80 rounded-lg">Slide 1</div>
          <div className="slider-item bg-blue-500 h-80 rounded-lg">Slide 2</div>
          <div className="slider-item bg-blue-500 h-80 rounded-lg">Slide 3</div>
          <div className="slider-item bg-blue-500 h-80 rounded-lg">Slide 4</div>
          <div className="slider-item bg-blue-500 h-80 rounded-lg">Slide 5</div>
          <div className="slider-item bg-blue-500 h-80 rounded-lg">Slide 6</div>
        </Slider>
      </div>

      <div className="mt-10">
        <p className="text-xl">Filmes em Alta</p>

        <Slider {...settings} className="mt-10">
          <div className="slider-item bg-blue-500 h-80 rounded-lg">Slide 1</div>
          <div className="slider-item bg-blue-500 h-80 rounded-lg">Slide 2</div>
          <div className="slider-item bg-blue-500 h-80 rounded-lg">Slide 3</div>
          <div className="slider-item bg-blue-500 h-80 rounded-lg">Slide 4</div>
          <div className="slider-item bg-blue-500 h-80 rounded-lg">Slide 5</div>
          <div className="slider-item bg-blue-500 h-80 rounded-lg">Slide 6</div>
        </Slider>
      </div>
    </div>
  );
};

export default SectionGrid;
