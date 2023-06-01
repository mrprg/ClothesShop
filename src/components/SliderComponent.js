import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderComponent = () => {
  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Enable infinite loop
    speed: 500, // Transition speed in milliseconds
    slidesToShow: 1, // Number of slides to show at a time
    slidesToScroll: 1, // Number of slides to scroll at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Autoplay speed in milliseconds
    arrows: true, // Show navigation arrows
  };
  return (
    <Slider {...settings}>
      <div>
        <img src="/public/images/image1.jpg" alt="Image 1" />
      </div>
      <div>
        <img src="/public/images/2.jpg" alt="Image 2" />
      </div>
      <div>
        <img src="/public/images/3.jpg" alt="Image 3" />
      </div>
      <div>
        <img src="/public/images/4.jpg" alt="Image 3" />
      </div>
    </Slider>
  );
};

export default SliderComponent;
