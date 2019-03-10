import React from "react";
import PropTypes from 'prop-types';
import Layout from "../components/layout";
import SEO from "../components/seo";
import Logos from "../components/logos";
import RequestDemo from "../components/requestDemo";

import "./index.scss";

const PersonaNavigationItem = ({title, children}) => (
  <li>
    <h3>{title}</h3>
    {children}
  </li>
);

PersonaNavigationItem.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

const PersonaNavigation = () => (
  <ul>
    <PersonaNavigationItem title="Commercial"><p>Ut imperdiet sed felis vitae aliquam. Pellent posuere metus in
      auctor.</p></PersonaNavigationItem>
    <PersonaNavigationItem title="Operations"><p>Ut imperdiet sed felis vitae aliquam. Pellent posuere metus in
      auctor.</p></PersonaNavigationItem>
    <PersonaNavigationItem title="Finance"><p>Ut imperdiet sed felis vitae aliquam. Pellent posuere metus in auctor.</p>
    </PersonaNavigationItem>
    <PersonaNavigationItem title="Sales"><p>Ut imperdiet sed felis vitae aliquam. Pellent posuere metus in auctor.</p>
    </PersonaNavigationItem>
  </ul>
);

const HomeNavigation = () => (
  <nav className="persona-navigation">
    <h2>Choose your role or department</h2>
    <PersonaNavigation/>
  </nav>
);

class IndexPage extends React.Component {
  render() {
    return (
      <Layout className="home">
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]}/>
        <section className="contents">
          <div className="intro">
            <h1>Commission. Sorted.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium orci magna, eu rutrum nulla volutpat
              eget. Duis non massa iaculis, euismod nunc quis, egestas metus. </p>
            <button type="button">Btn Text</button>
          </div>
          <HomeNavigation/>
        </section>
        <section className="benefits">
          <h2>This is the benefits section</h2>
        </section>
        <section className="partners">
          <h2>Connect, Automate...</h2>
        </section>
        <section className="customers">
          <h2>Trusted by</h2>
          <Logos/>
          <RequestDemo/>
        </section>
      </Layout>
    )
  }
};

export default IndexPage;