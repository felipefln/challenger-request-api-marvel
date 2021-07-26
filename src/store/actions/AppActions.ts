import { Dispatch } from 'redux';

export const addFavorite = (character: object) => (dispatch: Dispatch) => {
  dispatch({ type: 'ADD_FAVORITE', payload: { character } });
};

export const delFavorite = (id: string) => (dispatch: Dispatch) => {
  dispatch({ type: 'DEL_FAVORITE', payload: { id } });
};
