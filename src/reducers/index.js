import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import counter from './counter';
import clients from './clients';

const rootReducer = combineReducers({
  counter,
  routing,
  clients
});

export default rootReducer;
