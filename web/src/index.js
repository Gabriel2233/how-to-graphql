import React from "react";
import ReactDOM from "react-dom";
import App from "./pages/App";

import { SearchContextProvider } from './contexts/SearchContext'

import {
  ApolloProvider,
  InMemoryCache,
  HttpLink,
  ApolloClient,
} from "@apollo/client";

import { setContext } from "apollo-link-context";
import { AUTH_TOKEN } from "./constants";

const httpLink = new HttpLink({
  uri: "http://localhost:4000",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem(AUTH_TOKEN);
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <SearchContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    </SearchContextProvider>
  </ApolloProvider>,
  document.getElementById("root")
);
