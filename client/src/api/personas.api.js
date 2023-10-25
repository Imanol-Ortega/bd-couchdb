import axios from 'axios'

export const getPersonaRequest = async(id)=>{
    return await axios.get(`http://localhost:3000/personas/${id}`);
};

export const getPersonasRequest = async()=>{
    return await axios.get('http://localhost:3000/personas');
};

export const postPersonaRequest = async(value)=>{
    return await axios.post(`http://localhost:3000/personas`,value);
};

export const updPersonasRequest = async(id,value)=>{
    return await axios.post(`http://localhost:3000/personas/${id}`,value);
};

export const deletePersonasRequest = async(id,rev)=>{
    return await axios.delete(`http://localhost:3000/personas/${id}/${rev}`,);
};