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
    navigate("/lista");
  };

  //Efectos*************************************************

  return (
    <>
      <h1>Gestión de Pendientes</h1>
      <div className="containerInicio">
        <div className="todas" colSpan="4">
          <span
            onClick={() => {
              const nuevoFiltro = "todas";
              aListaDeTareas(nuevoFiltro);
            }}
          >
            Todas
          </span>
        </div>
        <div className="escuela" colSpan="4">
          <span
            onClick={() => {
              const nuevoFiltro = "escuela";
              aListaDeTareas(nuevoFiltro);
            }}
          >
            Escuela
          </span>
        </div>
        <div className="casa" colSpan="4">
          <span
            onClick={() => {
              const nuevoFiltro = "casa";
              aListaDeTareas(nuevoFiltro);
            }}
          >
            Casa
          </span>
        </div>
      </div>
{/* linea siguiente *************************************/}
      <div className="containerInicio">
      <div className="personal" colSpan="4">
        <button
          onClick={() => {
            const nuevoFiltro = "personal";
            aListaDeTareas(nuevoFiltro);
          }}
        >
          Personal
        </button>
      </div>
      
        <div className="salud">
          <button
            onClick={() => {
              const nuevoFiltro = "salud";
              aListaDeTareas(nuevoFiltro);
            }}
          >
            Salud
          </button>
        </div>
        <div className="diversion">
          <button
            onClick={() => {
              const nuevoFiltro = "diversion";
              aListaDeTareas(nuevoFiltro);
            }}
          >
            Diversión
          </button>
        </div>
      </div>
      <br />
      <br />
      <button onClick={aNuevaTarea}>Nueva Tarea</button>
    </>
  );
};
