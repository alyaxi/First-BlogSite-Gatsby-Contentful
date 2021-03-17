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
 
    console.log(props);
    return (
        <Layout>
               <SEO title={props.data.contentfulBlogSpot.title} />
               <p>
               <Link to="/blog/" style={{ color: "#810000"}}>Visit to Blog Page</Link> 
               </p>
               <br/>  
               <hr/> 
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
               <hr/>
        </Layout>
    )
}
export default BlogPost