const path = require(`path`);
const slash = require(`slash`);

exports.createPages = ({graphql, actions}) => {
  const {createPage} = actions;
  return graphql(
    `
      {
        allContentfulResourceItem(limit: 1000) {
          edges {
            node {
              id
            }
          }
        }
      }
    `
  )
    .then(result => {
      if (result.errors) {
        throw result.errors
      }

      const resourceTemplate = path.resolve(`./src/templates/resource.js`);
      result.data.allContentfulResourceItem.edges.forEach(edge => {
        createPage({
          path: `/resources/${edge.node.id}/`,
          component: slash(resourceTemplate),
          context: {
            id: edge.node.id,
          }
        })
      })
    })
};