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
  uri: "https://48p1r2roz4.sse.codesandbox.io"
});

function ExchangeRates() {
  const { loading, error, data } = useQuery(gql`
    {
      rates(currency: "USD") {
        currency
        rate
      }
    }
  `);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.rates.map(({ currency, rate }) => (
    <div key={currency}>
      <p>
        {currency}: {rate}
      </p>
    </div>
  ));
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
