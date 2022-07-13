import React from "react";
import "./testimonial.scss";

const HomeTestimonial: React.FC = () => {
  return (
    <section className="testimonial">
      <div className="testimonial-content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium orci magna, eu rutrum nulla volutpat
          eget. Duis non massa iaculis, euismod nunc quis, egestas metus. Curabitur ac leo a dui vehicula blandit. Donec
          a purus id ex tincidunt pulvinar. Proin a eleifend metus. Nunc sit amet accumsan nulla. Quisque odio mi,
          malesuada sed odio sit amet.
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
    </section>
  );
};

export default HomeTestimonial;
