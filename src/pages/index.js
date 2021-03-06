import React from "react"
import Layout from "../components/layout"
import Imageicon from "../images/gatsby-astronaut.png"

const AllBasicPage = ({data}) => (
  <Layout>
  <div>
    <h1>Different types of coffee</h1>
    { data.allNodePage.edges.map(({ node }) => (
      <div>
        <h3>{ node.title }</h3>
        <div dangerouslySetInnerHTML={{ __html: node.body.value }} />
        <img src ={Imageicon}  width="200px" height="200px" alt="test ttst"/>
      </div>
    ))}
  </div>
  </Layout>
)
export const query = graphql`
  query allNodePage {
    allNodePage {
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
export default AllBasicPage