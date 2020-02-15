import { Route, HashRouter as Router } from "react-router-dom";

import Detail from "../routes/Detail";
import Home from "../routes/Home";
import React from "react";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/:id" component={Detail} />
    </Router>
  );
}

export default App;
