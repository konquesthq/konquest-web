import React from "react"
import {graphql} from "gatsby"
import * as PropTypes from "prop-types"
import Layout from "../components/layout"

const propTypes = {
  data: PropTypes.object.isRequired,
};

class ResourceItemTemplate extends React.Component {
  render() {
    const resourceItem = this.props.data.contentfulResourceItem;
    return (
      <Layout>
        <h1>{resourceItem.title}</h1>
      </Layout>
    )
  }
}

ResourceItemTemplate.propTypes = propTypes;

export default ResourceItemTemplate;

export const resourceItemQuery = graphql`
  query($id: String!) {
    contentfulResourceItem(id: { eq: $id }) {
      title
    }
  }
`;