import React from "react";
import ReactDOM from "react-dom";
import App from "./pages/App";

import {
  ApolloProvider,
  InMemoryCache,
  HttpLink,
  ApolloClient,
} from "@apollo/client";

const httpLink = new HttpLink({
  uri: "http://localhost:4000",
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById("root")
);
