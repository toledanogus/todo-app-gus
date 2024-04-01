import { useDispatch, useSelector } from "react-redux";
import { setFiltro } from "../store/slices/tareaSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const InicioPage = () => {
  //Constantes**********************************************
  const { counter } = useSelector((state) => state.tarea);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  //Funciones***********************************************
  const aNuevaTarea = () => {
    navigate("/nueva");
  };

  const aListaDeTareas = (nuevoFiltro) => {
    dispatch(setFiltro(nuevoFiltro));
    navigate('/lista');
  };

  //Efectos*************************************************

  return (
    <>
      <h1>InicioPage</h1>
      <button
        onClick={() => {
          const nuevoFiltro = 'todas'
          
          aListaDeTareas(nuevoFiltro);
        }}
      >
        Todas las Tareas
      </button>
      <br />
      <br />
      <button
        onClick={() => {
          const nuevoFiltro = 'escuela'
          
          aListaDeTareas(nuevoFiltro);
        }}
      >
        Escuela
      </button>
      <button
        onClick={() => {
          const nuevoFiltro = 'casa'
         
          aListaDeTareas(nuevoFiltro);
        }}
      >
        Casa
      </button>
      <button
        onClick={() => {
          const nuevoFiltro = 'personal'
          
          aListaDeTareas(nuevoFiltro);
        }}
      >
        Personal
      </button>
      <button
        onClick={() => {
          const nuevoFiltro = 'salud'
          
          aListaDeTareas(nuevoFiltro);
        }}
      >
        Salud
      </button>
      <button
        onClick={() => {
          const nuevoFiltro = 'diversion'
          
          aListaDeTareas(nuevoFiltro);
        }}
      >
        Diversión
      </button>
      <br />
      <br />
      <button onClick={aNuevaTarea}>Nueva Tarea</button>
    </>
  );
};
