import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index";

import Routes from "./pages/routes.js";
import Navigation from "./components/Navigation.js";

import ApolloClient from "apollo-boost";
import { ApolloProvider, useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

const client = new ApolloClient({
  uri: "http://localhost:8000/___graphql"
});

function ExchangeRates() {
  const { loading, error, data } = useQuery(gql`
    {
      allFile(filter: { relativeDirectory: { eq: "images" } }) {
        edges {
          node {
            absolutePath
          }
        }
      }
    }
  `);

  data.allFile.map(edges => console.log(edges));

  console.log(data.allFile);

  return <div className="gallery"></div>;
}

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
