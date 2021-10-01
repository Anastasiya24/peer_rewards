import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { HomePage, EmployeePage, MyAccountPage, NotFoundPage } from 'pages';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/employee" component={EmployeePage} />
      <Route exact path="/my-account" component={MyAccountPage} />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  );
}

export default withRouter(App);
