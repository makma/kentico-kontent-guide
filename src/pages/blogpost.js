import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Blogpost() {
    const data = useStaticQuery(graphql`
    query MyQuery {
        allKontentItemBlogpost {
          nodes {
            elements {
              subtitle {
                value
              }
              title {
                value
              }
            }
          }
        }
      }
      
  `)

  console.log(JSON.stringify(data.allKontentItemBlogpost.nodes[0].elements.title));

    return (
        <Layout>
        <SEO title="Blogpost" />
        <h1>{data.allKontentItemBlogpost.nodes[0].elements.title.value}</h1>
        <br/>
        <h2>{data.allKontentItemBlogpost.nodes[0].elements.subtitle.value}</h2>
        <p>Welcome to page 2</p>
      </Layout>
    )
}