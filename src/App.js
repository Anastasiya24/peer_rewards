import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import { HomePage, EmployeePage, MyAccountPage, NotFoundPage } from 'pages';
import { loadRewarding } from 'store/reducers/rewarding';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadRewarding());
  }, []);

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
