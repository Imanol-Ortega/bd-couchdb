/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { usePersonas } from "../context/ContextoProvider";

function PersonasCard({personas}) {
    const {delPersona} = usePersonas();
    const navigate = useNavigate();
    const values = {id:personas.value.id,rev:personas.value.rev}
  return (
    <div className="bg-gray-600 rounded-md p-4 ">
        <p className="text-sm text-gray-100">{personas.value.nombre}</p>
        <p className="text-sm text-gray-100">{personas.value.apellido}</p>
        <p className="text-sm text-gray-100">{personas.value.nrodocumento}</p>
        <p className="text-sm text-gray-100">{personas.value.email}</p>
        <p className="text-sm text-gray-100">{values.id}</p>
        <div>
            <button className="bg-red-500 px-2 py-1 text-white rounded mt-2" onClick={()=>delPersona(personas.value.id,values)}>Eliminar</button>
            <button className="bg-orange-500 px-2 py-1 text-white rounded mt-2 ml-2"  onClick={()=> navigate('/edit/'+personas.value.id)}>Editar</button>
        </div>
    </div>
  )
}

export default PersonasCard