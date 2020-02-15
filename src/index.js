import { ApolloProvider } from "@apollo/react-hooks";
import App from "./components/App";
import React from "react";
import ReactDOM from "react-dom";
import clinet from "./apollo";

ReactDOM.render(
  <ApolloProvider client={clinet}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
