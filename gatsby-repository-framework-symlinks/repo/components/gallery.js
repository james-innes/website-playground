import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const Gallery = ({relativePath}) => {

  const cats = "/cats/"

  const data = useStaticQuery(graphql`
    query {
        allFile(filter: {childImageSharp: {fluid: {}}, extension: {in: ["jpg", "jpeg", "png"]}, relativeDirectory: {regex: $cats }}) {
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
  `);

  return (
    <div className="gallery">
      {data.allFile.edges.map(edge => (
        <Img fluid={edge.node.childImageSharp.fluid} />
      ))}
    </div>
  );
};

export default Gallery;
