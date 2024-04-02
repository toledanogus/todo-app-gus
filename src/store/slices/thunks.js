import { tareaApi } from '../../api/tareaApi';
import {store} from '../store';
import { setTareas, setTarea } from './tareaSlice';

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

};

export const getTarea = () => async (dispatch, getState) => {
    const state = getState();
    const tareaID = state.tarea.tareaID;

    const jsonFiltro = new Object();
    jsonFiltro['tareaID'] = tareaID;

    const {data} = await tareaApi.post (`/getTareaID.php`, jsonFiltro);
    /* console.log(`Obtenidas del mysql PARA UNAAAAA${data}`); */
    dispatch(setTarea({tarea: data}));

};

export const deleteTarea = () => async (dispatch, getState) => {
    const state = getState();
    const tareaID = state.tarea.tareaID;

    const jsonFiltro = new Object();
    jsonFiltro['tareaID'] = tareaID;

    const {data} = await tareaApi.post (`/borrarTarea.php`, jsonFiltro);
    console.log(`Obtenidas del mysql Nada de nada${data}`);
};

export const editTarea = () => async (dispatch, getState) => {
    const state = getState();
    const tareaID = state.tarea.tareaID;
    const tareaEditada = state.tarea.tareaEditada;
    console.log(`Por que cero no existe${tareaEditada}`);

    const jsonEditada = new Object();
    jsonEditada['tareaID'] = tareaID;
    jsonEditada['title'] = tareaEditada[0];
    jsonEditada['description'] = tareaEditada[1];
    jsonEditada['priority'] = tareaEditada[2];
    jsonEditada['fecha'] = tareaEditada[3];

    const {data} = await tareaApi.post (`/editarTarea.php`, jsonEditada);
    /* console.log(`Obtenidas del mysql Nada de nada${data}`); */
};

export const sendSolved = () => async (dispatch, getState) => {
    const state = getState();
    const solved = state.tarea.solved;

    const jsonSolved = new Object();
    jsonSolved['solved'] = solved;
    console.log(`Esto voy a asignar al JSON: ${solved}`);
    const {data} = await tareaApi.post (`/enviarResueltas.php`, jsonSolved);
    console.log(`Obtenidas del mysql Nada de nada${data}`);
};
