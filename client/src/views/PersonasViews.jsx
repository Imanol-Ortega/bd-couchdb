/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { usePersonas } from "../context/ContextoProvider";
// eslint-disable-next-line no-unused-vars
import PersonasCard from "../componentes/PersonasCard";

function PersonasViews() {
    const {persona,loadPersonas} = usePersonas();
    useEffect(()=>{
        loadPersonas();
    },[]);
    function renderMain(){
        if(persona===0) return <h1>No existen registros de personas</h1>
        return persona.map(per=>(
            <PersonasCard personas = {per} key={per.id}/>
          ))
    }
  return (
    <div>
        <h1 className="text-5xl text-white font-bold text-center">Personas</h1>
        <div className="grid grid-cols-3 gap-3">
            {renderMain()}
        </div>
    </div>
  )
}

export default PersonasViews