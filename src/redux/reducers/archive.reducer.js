import {
  ADD_EVENT_TO_ARCHIVE,
} from '../actions/types/action-types';

const initialState = {
  archive: [],
};

const userDataReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_EVENT_TO_ARCHIVE:
      return {
        ...state,
        archive: [state.archive, payload],
      };
    default:
      return state;
  }
};
export default userDataReducer;
