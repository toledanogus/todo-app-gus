import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setNuevaTarea } from "../store/slices/tareaSlice";
import { tuThunkAction } from "../store/slices/thunks";
tuThunkAction

export const NuevaTareaPage = () => {
  //Constantes**************************************************
  const navigate = useNavigate();
  const [selection, setSelection] = useState("");
  const [selection2, setSelection2] = useState("");
  const [selection3, setSelection3] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const {nuevaTarea} = useSelector ((state)=>state.tarea);
  const dispatch = useDispatch();

  //Funciones******************************************************
  const aInicio = () => {
    navigate("/inicio");
  };
  const onHandleChange = (event) => {
    setSelection(event.target.value);
  };
  const onHandleChange2 = (event) => {
    setSelection2(event.target.value);
  };
  const onHandleChange3 = (event) => {
    setSelection3(event.target.value);
  };
  const onHandleChangeTitulo = ({target}) => {
    setTitle(target.value)
  };
  const onHandleChangeDescription = ({target}) => {
    setDescription(target.value)
  }
  const registrarNuevaTarea = () => {
  dispatch(setNuevaTarea({nuevaTarea: [title, description, selection, selection2, selection3]}));
  dispatch(tuThunkAction());
  }

  //Efectos********************************************************

  return (
    <>
      <h1>NuevaTareaPage</h1>

      <div>
        Nueva Tarea:
        <ul>
          <li>
            Título: <input type="text" value={title} onChange={onHandleChangeTitulo}/>
          </li>
          <li>
            Descripción: <textarea type="text" value={description} onChange={onHandleChangeDescription}/>
          </li>
          <li>
            Categoría:
            <select value={selection} onChange={onHandleChange}>
              <option value="">Elige una:</option>
              <option value="escuela">Escuela</option>
              <option value="casa">Casa</option>
              <option value="personal">Personal</option>
              <option value="salud">Salud</option>
              <option value="diversion">Diversión</option>
            </select>
          </li>
          <li>
            Prioridad:
            <select value={selection2} onChange={onHandleChange2}>
              <option value="">Elige una:</option>
              <option value="alta">Alta</option>
              <option value="normal">Normal</option>
              <option value="baja">Baja</option>
            </select>
          </li>
          <li>
            Fecha límite: <input type="date" onChange={onHandleChange3} />
          </li>
        </ul>
      </div>
      <button onClick={registrarNuevaTarea}>Registrar</button>
      <br />
      <button onClick={aInicio}>Ir a Inicio</button>
      <p>Categoría: {selection}</p>
      <p>Prioridad: {selection2}</p>
      <p>Fecha: {selection3}</p>
      <p>Título: {title}</p>
      <p>Descripción: {description}</p>
      <p>Nueva tarea: {nuevaTarea}</p>
    </>
  );
};
