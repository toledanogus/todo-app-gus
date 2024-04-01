import { createSlice } from '@reduxjs/toolkit'

export const tareaSlice = createSlice({
name: 'tarea',
  initialState:{
    counter: 10,
    nuevaTarea:'',
    filtro:'',
    tareas: '',
  },
  reducers: {
    setNuevaTarea: (state, action) => {
      state.nuevaTarea = action.payload.nuevaTarea;
    },
    setFiltro: (state, action) => {
      state.filtro = action.payload;
    },
    setTareas: (state, action) => {
      state.tareas = action.payload.tareas;
    }
  },
})
// Action creators are generated for each case reducer function
export const { setNuevaTarea, setFiltro, setTareas} = tareaSlice.actions