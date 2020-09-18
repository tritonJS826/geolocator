import { combineReducers } from 'redux';
// import { routerReducer } from 'react-router-redux';

import currentEvent from './currentEvent.reducer';
import archive from './archive.reducer'

const reducers = combineReducers({
  currentEvent,
  archive,
});

export default reducers;
