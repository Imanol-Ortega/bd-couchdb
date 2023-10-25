/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { getPersonaRequest,getPersonasRequest,updPersonasRequest,postPersonaRequest,deletePersonasRequest } from "../api/personas.api";
import { PersonaContext } from "./contexto";


export const usePersonas = ()=>{
    const context = useContext(PersonaContext);
    if(!context){
        throw new Error("si");
    }
    return context
};

export const PersonasContextProvider = ({children})=>{
    const [persona,setPersona] = useState([]);
    async function loadPersonas(){
        const response = await getPersonasRequest();
        setPersona(response.data)
    }
    const getPersona = async(id)=>{
        try {
            const response = await getPersonaRequest(id);
            return response
        } catch (error) {
            console.error(error)
        }
    };

    const postPersona = async(values)=>{
        try {
            const response = await postPersonaRequest(values);
            return response;
        } catch (error) {
            console.error(error)
        }
    };
    const delPersona = async(id,value)=>{
        try {
            const response = await deletePersonasRequest(id,value);
            setPersona(persona.filter(persona => persona.values.id!=id))
            return response;
        } catch (error) {
            console.error(error);
        }
    };
    const updPersona = async(id,values)=>{
        try {
            const response = await updPersonasRequest(id,values);
            return response;
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <PersonaContext.Provider value={{persona,loadPersonas,getPersona,updPersona,delPersona,postPersona}}>
            {children}
        </PersonaContext.Provider>
    )
}




