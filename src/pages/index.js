import React from "react";
import PropTypes from 'prop-types';
import Layout from "../components/layout";
import SEO from "../components/seo";
import Logos from "../components/logos";
import RequestDemo from "../components/requestDemo";
import Partners from '../components/partners';
import OpenContactButton from '../components/openContactButton';
import SalesImage from '../components/images/sales';
import FinanceImage from '../components/images/finance';
import CommercialImage from '../components/images/commercial';
import DefaultImage from '../components/images/default';

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
      <li className={`${this.props.title.toLowerCase()}-persona-navigation ${this.props.isSelected ? 'selected' : ''}`} onClick={this.handleClick}>
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
    const fixedHeaderHeight = 65;
    if(scrollNode.scrollTo) {
      scrollNode.scrollTo({
        top: scrollNode.clientHeight - fixedHeaderHeight,
        left: 0,
        behavior: 'smooth'
      });
    } else {
      scrollNode.scrollTop = scrollNode.clientHeight - fixedHeaderHeight;
    }
  }

  isAnySectionOpen() {
    return Boolean(this.state.openSection);
  }

  isSectionOpen(sectionName) {
    return this.state.openSection === sectionName;
  }

  render() {
    return (
      <Layout className={`home ${this.state.openSection.toLowerCase()}`} ref={this.layout}>
        <SEO title="Home" keywords={[`konquest`, `commission`, `sales`, `recruitment`]}/>
        <section className="contents">
          <div className={`intro ${this.isAnySectionOpen() ? 'closed' : ''}`}>
            <div className="intro-contents">
              <h1>Commission. Sorted.</h1>
              <p>Konquest automatically calculates your sales commissions, no matter how complex they are, allocating them to the right period and exposing earning pipelines to your team. No more spreadsheets. Just Konquest.</p>
              <OpenContactButton>Request a Demo</OpenContactButton>
            </div>
            <DefaultImage/>
          </div>
          <PersonaSection className="commercial" isShown={this.isSectionOpen('Commercial')}>
            <h2>Automate. Motivate.</h2>
            <div className="columns">
              <div className="details">
                <ul>
                  <li className="automation">
                    <h3>End to End Automation</h3>
                    <p>No more spreadsheets, paper forms and emails. Less mistakes and full audit trails so you can
                      focus
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
                <p>Take the pain out of payroll with auto-calculation of commissions, no matter how complex your scheme
                  setup. Konquest will also drive performance by making consultant earnings visible to them in
                  real-time, a proven motivator.</p>
              </div>
              <div className="demo">
                <CommercialImage/>
                <p>Take the pain out of payroll with auto-calculation of commissions, no matter how complex your scheme
                  setup. Konquest will also drive performance by making consultant earnings visible to them in
                  real-time, a proven motivator.</p>
                <OpenContactButton>Request Demo</OpenContactButton>
              </div>
            </div>
          </PersonaSection>
          <PersonaSection className="operations" isShown={this.isSectionOpen('Operations')}>
            <h2>Secure, Intelligent Automation</h2>
            <p>Remove spreadsheets from your commissions process with a secure, automated solution in the cloud.</p>
            <ul>
              <li className="auto-calc">
                <h3>Auto Calculation</h3>
                <p>Konquest automatically calculates all of your commission payments and allocates them to the right
                  payroll periods.</p>
              </li>
              <li className="central-data">
                <h3>Centralised Data</h3>
                <p>Organise all of your commission and bonus related data in one, cloud based solution.</p>
              </li>
              <li className="secure-auto">
                <h3>Secure Automation</h3>
                <p>No more insecure emails or corrupted spreadsheets. Konquest offers a securely encrypted, end to end
                  solution in the cloud.</p>
              </li>
              <li className="crm">
                <h3>CRM Integration</h3>
                <p>Securely integrate with your CRM via API to push sales data into Konquest.</p>
              </li>
            </ul>
            <OpenContactButton>Request Demo</OpenContactButton>
          </PersonaSection>
          <PersonaSection className="finance" isShown={this.isSectionOpen('Finance')}>
            <div className="description">
              <h2>Minimise Errors and Payslip Queries</h2>
              <p>Minimize errors and improve efficiency by removing manual input from your commission claim process. All
                the while ensuring every transaction is recorded in a transparent audit trail.</p>
              <FinanceImage/>
            </div>
            <div className="details">
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
                  <p>Realtime insight into estimated and actual commissions payable in any given period.</p>
                </li>
                <li className="productivity">
                  <h3>Increased Productivity</h3>
                  <p>Less time spent calculating commissions and chasing claim submissions with total automation.</p>
                </li>
              </ul>
              <RequestDemo/>
            </div>
          </PersonaSection>
          <PersonaSection className="sales" isShown={this.isSectionOpen('Sales')}>
            <div className="details">
              <h2>A Transparent Reward System for All</h2>
              <p>Understand how much you are earning before you earn it, automatically compile commission claims and be
                involved in the approvals process so there's never a nasty surprise on pay day.</p>
              <ul>
                <li className="motivation">
                  <h3>Motivation</h3>
                  <p>One click access to commission pipelines for all, real-time tracking against company or personal commission targets with alerts and earnings summaries.</p>
                </li>
                <li className="focus">
                  <h3>Focus</h3>
                  <p>Less time working out how much you're getting paid, more time focused on what makes you more
                    money!</p>
                </li>
              </ul>
              <OpenContactButton>Request Demo</OpenContactButton>
            </div>
            <SalesImage/>
          </PersonaSection>
          <nav className="persona-navigation">
            <ul>
              <PersonaNavigationItem title="Commercial" isSelected={this.isSectionOpen('Commercial')}
                                     onNavigate={this.handlePersonaNavigate}>
                <p>For business owners, MD's and Sales Directors</p>
              </PersonaNavigationItem>
              <PersonaNavigationItem title="Operations" isSelected={this.isSectionOpen('Operations')}
                                     onNavigate={this.handlePersonaNavigate}>
                <p>For Operations Directors and IT Managers</p>
              </PersonaNavigationItem>
              <PersonaNavigationItem title="Finance" isSelected={this.isSectionOpen('Finance')}
                                     onNavigate={this.handlePersonaNavigate}>
                <p>For the finance team, from FD to Payroll Administrators</p>
              </PersonaNavigationItem>
              <PersonaNavigationItem title="Sales" isSelected={this.isSectionOpen('Sales')}
                                     onNavigate={this.handlePersonaNavigate}>
                <p>For the business end of the team - Sales Execs and Recruitment Consultants</p>
              </PersonaNavigationItem>
              <li className="benefits-nav" onClick={this.handleScrollToBenefits}>Benefits</li>
            </ul>
          </nav>
          <nav className="persona-radio-navigation">
            <ul>
              <li onClick={this.handleClearPersona} className={`intro-persona-navigation ${!this.isAnySectionOpen() ? 'selected' : ''}`}>
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
          <h2>Why Konquest?</h2>
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
              <p>Konquest dramatically reduces the amount of time and effort your organisation needs to put into
                managing commission, saving you substantial amounts of time every month – time that could and should be
                spent driving revenue and profitability.</p>
              <p>By integrating with your CRM, or using a Konquest custom interface through which to record deal data,
                the process from calculation to approval can be almost entirely automated. Anything that can't be
                automatically calculated, such as guaranteed bonus for new starters, or deductions such as clawbacks,
                can be added in a couple of clicks.</p>
              <p>The end result is a dramatic reduction in manual input, not to mention monthly headaches!</p>
            </li>
            <li>
              <h3>Increased Engagement</h3>
              <p>Konquest brings total transparency to your rewards program by ensuring that every member of your team
                knows exactly how your schemes work and what that means to them for any given period in real time.</p>
              <p>Estimated and secured earnings are visible for all, and any time something changes the effected team
                member is notified which helps alleviate any nasty surprises come pay day, as well as giving them an
                opportunity to take any necessary or expected actions.</p>
              <p>The result is an informed and engaged team who trust you and your process.</p>
            </li>
            <li>
              <h3>Increased Performance</h3>
              <p>Konquest shows your team their estimated and secured earnings for current and future months.
                Associating their efforts to their personal outcome so clearly is a powerful motivator – who doesn't
                want to see their commission pot increase?!</p>
              <p>Add in progress indicators against organisational or personal targets and you can expect a real
                increase in performance company wide.</p>
            </li>
            <li>
              <h3>Ensure Accuracy and Accountability</h3>
              <p>Konquest automatically calculates everything for you based on your unique commission schemes. This
                means the chances of an error are greatly reduced, and because we record every event associated with
                claims, each stakeholder is accountable to their own actions. Be that the deal data entered by
                consultants, an approval actioned by a manager, or a clawback added by your FD.</p>
            </li>
          </ul>
        </section>
        <section className="partners">
          <h2>Integration Partners</h2>
          <p>Easy Integration with your CRM or Timesheet solution using the Konquest API.</p>
          <Partners/>
        </section>
        <section className="customers">
          <h2>Loved by</h2>
          <Logos/>
          <RequestDemo/>
        </section>
      </Layout>
    )
  }
};

export default IndexPage;