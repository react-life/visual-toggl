import { createReducer } from 'redux-create-reducer';
import { UPDATE_CLIENTS } from '../actions/clients';

const initialState = [];

export default createReducer(initialState, {
  [UPDATE_CLIENTS](state) {
    return {
    	...state
    }
  }
});
