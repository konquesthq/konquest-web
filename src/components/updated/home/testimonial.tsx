import React from "react";
import { Autoplay, EffectFade, Pagination } from "swiper";

import "swiper/modules/effect-fade/effect-fade.scss";
import "swiper/modules/pagination/pagination.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "./testimonial.scss";

const HomeTestimonial: React.FC = () => {
  return (
    <section className="testimonial">
      <Swiper
        modules={[Pagination, Autoplay, EffectFade]}
        pagination={{ clickable: true, dynamicBullets: true }}
        effect="fade"
        fadeEffect={{
          crossFade: true,
        }}

        speed={1500}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        loop
        centeredSlides={true}
        slidesPerView={1}>
        <SwiperSlide>
          <div className="testimonial-item">
            <p>
              Implementing Konquest has removed a big headache for our finance teams and helped us better leverage our
              commission programme by giving consultants much better visibility.
            </p>
            <div className="testimonial-author">
              <div className="testimonial-author-image">
                <img src="https://i.pravatar.cc/100?u=a042581f4e2902839" alt="Testimonial Author" />
              </div>
              <div className="testimonial-author-info">
                <div className="testimonial-author-name">
                  <h5>Simon Burns</h5>&nbsp;-&nbsp;<span>Global Operations Director</span>
                </div>
                <div className="testimonial-author-company">
                  <span>IPharm Consulting</span>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial-item">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium orci magna, eu rutrum nulla volutpat
              eget. Duis non massa iaculis, euismod nunc quis, egestas metus. Curabitur ac leo a dui vehicula blandit.
              Donec a purus id ex tincidunt pulvinar. Proin a eleifend metus. Nunc sit amet accumsan nulla. Quisque odio
              mi, malesuada sed odio sit amet.
            </p>
            <div className="testimonial-author">
              <div className="testimonial-author-image">
                <img src="https://i.pravatar.cc/100?u=a042581f4e2902839" alt="Testimonial Author" />
              </div>
              <div className="testimonial-author-info">
                <div className="testimonial-author-name">
                  <h5>Mark Bracknell</h5>&nbsp;-&nbsp;<span>Managing Director</span>
                </div>
                <div className="testimonial-author-company">
                  <span>Theo James Recruitment</span>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial-item">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium orci magna, eu rutrum nulla volutpat
              eget. Duis non massa iaculis, euismod nunc quis, egestas metus. Curabitur ac leo a dui vehicula blandit.
              Donec a purus id ex tincidunt pulvinar. Proin a eleifend metus. Nunc sit amet accumsan nulla. Quisque odio
              mi, malesuada sed odio sit amet.
            </p>
            <div className="testimonial-author">
              <div className="testimonial-author-image">
                <img src="https://i.pravatar.cc/100?u=a042581f4e2902839" alt="Testimonial Author" />
              </div>
              <div className="testimonial-author-info">
                <div className="testimonial-author-name">
                  <h5>Mark Bracknell</h5>&nbsp;-&nbsp;<span>Managing Director</span>
                </div>
                <div className="testimonial-author-company">
                  <span>Theo James Recruitment</span>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default HomeTestimonial;
