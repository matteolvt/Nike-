// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import Swiper from 'swiper/bundle';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import './css/swiper.css'; 

const MySwiper = () => {
  useEffect(() => {
    new Swiper('.swiper-container', {
      loop: true,  
      autoplay: {
        delay: 3000, 
      },
      pagination: {
        el: '.swiper-pagination', 
        clickable: true, 
      },
    });
  }, []); 

  return (
    <section className="swiper-container">
      <div className="swiper-wrapper">
        <div className="swiper-slide">Slide 1</div>
        <div className="swiper-slide">Slide 2</div>
        <div className="swiper-slide">Slide 3</div>
      </div>
      <div className="swiper-pagination"></div> {}
    </section>
  );
};

export default MySwiper;
