// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import Swiper from 'swiper/bundle';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import './css/swiper.css'; 

const MySwiper = () => {
  useEffect(() => {
    const swiper = new Swiper('.swiper-container', {
      loop: true,
      autoplay: {
        delay: 3000,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });

    console.log(swiper);
  }, []);

  return (
    <section className="swiper-container">
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <img src="./images/carousel-1.jpg" alt="Logo du FC Barcelone" />
        </div>
        <div className="swiper-slide">
          <img src="./images/carousel-2.jpg" alt="Logo du FC Barcelone" />
        </div>
        <div className="swiper-slide">
          <img src="./images/carousel-3.jpg" alt="Logo du FC Barcelone" />
        </div>
      </div>
      <div className="swiper-pagination"></div>
    </section>
  );
};

export default MySwiper;
