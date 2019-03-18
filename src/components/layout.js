import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import Footer from "./footer"
import Contact from './contact';
import "./layout.scss"
import "./infoLayout.scss"

const getScrollNode = (element) => {
  return element.ownerDocument.scrollingElement || element.ownerDocument.documentElement;
};

const isScrolled = (element) => {
  const scrollNode = getScrollNode(element);
  return scrollNode.scrollTop > 0;
};

const isPageDown = (element) => {
  const scrollNode = getScrollNode(element);
  return scrollNode.scrollTop >= scrollNode.clientHeight;
};

const isOnBottom = (element) => {
  const scrollNode = getScrollNode(element);
  return scrollNode.scrollHeight <= scrollNode.clientHeight + scrollNode.scrollTop;
};

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.siteContainer = React.createRef();
    this.state = {
      pageDown: false,
      onBottom: false,
      scrolled: false
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    const element = this.siteContainer.current;
    this.setState({
      pageDown: isPageDown(element),
      onBottom: isOnBottom(element),
      scrolled: isScrolled(element)
    });
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll() {
    const element = this.siteContainer.current;
    this.setState({
      pageDown: isPageDown(element),
      onBottom: isOnBottom(element),
      scrolled: isScrolled(element)
    });
  }

  render() {
    let className = "site-container";
    if(this.props.className) className += ` ${this.props.className}`;
    if(this.state.onBottom) className += ' bottom';
    if(this.state.pageDown) className += ' page-down';
    if(this.state.scrolled) className += ' scrolled';

    return (
      <div
        className={className}
        ref={this.siteContainer}>
        <Header/>
        <main>{this.props.children}</main>
        <Footer/>
        <Contact/>
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};