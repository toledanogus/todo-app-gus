import { createSlice } from '@reduxjs/toolkit'

export const tareaSlice = createSlice({
name: 'tarea',
  initialState:{
    counter: 10,
    timer: 11,
    nuevaTarea:'',
  },
  reducers: {
    increment: (state) => {
      state.counter += 1;
      state.timer = 'Gus'
    },
    decrement: (state) => {
        state.counter -=1
    },
    incrementby2: (state, action) => {
        state.counter += action.payload;
    },
    setNuevaTarea: (state, action) => {
      state.nuevaTarea = action.payload.nuevaTarea;
    }
  },
})
// Action creators are generated for each case reducer function
export const { increment, decrement, incrementby2, setNuevaTarea} = tareaSlice.actions