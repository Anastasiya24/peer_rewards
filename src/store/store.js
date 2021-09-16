import { configureStore } from '@reduxjs/toolkit';
import { routerMiddleware, connectRouter } from 'connected-react-router';
import thunk from 'redux-thunk';
import { user } from './reducers';
import history from './history';

export default configureStore({
  reducer: {
    router: connectRouter(history),
    user,
  },
  middleware: [routerMiddleware(history), thunk],
});
