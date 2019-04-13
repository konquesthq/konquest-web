import React from "react";
import PropTypes from 'prop-types';
import Layout from "../components/layout";
import SEO from "../components/seo";
import Logos from "../components/logos";
import RequestDemo from "../components/requestDemo";
import Partners from '../components/partners';
import OpenContactButton from '../components/openContactButton';
import Img from "gatsby-image";

import "./index.scss";
import {graphql} from "gatsby";

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
              <h1>{this.props.data.home.displayTitle}</h1>
              <p>{this.props.data.home.introText.introText}</p>
              <OpenContactButton>{this.props.data.home.ctaText}</OpenContactButton>
            </div>
            <Img className="img" fluid={this.props.data.home.image.fluid}/>
          </div>
          <PersonaSection className="commercial" isShown={this.isSectionOpen('Commercial')}>
            <h2>{this.props.data.commercial.displayTitle}</h2>
            <div className="columns">
              <div className="details">
                <ul>
                  <li className="automation">
                    <h3>{this.props.data.commercial.automationTitle}</h3>
                    <p>{this.props.data.commercial.automationText.automationText}</p>
                  </li>
                  <li className="flexibility">
                    <h3>{this.props.data.commercial.flexibilityTitle}</h3>
                    <p>{this.props.data.commercial.flexibilityText.flexibilityText}</p>
                  </li>
                  <li className="performance">
                    <h3>{this.props.data.commercial.performanceTitle}</h3>
                    <p>{this.props.data.commercial.performanceText.performanceText}</p>
                  </li>
                </ul>
                <p>{this.props.data.commercial.introText.introText}</p>
              </div>
              <div className="demo">
                <Img className="img" fluid={this.props.data.commercial.image.fluid}/>
                <p>{this.props.data.commercial.introText.introText}</p>
                <OpenContactButton>{this.props.data.commercial.ctaText}</OpenContactButton>
              </div>
            </div>
          </PersonaSection>
          <PersonaSection className="operations" isShown={this.isSectionOpen('Operations')}>
            <h2>{this.props.data.operations.displayTitle}</h2>
            <p>{this.props.data.operations.introText.introText}</p>
            <ul>
              <li className="auto-calc">
                <h3>{this.props.data.operations.autoCalculationTitle}</h3>
                <p>{this.props.data.operations.autoCalculationText.autoCalculationText}</p>
              </li>
              <li className="central-data">
                <h3>{this.props.data.operations.centralisedDataTitle}</h3>
                <p>{this.props.data.operations.centralisedDataText.centralisedDataText}</p>
              </li>
              <li className="secure-auto">
                <h3>{this.props.data.operations.secureAutomationTitle}</h3>
                <p>{this.props.data.operations.secureAutomationText.secureAutomationText}</p>
              </li>
              <li className="crm">
                <h3>{this.props.data.operations.crmTitle}</h3>
                <p>{this.props.data.operations.crmText.crmText}</p>
              </li>
            </ul>
            <OpenContactButton>{this.props.data.operations.ctaText}</OpenContactButton>
          </PersonaSection>
          <PersonaSection className="finance" isShown={this.isSectionOpen('Finance')}>
            <div className="description">
              <h2>{this.props.data.finance.displayTitle}</h2>
              <p>{this.props.data.finance.introText.introText}</p>
              <Img className="img" fluid={this.props.data.finance.image.fluid}/>
            </div>
            <div className="details">
              <ul>
                <li className="accuracy">
                  <h3>{this.props.data.finance.accuracyTitle}</h3>
                  <p>{this.props.data.finance.accuracyText.accuracyText}</p>
                </li>
                <li className="audits">
                  <h3>{this.props.data.finance.auditsTitle}</h3>
                  <p>{this.props.data.finance.auditsText.auditsText}</p>
                </li>
                <li className="forecasting">
                  <h3>{this.props.data.finance.forecastingTitle}</h3>
                  <p>{this.props.data.finance.forecastingText.forecastingText}</p>
                </li>
                <li className="productivity">
                  <h3>{this.props.data.finance.productivityTitle}</h3>
                  <p>{this.props.data.finance.productivityText.productivityText}</p>
                </li>
              </ul>
              <RequestDemo/>
            </div>
          </PersonaSection>
          <PersonaSection className="sales" isShown={this.isSectionOpen('Sales')}>
            <div className="details">
              <h2>{this.props.data.sales.displayTitle}</h2>
              <p>{this.props.data.sales.introText.introText}</p>
              <ul>
                <li className="motivation">
                  <h3>{this.props.data.sales.motivationTitle}</h3>
                  <p>{this.props.data.sales.motivationText.motivationText}</p>
                </li>
                <li className="focus">
                  <h3>{this.props.data.sales.focusTitle}</h3>
                  <p>{this.props.data.sales.focusText.focusText}</p>
                </li>
              </ul>
              <OpenContactButton>{this.props.data.sales.ctaText}</OpenContactButton>
            </div>
            <Img className="img" fluid={this.props.data.sales.image.fluid}/>
          </PersonaSection>
          <nav className="persona-navigation">
            <ul>
              <PersonaNavigationItem title="Commercial" isSelected={this.isSectionOpen('Commercial')}
                                     onNavigate={this.handlePersonaNavigate}>
                <p>{this.props.data.commercial.navigationText}</p>
              </PersonaNavigationItem>
              <PersonaNavigationItem title="Operations" isSelected={this.isSectionOpen('Operations')}
                                     onNavigate={this.handlePersonaNavigate}>
                <p>{this.props.data.operations.navigationText}</p>
              </PersonaNavigationItem>
              <PersonaNavigationItem title="Finance" isSelected={this.isSectionOpen('Finance')}
                                     onNavigate={this.handlePersonaNavigate}>
                <p>{this.props.data.finance.navigationText}</p>
              </PersonaNavigationItem>
              <PersonaNavigationItem title="Sales" isSelected={this.isSectionOpen('Sales')}
                                     onNavigate={this.handlePersonaNavigate}>
                <p>{this.props.data.sales.navigationText}</p>
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
          <h2>{this.props.data.home.benefitsTitle}</h2>
          <blockquote>
            {this.props.data.quote.quote.quote}
            <cite>{this.props.data.quote.citationPerson}, <span className="company">{this.props.data.quote.citationCompany}</span></cite>
          </blockquote>
          <ul className="benefits-list">
            {this.props.data.benefits.edges.map(({node}) => (
              <li>
                <h3>{node.displayTitle}</h3>
                <div
                  dangerouslySetInnerHTML={{
                    __html: node.text.childContentfulRichText.html,
                  }}
                />
              </li>
            ))}
          </ul>
        </section>
        <section className="partners">
          <h2>{this.props.data.home.partnersTitle}</h2>
          <p>{this.props.data.home.partnersText.partnersText}</p>
          <Partners/>
        </section>
        <section className="customers">
          <h2>{this.props.data.home.customersTitle}</h2>
          <Logos/>
          <RequestDemo/>
        </section>
      </Layout>
    )
  }
};

