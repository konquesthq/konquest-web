import React from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]}/>
        <h1>Commission. Sorted.</h1>
        <div style={{maxWidth: `300px`, marginBottom: `1.45rem`}}>
          <Image />
        </div>
      </Layout>
    )
  }
};

export default IndexPage;