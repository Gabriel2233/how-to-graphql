import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import CreateAccount from "../pages/CreateAccount";

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/create-account" component={CreateAccount} />
      </Switch>
    </Router>
  );
};
