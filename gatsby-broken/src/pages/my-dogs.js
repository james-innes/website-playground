import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default () => {
  //   const data = useStaticQuery(graphql`
  //   query MyQuery {
  //     file(relativePath: { eq: "images/1.jpg" }) {
  //       childImageSharp {
  //         # Specify the image processing specifications right in the query.
  //         fluid {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //   }
  // `)
    return (
        <div>
            {/* <h1>I love my Cat!</h1>
            <Img
                fluid={data.file.childImageSharp.fluid}
                alt="A Cat smiling happily"
            /> */}
        </div>
    )
}