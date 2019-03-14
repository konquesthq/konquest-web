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
      <div className={`persona-section ${this.props.className} ${this.props.isShown ? 'open' : ''}`}>
        <div className="persona-contents">
          {this.props.children}
        </div>
      </div>
    );
  }
}

PersonaSection.propTypes = {
  isShown: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired
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
    this.isSectionOpen = this.isSectionOpen.bind(this);
  }

  handlePersonaNavigate(section) {
    this.setState({
      openSection: section
    });
  };

  isAnySectionOpen() {
    return Boolean(this.state.openSection);
  }

  isSectionOpen(sectionName) {
    return this.state.openSection === sectionName;
  }

  render() {
    return (
      <Layout className="home">
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]}/>
        <section className="contents">
          <div className={`intro ${this.isAnySectionOpen() ? 'closed' : ''}`}>
            <h1>Commission. Sorted.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium orci magna, eu rutrum nulla volutpat
              eget. Duis non massa iaculis, euismod nunc quis, egestas metus. </p>
            <OpenContactButton>Request Demo</OpenContactButton>
          </div>
          <PersonaSection className="commercial" isShown={this.isSectionOpen('Commercial')}>
            <h2>This is a section heading</h2>
            <div className="columns">
              <ul>
                <li>
                  <h3>End to End Automation</h3>
                  <p>No more spreadsheets, paper forms and emails. Less mistakes and full audit trails so you can focus
                    on growing your business.</p>
                </li>
                <li>
                  <h3>Total Flexibility</h3>
                  <p>Manage one off bonuses or clawbacks with ease whilst automatically informing all concerned.</p>
                </li>
                <li>
                  <h3>Enhanced Performance</h3>
                  <p>Increase team motivation with one click access to personal commission pipelines for every
                    consultant and manager.</p>
                </li>
              </ul>
              <div className="details">
                <p>Take the pain out of payroll with auto-calculation of commissions, no matter how complex your scheme
                  setup. Konquest will also drive performance by making consultant earnings visible to them in
                  real-time, a proven motivator.</p>
                <OpenContactButton>Request Demo</OpenContactButton>
              </div>
            </div>
          </PersonaSection>
          <PersonaSection className="operations" isShown={this.isSectionOpen('Operations')}>
            <h2>Donec lacinia meat lover</h2>
            <p>Remove spreadsheets from your commissions process with a secure, automated solution in the cloud.</p>
            <ul>
              <li>
                <h3>Auto Calculation</h3>
                <p>Automatically calculate all your commission payments and allocate them to the right payroll periods.</p>
              </li>
              <li>
                <h3>Centralised Date</h3>
                <p>Organise commission and bonus related data in one, cloud based solution.</p>
              </li>
              <li>
                <h3>Secure Automation</h3>
                <p>End to end, securely encrypted cloud solution. No more unsecure emails or corrupted spreadsheets.</p>
              </li>
              <li>
                <h3>CRM Integration</h3>
                <p>Securely integrate with your CRM via API to push sales data into Konquest</p>
              </li>
            </ul>
            <OpenContactButton>Request Demo</OpenContactButton>
          </PersonaSection>
          <PersonaSection className="finance" isShown={this.isSectionOpen('Finance')}>
            <h2>Finance Section</h2>
          </PersonaSection>
          <PersonaSection className="sales" isShown={this.isSectionOpen('Sales')}>
            <h2>Sales Section</h2>
          </PersonaSection>
          <nav className="persona-navigation">
            <h2>Choose your role or department</h2>
            <ul>
              <PersonaNavigationItem title="Commercial" isSelected={this.isSectionOpen('Commercial')}
                                     onNavigate={this.handlePersonaNavigate}>
                <p>Ut imperdiet sed felis vitae aliquam. Pellent posuere metus in auctor.</p>
              </PersonaNavigationItem>
              <PersonaNavigationItem title="Operations" isSelected={this.isSectionOpen('Operations')}
                                     onNavigate={this.handlePersonaNavigate}>
                <p>Ut imperdiet sed felis vitae aliquam. Pellent posuere metus in auctor.</p>
              </PersonaNavigationItem>
              <PersonaNavigationItem title="Finance" isSelected={this.isSectionOpen('Finance')}
                                     onNavigate={this.handlePersonaNavigate}>
                <p>Ut imperdiet sed felis vitae aliquam. Pellent posuere metus in auctor.</p>
              </PersonaNavigationItem>
              <PersonaNavigationItem title="Sales" isSelected={this.isSectionOpen('Sales')}
                                     onNavigate={this.handlePersonaNavigate}>
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