import React from "react";
import PropTypes from 'prop-types';
import Layout from "../components/layout";
import SEO from "../components/seo";
import Logos from "../components/logos";
import RequestDemo from "../components/requestDemo";
import Partners from '../components/partners';
import OpenContactButton from '../components/openContactButton';

import "./index.scss";

class PersonaSection extends React.Component {
  render() {
    return (
      <div className={`persona-section ${this.props.isShown ? 'open' : ''}`}>
        {this.props.children}
      </div>
    );
  }
}

PersonaSection.propTypes = {
  isShown: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired
};

class PersonaNavigationItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onNavigate(this.props.title);
  }

  render() {
    return (
      <li className={this.props.isSelected ? 'selected' : ''} onClick={this.handleClick}>
        <h3>{this.props.title}</h3>
        {this.props.children}
      </li>
    );
  }
}

PersonaNavigationItem.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onNavigate: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired
};

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openSection: ''
    };
    this.handlePersonaNavigate = this.handlePersonaNavigate.bind(this);
  }

  handlePersonaNavigate(section) {
    this.setState({
      openSection: section
    });
  };

  render() {
    return (
      <Layout className="home">
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]}/>
        <section className="contents">
          <div className="intro">
            <h1>Commission. Sorted.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium orci magna, eu rutrum nulla volutpat
              eget. Duis non massa iaculis, euismod nunc quis, egestas metus. </p>
            <OpenContactButton>Request Demo</OpenContactButton>
          </div>
          <PersonaSection id="commercial" isShown={this.state.openSection === 'Commercial'}>
            <h2>Commercial Section</h2>
          </PersonaSection>
          <PersonaSection id="operations" isShown={this.state.openSection === 'Operations'}>
            <h2>Operations Section</h2>
          </PersonaSection>
          <PersonaSection id="finance" isShown={this.state.openSection === 'Finance'}>
            <h2>Finance Section</h2>
          </PersonaSection>
          <PersonaSection id="sales" isShown={this.state.openSection === 'Sales'}>
            <h2>Sales Section</h2>
          </PersonaSection>
          <nav className="persona-navigation">
            <h2>Choose your role or department</h2>
            <ul>
              <PersonaNavigationItem title="Commercial" isSelected={this.state.openSection === 'Commercial'} onNavigate={this.handlePersonaNavigate}>
                <p>Ut imperdiet sed felis vitae aliquam. Pellent posuere metus in auctor.</p>
              </PersonaNavigationItem>
              <PersonaNavigationItem title="Operations" isSelected={this.state.openSection === 'Operations'} onNavigate={this.handlePersonaNavigate}>
                <p>Ut imperdiet sed felis vitae aliquam. Pellent posuere metus in auctor.</p>
              </PersonaNavigationItem>
              <PersonaNavigationItem title="Finance" isSelected={this.state.openSection === 'Finance'} onNavigate={this.handlePersonaNavigate}>
                <p>Ut imperdiet sed felis vitae aliquam. Pellent posuere metus in auctor.</p>
              </PersonaNavigationItem>
              <PersonaNavigationItem title="Sales" isSelected={this.state.openSection === 'Sales'} onNavigate={this.handlePersonaNavigate}>
                <p>Ut imperdiet sed felis vitae aliquam. Pellent posuere metus in auctor.</p>
              </PersonaNavigationItem>
            </ul>
          </nav>
        </section>
        <section className="benefits">
          <h2>This is the benefits section</h2>
          <div className="benefits-contents">
            <blockquote>
             <span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium orci magna, eu rutrum nulla volutpat
              eget. Duis non massa iaculis, euismod nunc quis, egestas metus. Curabitur ac leo a dui vehicula blandit.
              Donec
               a purus id ex tincidunt </span>
              <cite>Jack Skellington, <span className="company">Halloween Inc</span></cite>
            </blockquote>
            <ul className="benefits-list">
              <li>
                <h3>Drive Efficiency</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium orci magna, eu rutrum nulla
                  volutpat eget. Duis non massa iaculis, euismod nunc quis, egestas metus. Curabitur ac leo a dui
                  vehicula blandit. Donec a purus id ex tincidunt pulvinar. Proin a eleifend metus.</p>
              </li>
              <li>
                <h3>Drive Efficiency</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium orci magna, eu rutrum nulla
                  volutpat eget. Duis non massa iaculis, euismod nunc quis, egestas metus. Curabitur ac leo a dui
                  vehicula blandit. Donec a purus id ex tincidunt pulvinar. Proin a eleifend metus.</p>
              </li>
              <li>
                <h3>Drive Efficiency</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium orci magna, eu rutrum nulla
                  volutpat eget. Duis non massa iaculis, euismod nunc quis, egestas metus. Curabitur ac leo a dui
                  vehicula blandit. Donec a purus id ex tincidunt pulvinar. Proin a eleifend metus.</p>
              </li>
              <li>
                <h3>Drive Efficiency</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium orci magna, eu rutrum nulla
                  volutpat eget. Duis non massa iaculis, euismod nunc quis, egestas metus. Curabitur ac leo a dui
                  vehicula blandit. Donec a purus id ex tincidunt pulvinar. Proin a eleifend metus.</p>
              </li>
            </ul>
          </div>
        </section>
        <section className="partners">
          <h2>Connect, Automate...</h2>
          <p>Sed in nisi efficitur, vestibulum tellus in, sagittis orci. Cras placerat enim justo, sit amet rhoncus.</p>
          <Partners/>
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