import gql from "graphql-tag";

export const GetImages = gql`
  query GetImages {
    allFile(filter: { relativeDirectory: { eq: "img" } }) {
      edges {
        node {
          relativePath
        }
      }
    }
  }
`;
