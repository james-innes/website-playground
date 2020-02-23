import React from "/web_modules/react.js";
import ReactDOM from "/web_modules/react-dom.js";
import { BrowserRouter } from "/web_modules/react-router-dom.js";
import Routes from "./routes.js";
import Navigation from "./Navigation.js";
import ApolloClient from "/web_modules/apollo-boost.js";
import { ApolloProvider, useQuery } from "/web_modules/@apollo/react-hooks.js";
import gql from "/web_modules/graphql-tag.js";
const client = new ApolloClient({
  uri: "https://48p1r2roz4.sse.codesandbox.io"
});

function ExchangeRates() {
  const {
    loading,
    error,
    data
  } = useQuery(gql`
    {
      rates(currency: "USD") {
        currency
        rate
      }
    }
  `);
  if (loading) return React.createElement("p", null, "Loading...");
  if (error) return React.createElement("p", null, "Error :(");
  return data.rates.map(({
    currency,
    rate
  }) => React.createElement("div", {
    key: currency
  }, React.createElement("p", null, currency, ": ", rate)));
}

ReactDOM.render(React.createElement(BrowserRouter, null, React.createElement(ApolloProvider, {
  client: client
}, React.createElement(Navigation, null), React.createElement(ExchangeRates, null), React.createElement("div", null, "what is going on"), React.createElement(Routes, null))), document.getElementById("root"));