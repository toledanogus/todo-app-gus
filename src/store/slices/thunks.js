import {store} from '../store';

export const tuThunkAction = () => (dispatch, getState) => {
    const state = getState();
    const nuevaTarea = state.tarea.nuevaTarea;
    console.log(nuevaTarea);
  };