export default IndexPage;

export const indexQuery = graphql`
  query {
    home: contentfulHome(title: { eq: "Home" }) {
      displayTitle,
      image {
        fluid(maxWidth: 800) {
          ...GatsbyContentfulFluid
        }
      },
      introText {
        introText
      },
      ctaText,
      benefitsTitle,
      partnersTitle,
      partnersText {
        partnersText
      },
      customersTitle
    }
    commercial: contentfulCommercialPersona(title: { eq: "Persona - Commercial" }) {
      displayTitle,
      navigationText,
      image {
        fluid(maxWidth: 800) {
          ...GatsbyContentfulFluid
        }
      },
      introText {
        introText
      },
      ctaText,
      automationTitle,
      automationText {
        automationText
      },
      flexibilityTitle,
      flexibilityText {
        flexibilityText
      },
      performanceTitle,
      performanceText {
        performanceText
      }
    }
    operations: contentfulOperationsPersona(title: { eq: "Persona - Operations" }) {
      displayTitle,
      navigationText,
      introText {
        introText
      },
      ctaText,
      autoCalculationTitle,
      autoCalculationText {
        autoCalculationText
      },
      centralisedDataTitle,
      centralisedDataText {
        centralisedDataText
      },
      secureAutomationTitle,
      secureAutomationText {
        secureAutomationText
      },
      crmTitle,
      crmText {
        crmText
      }
    }
    finance: contentfulFinancePersona(title: { eq: "Persona - Finance" }) {
      displayTitle,
      navigationText,
      image {
        fluid(maxWidth: 800) {
          ...GatsbyContentfulFluid
        }
      },
      introText {
        introText
      },
      accuracyTitle,
      accuracyText {
        accuracyText
      },
      auditsTitle,
      auditsText {
        auditsText
      },
      forecastingTitle,
      forecastingText {
        forecastingText
      },
      productivityTitle,
      productivityText {
        productivityText
      }
    }
    sales: contentfulSalesPersona(title: { eq: "Persona - Sales" }) {
      displayTitle,
      navigationText,
      image {
        fluid(maxWidth: 800) {
          ...GatsbyContentfulFluid
        }
      },
      introText {
        introText
      },
      ctaText,
      motivationTitle,
      motivationText {
        motivationText
      },
      focusTitle,
      focusText {
        focusText
      }
    }
    benefits: allContentfulBenefit(sort: { fields: [createdAt], order: [ASC]}) {
      edges {
        node {
          displayTitle,
          text {
            childContentfulRichText {
              html
            }
          }
        }
      }
    }
    quote: contentfulQuote(title: { eq: "Quote" }) {
      quote {
        quote
      },
      citationPerson,
      citationCompany
    }
  }
`;