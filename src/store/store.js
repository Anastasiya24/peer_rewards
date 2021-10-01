import { configureStore } from '@reduxjs/toolkit';
import { routerMiddleware, connectRouter } from 'connected-react-router';
import thunk from 'redux-thunk';
import rewarding from './reducers/rewarding';
import history from './history';

export default configureStore({
  reducer: {
    router: connectRouter(history),
    rewarding,
  },
  middleware: [routerMiddleware(history), thunk],
});
