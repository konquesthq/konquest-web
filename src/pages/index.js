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
  children: PropTypes.node,
  onNavigate: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired
};

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openSection: ''
    };
    this.benefitsSection = React.createRef();
    this.handlePersonaNavigate = this.handlePersonaNavigate.bind(this);
    this.handleClearPersona = this.handleClearPersona.bind(this);
    this.handleScrollToBenefits = this.handleScrollToBenefits.bind(this);
  }

  handlePersonaNavigate(section) {
    this.setState({
      openSection: section
    });
  }

  handleClearPersona() {
    this.setState({
      openSection: ''
    });
  }

  handleScrollToBenefits() {
    const element = this.benefitsSection.current;
    const scrollNode = element.ownerDocument.scrollingElement || element.ownerDocument.documentElement;
    const fullHeaderHeight = 202;
    scrollNode.scrollTo({
      top: scrollNode.clientHeight - fullHeaderHeight,
      left: 0,
      behavior: 'smooth'
    });
  }

  isAnySectionOpen() {
    return Boolean(this.state.openSection);
  }

  isSectionOpen(sectionName) {
    return this.state.openSection === sectionName;
  }

  render() {
    return (
      <Layout className="home" ref={this.layout}>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]}/>
        <section className="contents">
          <div className={`intro ${this.isAnySectionOpen() ? 'closed' : ''}`}>
            <h1>Commission. Sorted.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium orci magna, eu rutrum nulla volutpat
              eget. Duis non massa iaculis, euismod nunc quis, egestas metus. </p>
            <OpenContactButton>Request a Demo</OpenContactButton>
          </div>
          <PersonaSection className="commercial" isShown={this.isSectionOpen('Commercial')}>
            <h2>This is a section heading</h2>
            <div className="columns">
              <ul>
                <li className="automation">
                  <h3>End to End Automation</h3>
                  <p>No more spreadsheets, paper forms and emails. Less mistakes and full audit trails so you can focus
                    on growing your business.</p>
                </li>
                <li className="flexibility">
                  <h3>Total Flexibility</h3>
                  <p>Manage one off bonuses or clawbacks with ease whilst automatically informing all concerned.</p>
                </li>
                <li className="performance">
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
              <li className="auto-calc">
                <h3>Auto Calculation</h3>
                <p>Automatically calculate all your commission payments and allocate them to the right payroll
                  periods.</p>
              </li>
              <li className="central-data">
                <h3>Centralised Date</h3>
                <p>Organise commission and bonus related data in one, cloud based solution.</p>
              </li>
              <li className="secure-auto">
                <h3>Secure Automation</h3>
                <p>End to end, securely encrypted cloud solution. No more unsecure emails or corrupted spreadsheets.</p>
              </li>
              <li className="crm">
                <h3>CRM Integration</h3>
                <p>Securely integrate with your CRM via API to push sales data into Konquest</p>
              </li>
            </ul>
            <OpenContactButton>Request Demo</OpenContactButton>
          </PersonaSection>
          <PersonaSection className="finance" isShown={this.isSectionOpen('Finance')}>
            <h2>Donec lacinia meat lover</h2>
            <ul>
              <li className="accuracy">
                <h3>Accuracy</h3>
                <p>Minimize costly mistakes by alleviating the risk of human error.</p>
              </li>
              <li className="audits">
                <h3>Audit Trails</h3>
                <p>Record every transaction or event for each claim.</p>
              </li>
              <li className="forecasting">
                <h3>Improved Forecasting</h3>
                <p>Realtime insight into estimated and actual commissions payable in any given period</p>
              </li>
              <li className="productivity">
                <h3>Increased Productivity</h3>
                <p>Less time spent calculating commissions and chasing claim submissions with total automation.</p>
              </li>
            </ul>
            <RequestDemo/>
          </PersonaSection>
          <PersonaSection className="sales" isShown={this.isSectionOpen('Sales')}>
            <h2>Total Transparency for your Reward Sytem</h2>
            <p>Understand how much you are earning before you earn it, automatically compile commission claims and be
              involved in the approvals process so there’s never a nasty surprise on pay day.</p>
            <ul>
              <li className="motivation">
                <h3>Motivation</h3>
                <p>One click access to commission pipelines for every consultant, real-time tracking against
                  organisational or personal targets with notifications </p>
              </li>
              <li className="focus">
                <h3>Focus</h3>
                <p>Less time working out how much you’re getting paid, more time focused on what makes you more
                  money!</p>
              </li>
            </ul>
            <OpenContactButton>Request Demo</OpenContactButton>
          </PersonaSection>
          <nav className="persona-navigation">
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
              <li className="benefits-nav" onClick={this.handleScrollToBenefits}>Benefits</li>
            </ul>
          </nav>
          <nav className="persona-radio-navigation">
            <ul>
              <li onClick={this.handleClearPersona} className={!this.isAnySectionOpen() ? 'selected' : ''}>
                Intro
              </li>
              <PersonaNavigationItem title="Commercial" isSelected={this.isSectionOpen('Commercial')}
                                     onNavigate={this.handlePersonaNavigate}>
              </PersonaNavigationItem>
              <PersonaNavigationItem title="Operations" isSelected={this.isSectionOpen('Operations')}
                                     onNavigate={this.handlePersonaNavigate}>
              </PersonaNavigationItem>
              <PersonaNavigationItem title="Finance" isSelected={this.isSectionOpen('Finance')}
                                     onNavigate={this.handlePersonaNavigate}>
              </PersonaNavigationItem>
              <PersonaNavigationItem title="Sales" isSelected={this.isSectionOpen('Sales')}
                                     onNavigate={this.handlePersonaNavigate}>
              </PersonaNavigationItem>
            </ul>
          </nav>
        </section>
        <section className="benefits" ref={this.benefitsSection}>
          <h2>This is the benefits section</h2>
          <blockquote>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium orci magna, eu rutrum nulla volutpat
              eget. Duis non massa iaculis, euismod nunc quis, egestas metus. Curabitur ac leo a dui vehicula blandit.
              Donec
               a purus id ex tincidunt
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