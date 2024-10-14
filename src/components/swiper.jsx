// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import Swiper from 'swiper/bundle';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import './css/swiper.css'; 

const MySwiper = () => {
  useEffect(() => {
<<<<<<< HEAD
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
=======
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
>>>>>>> master

  return (
    <section className="swiper-container">
      <div className="swiper-wrapper">
<<<<<<< HEAD
        <div className="swiper-slide">Slide 1</div>
        <div className="swiper-slide">Slide 2</div>
        <div className="swiper-slide">Slide 3</div>
      </div>
      <div className="swiper-pagination"></div> {}
=======
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
>>>>>>> master
    </section>
  );
};

export default MySwiper;
