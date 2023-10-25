/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import {Form,Formik} from 'formik'
import { usePersonas } from '../context/ContextoProvider'
import { useParams } from 'react-router-dom'
import { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom'

function PersonasForm() {
    const {getPersona,updPersona,postPersona} = usePersonas();
   
    const [personas,setPersonas] = useState({
        nombre: '',
        apellido:'',
        nrodocumento:'',
        email:'',
    });
    const params = useParams();
    const navigate = useNavigate()
    const cargarPersonas = async()=>{
        try {
            if(params.id){
                const res = await getPersona(params.id);
                const rp = res.data[0].value
                setPersonas({
                    id:rp.id,
                    rev:rp.rev,
                    nombre:rp.nombre,
                    apellido:rp.apellido,
                    nrodocumento:rp.nrodocumento,
                    email:rp.email
                });
            }
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(()=>{
        cargarPersonas()
    },[]) 

    return (
        <div>
            <Formik
                    initialValues={personas}
                    enableReinitialize = {true}
                    onSubmit={async(values,actions)=>{
                        if (params.id){

                            await updPersona(params.id,values);
                        }else{
                            await postPersona(values);
                        }
                        setPersonas('')
                        actions.resetForm();
                        navigate('/')
                    }}
                >
                {({handleChange,handleSubmit,values,isSubmitting})=>(
                    <div className='container ml-auto mr-auto flex items-center justify-center'>
                        <div className='w-full md:w-1/2'>
                            <Form onSubmit={handleSubmit} className='bg-white px-8 pt-6 pb-8 mb-4'>
                                <h1 className='text-gray-700 text-xl font-bold uppercase text-center'>{
                                    params.id ? "Editando Persona": "Creando Persona"
                                    }
                                </h1>
                                <label className='block text-gray-700 text-sm font-bold mb-2'>Nombres</label>
                                <input
                                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
                                type="text" 
                                name='nombre' 
                                placeholder='Ingrese sus nombres' 
                                onChange={handleChange} 
                                value={values.nombre || ''}/>
                                
                                <label className='block text-gray-700 text-sm font-bold mb-2'>Apellidos</label>
                                <input 
                                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
                                type="text" 
                                name='apellido' 
                                placeholder='Ingrese sus apellidos' 
                                onChange={handleChange} 
                                value={values.apellido || ''}/>

                                <label className='block text-gray-700 text-sm font-bold mb-2'>Nro Documento</label>
                                <input 
                                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
                                type="text" 
                                name='nrodocumento' 
                                placeholder='Ingrese su Nro de documento' 
                                onChange={handleChange} 
                                value={values.nrodocumento || 0}/>

                                <label className='block text-gray-700 text-sm font-bold mb-2'>Email</label>
                                <input 
                                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
                                type="text" 
                                name='email' 
                                placeholder='Ingrese su Email' 
                                onChange={handleChange} 
                                value={values.email || ''}/>

                                <button 
                                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4'
                                type='Submit' 
                                disabled = {isSubmitting}>{isSubmitting ? "Guardando...":"Guardar"}</button>
                            </Form>
                        </div>
                    </div>
                )}
            </Formik>
        </div>
    )
}

export default PersonasForm