import { useEffect } from "react";
import { getTareas } from "../store/slices/thunks";
import { useDispatch, useSelector } from "react-redux";

export const ListaTareas = () => {
  const dispatch = useDispatch();
  const { tareas } = useSelector((state) => state.tarea);

  useEffect(() => {
    dispatch(getTareas());
  }, []);

  useEffect(() => {
    console.log(`Es lo que voy a renderizar:`, tareas);
  }, [tareas]);

  return (
    <>
      <h1>ListaTareas</h1>
      <table>
        <thead>
          <th>Tarea</th>
          <th>Prioridad</th>
          <th>Completada</th>
          <th>Fecha Límite</th>
        </thead>
        <tbody>
          {tareas &&
            tareas.map((elemento, index) => (
              <tr key={index}>
                <td>{elemento[0]}</td>
                <td>{elemento[2]}</td>
                <td>{elemento[3]}</td>
                <td>{elemento[4]}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};
