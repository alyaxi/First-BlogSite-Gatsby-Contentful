import React from 'react'
import {graphql , Link} from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo";
import { renderRichText } from "gatsby-source-contentful/rich-text"



export const query  = graphql`
    query($slug: String!) {
        contentfulBlogSpot(slug: { eq: $slug }) {
        title
        publishedDate(formatString: "Do MM, YYYY")
        featuredImage {
            fluid(maxWidth: 750) {
            ...GatsbyContentfulFluid
            }
        }
        body{
            raw
        }
        }
    }
    `


const BlogPost = props => {
    const options = {
        renderNode: {
          "embedded-asset-block": node => {
            const alt = node.data.target.fields.title["en-US"]
            const url = node.data.target.fields.file["en-US"].url
            return <img alt={alt} src={url} />
          },
        },
      }
    console.log(props);
    return (
        <Layout>
               <SEO title={props.data.contentfulBlogSpot.title} />
               <Link to="/blog/">Visit to Blog Page</Link>    
               <div className="content">
                   <h1>{props.data.contentfulBlogSpot.title}</h1>
                   <span className="meta">
                      Published on: {props.data.contentfulBlogSpot.publishedDate}
                   </span>
                     {props.data.contentfulBlogSpot.featuredImage && (
                         <Img
                         className="featured"
                         fluid={props.data.contentfulBlogSpot.featuredImage.fluid}
                         alt={props.data.contentfulBlogSpot.title}/>

                     )}
                     {renderRichText(props.data.contentfulBlogSpot.body)}              
               </div>
        </Layout>
    )
}
export default BlogPost