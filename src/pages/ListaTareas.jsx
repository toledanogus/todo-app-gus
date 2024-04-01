import { useEffect } from "react";
import { getTareas } from "../store/slices/thunks";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setTareaID } from "../store/slices/tareaSlice";
export const ListaTareas = () => {

//constantes********************************************************
  const dispatch = useDispatch();
  const { tareas, filtro } = useSelector((state) => state.tarea);
  const navigate = useNavigate();

//Funciones*********************************************************
const aDetalles = (id) => {
 dispatch(setTareaID(id));
  navigate('/detalles');
}

//Efectos***********************************************************
  useEffect(() => {
    dispatch(getTareas());
  }, []);

  useEffect(() => {
    console.log(`Es lo que voy a renderizar:`, tareas);
  }, [tareas]);

  return (
    <>
      <h1>ListaTareas</h1>
      <h2>{`Tareas pendientes de ${filtro}`}</h2>
      <table>
        <thead>
          <th>Tarea</th>
          <th>Prioridad</th>
          <th>Completada</th>
          <th>Fecha Límite</th>
          <th>Categoría</th>
        </thead>
        <tbody>
          {tareas &&
            tareas.map((elemento, index) => (
              <tr key={index}>
                <td onClick={()=> aDetalles(elemento[6])}>{elemento[0]}</td>
                <td>{elemento[2]}</td>
                <td>{elemento[3]}</td>
                <td>{elemento[4]}</td>
                <td>{elemento[5]}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};
