import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

export default ({ data }) => (
  <article>
    <header>
      <h1>Waldorf Education</h1>
      <p>7 - 16 years at Ringwood Waldorf School</p>
    </header>

    {/* <div class="gallery">
      <Img fixed={data.file.childImageSharp.fixed} />
    </div> */}


    {/* <div class="gallery">
      {[1, 3, 4, 5, 6].map(x => (
        <img src={`./assets/img/${x}.jpg`} />
      ))}
    </div>

    <div class="gallery">
      {urls.map(x => (
        <img src={x} />
      ))}
    </div> */}

  </article >
);

// export const query = graphql`
//   query {
//     file(relativePath: { eq: "images/1.jpg" }) {
//       childImageSharp {
//         fixed(width: 192, height: 144) {
//           ...GatsbyImageSharpFixed
//         }
//       }
//     }
//   }
// `