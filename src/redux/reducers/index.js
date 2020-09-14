import { combineReducers } from 'redux';
// import { routerReducer } from 'react-router-redux';

import archive from './archive.reducer';

const reducers = combineReducers({
  archive,
});

export default reducers;
