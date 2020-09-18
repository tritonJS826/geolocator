import {
  SET_ARCHIVE,
  DEL_EVENT_BY_ID,
} from '../actions/types/action-types';

const initialState = {
  archive: [],
};

const userDataReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_ARCHIVE:
      return {
        ...state,
        archive: payload,
      };
    case DEL_EVENT_BY_ID:
      return {
        ...state,
        archive: state.archive.filter(({ id }) => id !== payload),
      };
    default:
      return state;
  }
};
export default userDataReducer;
