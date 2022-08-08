import React from "react";
import SEO from "../components/seo";
import HomeAudit from "../components/updated/home/audit";
import HomeCustomers from "../components/updated/home/customers";
import HomeFeatures from "../components/updated/home/features";
import HomeIntro from "../components/updated/home/intro";
import HomePartners from "../components/updated/home/partners";
import HomeSummary from "../components/updated/home/summary";
import HomeTargets from "../components/updated/home/targets";
import HomeTestimonial from "../components/updated/home/testimonial";
import Layout from "../components/updated/layout.updated";
import "./home.scss";

const Home: React.FC = () => {
  return (
    <Layout className={`home`}>
      <SEO title="Home" keywords={[`konquest`, `commission`, `sales`, `recruitment`]} />
      <HomeIntro />
      <HomeCustomers />
      <HomeSummary />
      <HomeFeatures />
      <HomeAudit />
      <HomeTargets />
      <HomeTestimonial />
      <HomePartners />
    </Layout>
  );
};

export default Home;
