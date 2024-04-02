import { useEffect, useState } from "react";
import { deleteTarea, getTareas, sendSolved } from "../store/slices/thunks";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSolved, setTareaID } from "../store/slices/tareaSlice";


export const ListaTareas = () => {
  //constantes********************************************************
  const dispatch = useDispatch();
  const { tareas, filtro } = useSelector((state) => state.tarea);
  const navigate = useNavigate();
  const [rayos, setRayos] = useState(0);
  const [checkedItems, setCheckedItems] = useState(new Set());

  //Funciones*********************************************************
  const aDetalles = (id) => {
    dispatch(setTareaID(id));
    navigate("/detalles");
  };
  const borrar = (id) => {
    dispatch(setTareaID(id));
    dispatch(deleteTarea());
    setRayos(rayos + 1);
  };
  const editar = (id) => {
    dispatch(setTareaID(id));
    navigate("/editar");
  };
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    if (checked) {
      setCheckedItems(
        (prevCheckedItems) => new Set(prevCheckedItems.add(name))
      );
    } else {
      const newCheckedItems = new Set(checkedItems);
      newCheckedItems.delete(name);
      setCheckedItems(newCheckedItems);
    }
  };
  const enviarResueltas = async () => {
    await dispatch(setSolved({ solved: Array.from(checkedItems) }));
    await dispatch(sendSolved());
    /* setDatosCargados(false); */
  };

  const formatDate = (fecha) => {
    const diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
  
    // Parseamos la fecha en formato yyyy-mm-dd
    const fechaParseada = new Date(fecha);
  
    // Obtenemos el día de la semana, el día del mes y el mes
    const diaSemana = diasSemana[fechaParseada.getDay()];
    const diaMes = fechaParseada.getDate();
    const mes = meses[fechaParseada.getMonth()];
    const año = fechaParseada.getFullYear();
  
    // Formateamos la fecha según tu requerimiento
    const fechaFormateada = `${diaSemana} ${diaMes} de ${mes} de ${año}`;
  
    return fechaFormateada;
  };


  //Efectos***********************************************************
  useEffect(() => {
    dispatch(getTareas());
  }, [rayos]);

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
          <th>Status</th>
          <th>Fecha Límite</th>
          <th>Categoría</th>
        </thead>
        <tbody>
          {tareas &&
            tareas.map((elemento, index) => (
              <tr key={index}>
                <td className="tituloTarea" onClick={() => aDetalles(elemento[6])}>{elemento[0]}</td>
                <td>{elemento[2]}</td>
                <td>
                  {elemento[3] === 0 ? (
                    <input
                      name={elemento[0]}
                      type="checkbox"
                      onChange={handleCheckboxChange}
                      checked={checkedItems.has(elemento[0])}
                    />
                  ) : null}
                </td>
                <td className="centrado">
                  {elemento[3] ? (
                    <span className="arrow">✓</span>
                  ) : (
                    <span className="equis">x</span>
                  )}
                </td>
                <td className="tituloTarea">{formatDate(elemento[4])}</td>
                <td className="categoria">{elemento[5]}</td>
                <td>
                  <button className="registrar" onClick={() => editar(elemento[6])}>Editar</button>
                </td>
                <td>
                  <button className="aInicio" onClick={() => borrar(elemento[6])}>Borrar</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <button onClick={()=>{
        enviarResueltas().then(() => dispatch(getTareas()));
        }}>Registrar tareas completadas</button>
    </>
  );
};
