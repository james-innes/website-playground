import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default () => {

    var varible = 192;

    const query {
        allFile(filter: { relativeDirectory: { eq: "images" } }) {
            edges {
                node {
                    childImageSharp {
                        fluid(maxWidth: 192, maxHeight: 144) {
                                ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }

const data = useStaticQuery(graphql`query`)


return (
    <div className="gallery">
        {data.allFile.edges.map(edge =>
            <Img fluid={edge.node.childImageSharp.fluid} />
        )}
    </div>
)
}