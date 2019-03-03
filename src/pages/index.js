import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

import "./index.scss";

class IndexPage extends React.Component {
  render() {
    return (
      <Layout className="home">
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]}/>
        <div className="contents">
          <div className="intro">
            <h1>Commission. Sorted.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium orci magna, eu rutrum nulla volutpat
              eget. Duis non massa iaculis, euismod nunc quis, egestas metus. </p>
            <button type="button">Btn Text</button>
          </div>
        </div>
      </Layout>
    )
  }
};

export default IndexPage;