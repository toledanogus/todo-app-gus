import { useDispatch, useSelector } from "react-redux"
import { getTarea } from "../store/slices/thunks"
import { useEffect } from "react"




export const DetallesTarea = () => {
//Constantes**********************************************************
const {tarea} = useSelector((state)=>state.tarea)
const dispatch = useDispatch();

//Funciones***********************************************************



//Efectos*************************************************************
useEffect(() => {
  dispatch(getTarea());
}, []);


  return (

    <>
    <h1>DetallesTarea</h1>
    <table>
        <thead>
          <th>Tarea</th>
          <th>Prioridad</th>
          <th>Descripción</th>
          <th>Completada</th>
          <th>Fecha Límite</th>
          <th>Categoría</th>
        </thead>
        <tbody>
          {tarea &&
            tarea.map((elemento, index) => (
              <tr key={index}>
                <td>{elemento[0]}</td>
                <td>{elemento[2]}</td>
                <td>{elemento[1]}</td>
                <td>{elemento[3]}</td>
                <td>{elemento[4]}</td>
                <td>{elemento[5]}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
    
  )
}
