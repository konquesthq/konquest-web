import React from "react";
import OpenContactButton from "../../openContactButton";
import "./features.scss";

const HomeFeatures: React.FC = () => {
  return (
    <section className="features">
      <div className="feature-panels">
        <div className="features-summary">
          <h5>A rich feature set designed around your industry</h5>
          <p>
            Cras leo turpis, convallis ac ligula sed, bibendum tempus mi. Aliquam diam sapien, suscipit eget bibendum
            nec, sodales sit amet tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Nunc a magna quis ex porttitor consectetur. Donec non elementum diam.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut lacus nulla. Morbi sed tincidunt eros.
            Donec mi mi, tempus id quam nec, aliquet blandit magna. Proin id purus eget metus tempor fermentum ac at
            justo.
          </p>
          <OpenContactButton>Request a Demo</OpenContactButton>
        </div>
        <div className="feature-list">
          <div className="feature">
            <span className="feature-icon" />
            <div className="feature-text">
              <h5>Title of Feature</h5>
              <p>Cras leo turpis, convallis ac ligula sed, bibendum tempus mi. Aliquam diam sapien.</p>
            </div>
          </div>
          <div className="feature">
            <span className="feature-icon" />
            <div className="feature-text">
              <h5>Title of Feature</h5>
              <p>Cras leo turpis, convallis ac ligula sed, bibendum tempus mi. Aliquam diam sapien.</p>
            </div>
          </div>
          <div className="feature">
            <span className="feature-icon" />
            <div className="feature-text">
              <h5>Title of Feature</h5>
              <p>Cras leo turpis, convallis ac ligula sed, bibendum tempus mi. Aliquam diam sapien.</p>
            </div>
          </div>
        </div>
        <div className="feature-list">
          <div className="feature">
            <span className="feature-icon" />
            <div className="feature-text">
              <h5>Title of Feature</h5>
              <p>Cras leo turpis, convallis ac ligula sed, bibendum tempus mi. Aliquam diam sapien.</p>
            </div>
          </div>
          <div className="feature">
            <span className="feature-icon" />
            <div className="feature-text">
              <h5>Title of Feature</h5>
              <p>Cras leo turpis, convallis ac ligula sed, bibendum tempus mi. Aliquam diam sapien.</p>
            </div>
          </div>
          <div className="feature">
            <span className="feature-icon" />
            <div className="feature-text">
              <h5>Title of Feature</h5>
              <p>Cras leo turpis, convallis ac ligula sed, bibendum tempus mi. Aliquam diam sapien.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeFeatures;
