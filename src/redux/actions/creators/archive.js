import { SET_ARCHIVE, DEL_EVENT_BY_ID } from '../types/action-types';

export const setArchive = (newArchive) => ({
  type: SET_ARCHIVE,
  payload: newArchive,
});
export const delEventByID = (id) => ({
  type: DEL_EVENT_BY_ID,
  payload: id,
});
