import { couch } from "../db.js";

const dbName = "personas";
const viewUrl = "_design/obtener_personas/_view/todo"



export const listar = (req,res)=>{
   try {
    
    const viewUrl2 = `_design/obtener_persona/_view/unico?key="${req.params.key}"`
    couch.get(dbName,viewUrl2).then(({data,headers,status})=>{
        const result = (data)
        res.json(result.rows)
    },err=>{

    });
   } catch (error) {
    console.error(error)
   }
};

export const listarvarios = async(req,res)=>{
    try {
        couch.get(dbName,viewUrl).then(({data,headers,status}) =>{
            const result = (data)
            res.json(result.rows)
       }, err =>{
    
       });
    } catch (error) {
        console.error(error)
    }
  
};

export const insertar = async(req,res)=>{
    try {
     
        const resp = req.body

        couch.insert(dbName,{
            nombre: resp.nombre,
            Apellido:resp.apellido,
            NroDocumento:resp.nrodocumento,
            Email:resp.email,
        }).then(({data,headers,status})=>{
            res.json(data)
        },err =>{

        });
    } catch (error) {
        console.error(error)
    }
};

export const actualizar = async(req,res)=>{ 
    
    try {
        const resp = req.body 
        couch.update(dbName,{
            _id:resp.id,
            _rev:resp.rev, 
            nombre:resp.nombre,
            Apellido:resp.apellido,
            NroDocumento:resp.nrodocumento, 
            Email:resp.email
        }).then(({data,headers,status})=>{
            res.json(data)
        },err=>{

        });
    } catch (error) {
        console.error(error)
    }
};

export const borrar = async(req,res)=>{
   try {
    couch.del(dbName,req.params.id,req.params.rev).then(({data,headers,status})=>{
        res.json(data);
    },err=>{

    });
   } catch (error) {
        console.error(error)
   }
};