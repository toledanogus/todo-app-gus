import { tareaApi } from '../../api/tareaApi';
import {store} from '../store';
import { setTareas } from './tareaSlice';

export const registrarEnBase = () => async (dispatch, getState) => {
    const state = getState();
    const nuevaTarea = state.tarea.nuevaTarea;
    console.log(nuevaTarea);

    const jsonTarea = new Object();
    jsonTarea['title'] = nuevaTarea[0];
    jsonTarea['description'] = nuevaTarea[1];
    jsonTarea['category'] = nuevaTarea[2];
    jsonTarea['priority'] = nuevaTarea[3];
    jsonTarea['limitDate'] = nuevaTarea[4];

    const {data} = await tareaApi.post (`/registrarTarea.php`, jsonTarea);
    console.log(data);
};

export const getTareas = () => async (dispatch, getState) => {
    const state = getState();
    const filtro = state.tarea.filtro;

    const jsonFiltro = new Object();
    jsonFiltro['filter'] = filtro;

    const {data} = await tareaApi.post (`/getTareas.php`, jsonFiltro);
    console.log(`Obtenidas del mysql ${data}`);
    dispatch(setTareas({tareas: data}));

}