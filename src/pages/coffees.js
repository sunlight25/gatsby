import React from "react"
import Layout from "../components/layout"

const CoffeesPage = ({data}) => (
  <Layout>
  <div>
    <h1>Different types of coffee</h1>
    { data.allNodeArticle.edges.map(({ node }) => (
      <div>
        <h3>{ node.title }</h3>
        <div dangerouslySetInnerHTML={{ __html: node.body.value }} />
      </div>
    ))}
  </div>
  </Layout>
)


export const query = graphql`
  query allNodeArticle {
    allNodeArticle {
      edges {
        node {
          id
          title
          body {
            value
            format
            processed
            summary
          }
        }
      }
    }
  }
`
export default CoffeesPage