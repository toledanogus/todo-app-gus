import { useDispatch, useSelector } from "react-redux"
import { increment } from "../store/slices/tareaSlice"
import { useNavigate } from "react-router-dom";


export const InicioPage = () => {
//Constantes**********************************************
const {counter} = useSelector((state) => state.tarea)
const dispatch = useDispatch();
const navigate = useNavigate();


//Funciones***********************************************
const aNuevaTarea = () => {
   navigate('/nueva');
}




//Efectos*************************************************




  return (
    <>
    <div>InicioPage</div>
    <p>{counter}</p>
    <button onClick={()=> dispatch(increment())}>Cambiar</button>
    <button onClick={aNuevaTarea}>Nueva Tarea</button>
    </>
    
  )
}
