import { graphql, useStaticQuery } from "gatsby";
import GatsbyImage from "gatsby-image";
import React from "react";
import { Autoplay, EffectFade, Pagination } from "swiper";

import "swiper/modules/effect-fade/effect-fade.scss";
import "swiper/modules/pagination/pagination.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "./testimonial.scss";

const HomeTestimonial: React.FC = () => {
  const homeTestimonialImages = useStaticQuery(graphql`
    query {
      theoJamesPic: file(relativePath: { eq: "updated-home/testimonials/mark-bracknell.jpeg" }) {
        childImageSharp {
          fluid(maxHeight: 100, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      additionPic: file(relativePath: { eq: "updated-home/testimonials/simon-topps.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 100, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      placeholderPic: file(relativePath: { eq: "logo-inverse.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 100, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
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
                <GatsbyImage fluid={homeTestimonialImages.placeholderPic.childImageSharp.fluid} alt="Testimonial Author" />
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
              I used to dread calculating commissions at month end, Konquest solved this for us and now it just feels
              like a no brainer.
            </p>
            <div className="testimonial-author">
              <div className="testimonial-author-image">
              <GatsbyImage fluid={homeTestimonialImages.additionPic.childImageSharp.fluid} alt="Testimonial Author" />
              </div>
              <div className="testimonial-author-info">
                <div className="testimonial-author-name">
                  <h5>Simon Topps</h5>&nbsp;-&nbsp;<span>Director</span>
                </div>
                <div className="testimonial-author-company">
                  <span>Addition Solutions</span>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial-item">
            <p>
              Konquest is great! Spreadsheets are my nemesis, so I always hated the monthly commission calculations.
              Getting that time back each month is ROI enough, but giving our consultants on demand info on their
              earnings takes it to another level. I couldn’t recommend Konquest more.
            </p>
            <div className="testimonial-author">
              <div className="testimonial-author-image">
                <GatsbyImage fluid={homeTestimonialImages.theoJamesPic.childImageSharp.fluid} alt="Testimonial Author" />
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
