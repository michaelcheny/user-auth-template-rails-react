import React from "react";
import UserProvider from "./context/UserContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DashboardPage from "./containers/DashboardPage";
import LoginPage from "./containers/LoginPage";

function App() {
  return (
    <UserProvider>
      <Router>
        <Switch>
          <Route path="/" component={LoginPage} />
          <Route path="/dashboard" component={DashboardPage} />
        </Switch>
      </Router>
    </UserProvider>
  );
}

export default App;
