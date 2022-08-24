import React, { useEffect } from "react";
import Contact from "../contact";
import Footer from "../footer";
import "../infoLayout.scss";
import Header from "./header.updated";
import "./layout.updated.scss";

import clsx from "clsx";

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

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Layout: React.FC<Props> = ({ children, className }) => {
  const siteContainer = React.useRef<HTMLDivElement>(null);
  const [scrolled, setIsScrolled] = React.useState(false);
  const [pageDown, setIsPageDown] = React.useState(false);
  const [onBottom, setIsOnBottom] = React.useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    const element = siteContainer.current;

    setIsPageDown(isPageDown(element));
    setIsOnBottom(isOnBottom(element));
    setIsScrolled(isScrolled(element));

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [siteContainer.current]);

  const handleScroll = () => {
    const element = siteContainer.current;
    setIsPageDown(isPageDown(element));
    setIsOnBottom(isOnBottom(element));
    setIsScrolled(isScrolled(element));
  };

  return (
    <div
      className={clsx(
        "site-container",
        className,
        scrolled && "scrolled",
        pageDown && "page-down",
        onBottom && "on-bottom"
      )}
      ref={siteContainer}>
      <Header />
      <main>{children}</main>
      <Footer />
      <Contact />
    </div>
  );
};

export default Layout;