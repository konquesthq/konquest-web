import React from "react";
import SEO from "../components/seo";
import HomeFeatures from "../components/updated/home/features";
import HomeIntro from "../components/updated/home/intro";
import HomeSummary from "../components/updated/home/summary";
import Layout from "../components/updated/layout.updated";
import "./home.scss";

const Home: React.FC = () => {
  return (
    <Layout className={`home`}>
      <SEO title="Home" keywords={[`konquest`, `commission`, `sales`, `recruitment`]} />
      <HomeIntro />
      <HomeSummary />
      <HomeFeatures />
    </Layout>
  );
};

export default Home;
