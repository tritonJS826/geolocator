import { ADD_EVENT_TO_ARCHIVE, DEL_EVENT_FROM_ARCHIVE } from '../types/action-types';

export const addEventToArcive = (event) => ({
  action: ADD_EVENT_TO_ARCHIVE,
  payload: event,
});

export const delEvemtFromArchive = (eventId) => ({
  action: DEL_EVENT_FROM_ARCHIVE,
  payload: eventId,
});
