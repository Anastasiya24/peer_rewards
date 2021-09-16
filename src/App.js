import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import { HomePage, NotFoundPage } from 'pages';
import { getUser } from 'store/reducers/user/service';
import { getUserId } from 'services/getUserId';

function App() {
  const id = getUserId();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser(id));
  }, []);

  const name = useSelector(({ user }) => user.name);

  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  );
}

export default withRouter(App);