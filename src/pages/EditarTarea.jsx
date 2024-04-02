import { useDispatch, useSelector } from "react-redux";
import { editTarea, getTarea } from "../store/slices/thunks";
import { useEffect, useState } from "react";
import { setTareaEditada } from "../store/slices/tareaSlice";

export const EditarTarea = () => {
  //Constantes***************************************************************
  const { tarea } = useSelector((state) => state.tarea);
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState("");
  const [fecha, setFecha] = useState("");
  const [rayos, setRayos] = useState(0);

  //Funciones***************************************************************
  const onHandleChangePriority = (event) => {
    setPriority(event.target.value);
  };
  const onHandleChangeFecha = (event) => {
    setFecha(event.target.value);
  };
  const onHandleChangeTitulo = ({target}) => {
    setTitle(target.value)
  };
  const onHandleChangeDescription = ({target}) => {
    setDescription(target.value)
  }

  const enviarEditada = () => {
    if (title && description && priority && fecha) {
      dispatch(setTareaEditada({tareaEditada: [title, description, priority, fecha]}));
      dispatch(editTarea());
    } else{
      alert('Ningún campo puede estar vacío');
    }
    
  }
  //Efectos***************************************************************
  useEffect(() => {
    dispatch(getTarea());
    /* setRayos(rayos+1); */
  }, []);
  /* useEffect(() => {
    sliceTostate();
  }, [rayos]); */

  useEffect(() => {
    if (tarea && tarea.length > 0) {
      setTitle(tarea[0][0]);
      setDescription(tarea[0][1]);
      setPriority(tarea[0][2]);
      setFecha(tarea[0][4]);
    }
  }, [tarea]);

  return (
    <>
      <div>EditarTarea</div>
      <p>{JSON.stringify(tarea)}</p>
      <table>
        <thead>
          <th>Tarea</th>
          <th>Descripción</th>
          <th>Prioridad</th>
          <th>Fecha Límite</th>
        </thead>
        <tbody>
          {tarea &&
            tarea.map((elemento, index) => (
              <tr key={index}>
                <td> <input 
                type="text" 
                value={title || elemento[0]} 
                onChange={onHandleChangeTitulo}
                onClick={(event) => event.target.select()}
                /></td>
                <td><textarea 
                value={description || elemento[1]} 
                onChange={onHandleChangeDescription}
                onClick={(event) => event.target.select()}
                ></textarea></td>
                <td><select 
                value={priority || elemento[2]} 
                onChange={onHandleChangePriority}>
              <option value="">Elige una:</option>
              <option value="3">Alta</option>
              <option value="2">Normal</option>
              <option value="1">Baja</option>
            </select></td>
                <td><input 
                type="date"
                value={fecha || elemento[4]}
                onChange={onHandleChangeFecha}
                onClick={(event) => event.target.select()}
                 /></td>
              </tr>
            ))}
        </tbody>
      </table>
      <div>{title && title}</div>
      <div>{description && description}</div>
      <div>{priority && priority}</div>
      <div>{fecha && fecha}</div>
      <button onClick={enviarEditada}>Guardar Cambios</button>
    </>
  );
};
