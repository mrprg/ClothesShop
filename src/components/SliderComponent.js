import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import css from "../../styles/Slider.module.css";

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    appendDots: (dots) => (
      <div>
        <ul className={css.dots}>{dots}</ul>
        <div className={css.sliderText}>
          <button className={css.shopNowButton}>Shop Now</button>
          <p className={css.newArrivalsText}>New Arrivals</p>
        </div>
      </div>
    ),
  };

  return (
    <Slider {...settings} className={`${css.slider} h-6`}>
      <div>
        <img
          src="https://img.freepik.com/free-photo/black-t-shirts-with-copy-space_53876-102012.jpg?w=826&t=st=1685731953~exp=1685732553~hmac=ea6d12197a0b0b68e0be348e397a9285874ffd5a14bb0fbaee5b14c0fe499763"
          alt="Image 1"
        />
      </div>
      <div>
        <img
          src="https://img.freepik.com/free-photo/lovely-young-parisian-woman-with-brunette-hair-stylish-beret-beige-trench-coat-black-bag-standing-old-stairs-sensitively-posing-outdoors_197531-24472.jpg?w=826&t=st=1685732228~exp=1685732828~hmac=3f0db54b367d1d9d44fbcdb0a94662907e82adc051cbdca2aa3591a5a0488e80"
          alt="Image 2"
        />
      </div>
      <div>
        <img
          src="https://img.freepik.com/free-photo/woman-with-white-tote-bag_53876-102949.jpg?w=826&t=st=1685732239~exp=1685732839~hmac=5d26453203fe32532758265556d5967f664e5208d49853b8593475645c2f4e05"
          alt="Image 3"
        />
      </div>
      <div>
        <img
          src="https://img.freepik.com/free-photo/footwear_1303-5880.jpg?w=826&t=st=1685732218~exp=1685732818~hmac=fa65ea870a5f024d980d7a2872690e340c47253a41ad92eb6251974fa907baa4"
          alt="Image 4"
        />
      </div>
      <div>
        <img
          src="https://img.freepik.com/free-photo/stylish-casual-african-american-man-jeans-jacket-black-beret-clothes-store-trying-new-footwear_627829-13415.jpg?w=826&t=st=1685732190~exp=1685732790~hmac=d863455bcc0466c70b5bab576e896e093fb08e52a2bda979a1a28b70e2d6caa8"
          alt="Image 5"
        />
      </div>
      <div>
        <img
          src="https://img.freepik.com/premium-photo/tattooed-model-black-t-shirt-jeans_53876-163088.jpg?w=826"
          alt="Image 6"
        />
      </div>
    </Slider>
  );
};

export default SliderComponent;
