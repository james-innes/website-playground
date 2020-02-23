import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

import Routes from "./pages/routes";
import Navigation from "./components/Navigation";

import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from "@apollo/react-hooks";

const httpLink = createHttpLink({
  uri: "http://localhost:8000/___graphql"
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: httpLink
});

ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <Navigation />
      <Routes />
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
