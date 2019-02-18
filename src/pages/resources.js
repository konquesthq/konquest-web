import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ResourceItem = ({resourceItem}) => (
  <div>
    <Link to={`/resources/${resourceItem.id}`}>{resourceItem.title}</Link>
  </div>
);

class ResourceListPage extends React.Component {
  render() {
    const resourceItems = this.props.data.allContentfulResourceItem.edges;
    return (
      <Layout>
        <SEO title="Resources" keywords={[`resources`, `blog`]}/>
        <h1>Resource Items</h1>
        <p>Resources will go here...</p>
        {resourceItems.map(({node}, i) => (
          <ResourceItem resourceItem={node} key={node.id} />
        ))}
      </Layout>
    )
  }
}

export default ResourceListPage

export const resourceQuery = graphql`
  {
    allContentfulResourceItem {
      edges {
        node {
          id,
          title
        }
      }
    }
  }
`;