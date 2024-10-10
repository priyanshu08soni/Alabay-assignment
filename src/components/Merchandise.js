import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import blackhoodiebck from "../assets/Alabay Merch/black hoodie bck.png";
import blackhoodie from "../assets/Alabay Merch/black hoodie.png";
import bluecapbck from "../assets/Alabay Merch/blue cap bck.png";
import bluecap from "../assets/Alabay Merch/cap mockup.png";
import pinkteebck from "../assets/Alabay Merch/pink tee bck.png";
import pinktee from "../assets/Alabay Merch/pink tshirt.png";
import yellowtee from "../assets/Alabay Merch/yellow tshirt.png";
import yellowteebck from "../assets/Alabay Merch/yellow tee bck.png";
const Merchandise = () => {
  return (
    <div className="merch">
      <h1 className="vis-heading mb-16">MERCHANDISE</h1>
      <Swiper 
        navigation={true} 
        modules={[Navigation,Autoplay]} 
        loop={true}
        autoplay={{
          delay: 3000,  // Time between each slide in milliseconds
          disableOnInteraction: false, // Keep autoplay after user interactions
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="merchandise">
            <img className="background-image" src={bluecapbck} alt="" />
            <img className="front-image" src={bluecap} alt="" />
            <div className="coming-soon">Coming Soon...</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="merchandise">
            <img className="background-image" src={pinkteebck} alt="" />
            <img className="front-image" src={pinktee} alt="" />
            <div className="coming-soon">Coming Soon...</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="merchandise">
            <img className="background-image" src={yellowteebck} alt="" />
            <img className="front-image" src={yellowtee} alt="" />
            <div className="coming-soon">Coming Soon...</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="merchandise">
            <img className="background-image" src={blackhoodiebck} alt="" />
            <img className="front-image" src={blackhoodie} alt="" />
            <div className="coming-soon">Coming Soon...</div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Merchandise;
