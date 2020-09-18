import AsyncStorage from '@react-native-community/async-storage';

import store from '../redux/redux-store';

import { ICurrentEvent } from '../interfaces/currentEvent/ICurrentEvent';
import { setArchive } from '../redux/actions/creators/archive';

export const readArchFromStorage = () => async (dispatch: any) => {
  const archiveRaw = await AsyncStorage.getItem('archive');
  const archive = archiveRaw != null ? JSON.parse(archiveRaw) : [];
  dispatch(setArchive(archive))
};

export const writeArchToStorage = (archive: ICurrentEvent[]) => {
  const archiveStringify = JSON.stringify(archive);
  AsyncStorage.setItem('archive', archiveStringify);
};

export const delEventById = (id:string | undefined) => {
  if (!id) throw Error(`bad id type: ${typeof id}`);
  const newArchive = store.getState().archive.archive.filter((el: ICurrentEvent) => el.id !== id);
  writeArchToStorage(newArchive);
}
