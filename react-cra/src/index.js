import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index";

import Routes from "./pages/routes.js";
import Navigation from "./components/Navigation.js";

import ApolloClient from "apollo-boost";
import { ApolloProvider, useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

import Img from "gatsby-image";

const client = new ApolloClient({
  uri: "http://localhost:8000/___graphql"
});

function ExchangeRates() {
  /*  const { loading, error, data } = useQuery(gql`
    {
      allFile(filter: { relativeDirectory: { eq: "images" } }) {
        edges {
          node {
            absolutePath
          }
        }
      }
    } 
  `); */

  const { loading, error, data } = useQuery(gql`
    {
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
  `);

  // ello ello ello

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  /*   console.log(data.allFile.edges); */

  data.allFile.edges.map(node => console.log(node.node.childImageSharp));
  /* data.allFile.edges.map(node => console.log(node.node.absolutePath));
   */
  console.log(data);
  /* return <div>nothing yet happy</div>; */

  /*   return data.allFile.edges.map(node => (
    <div>
      <p>
        {node}: {node.childImageSharp.fluid.originalName}
      </p>
    </div>
  )); */

  return (
    <div className="gallery">
      {data.allFile.edges.map(edge => (
        <Img fluid={edge.node.childImageSharp.fluid} />
      ))}
    </div>
  );
}

/* data": {
  "allFile": {
    "edges": [
      {
        "node": {
          "childImageSharp": {
            "fluid": {
              "originalName": "2.jpg"
            }
          }
        }
      },
      { */

ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <Navigation />
      <ExchangeRates />
      <div>what is going on</div>
      <Routes />
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
