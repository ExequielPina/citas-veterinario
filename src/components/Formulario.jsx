import { useState, useEffect } from "react"
import Error from "./Error";


const Formulario = ({ pacientes, setPacientes, pacienteEditar, setPacienteEditar }) => {
  // ** States que leen los valores del formulario **//
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');
  // ** State para alertas de error en el formulario ** //
  const [error, setError] = useState(false)

  useEffect(() => {
    if( Object.keys(pacienteEditar).length > 0 ){
      setNombre(pacienteEditar.nombre)
      setPropietario(pacienteEditar.propietario)
      setEmail(pacienteEditar.email)
      setFecha(pacienteEditar.fecha)
      setSintomas(pacienteEditar.sintomas)
    }
  },[pacienteEditar])
  

  //** Función que genera un ID único **/
  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha =  Date.now().toString(36)

    return random + fecha;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([ nombre, propietario, email, fecha, sintomas ].includes('') ) {
        setError(true)
        return;
    }
    setError(false)

    //** Creo objeto de paciente con los datos del arreglo del formulario **//
    const objetoPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas,
      id: generarId()
    }

    if (pacienteEditar.id) {
      //** Editando registro **/
      objetoPaciente.id = pacienteEditar.id

      const pacientesActualizados = pacientes.map( pacientesState => pacientesState.id ===
        pacienteEditar.id ? objetoPaciente : pacientesState)

        setPacientes(pacientesActualizados)
        setPacienteEditar({})
        
        

    } else {
      //** guardando registro **/
      setPacientes([...pacientes, objetoPaciente]);
    }
    
    //** Reiniciar el formulario **/
    setNombre('')
    setPropietario('')
    setEmail('')
    setFecha('')
    setSintomas('')
    
  }

  return (
    <div className='md:w-1/2 lg:w-2/5 mx-5'>
      <h2 className='font-black text-gray-700 text-3xl text-center mb-10'>Seguimiento de pacientes</h2>
      

      <form className='bg-white shadow-lg rounded-xl py-10 px-5 mb-10' 
            onSubmit={handleSubmit} >
         <p className='text-center text-lg mt-3 mb-6 font-bold text-gray-700 uppercase'>Añadir {''}
      <span className='text-cyan-500 font-bold'>pacientes</span> </p>
        { error &&  <Error><p>¡Todos los campos son obligatorios!</p>  </Error>}
        <div className='mb-5'>
            <label className='block text-gray-700 uppercase font-bold' htmlFor='nombre'>Nombre de la mascota</label>
            <input className='border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md' 
                   type="text" placeholder='Nombre de la mascota' id='nombre' 
                   value={nombre} onChange={ (e) => setNombre(e.target.value)} />
        </div>

        <div className='mb-5'>
            <label className='block text-gray-700 uppercase font-bold' htmlFor='propietario'>Nombre del propietario</label>
            <input className='border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md' 
                   type="text" placeholder='Nombre del propietario' id='propietario'
                   value={propietario} onChange={ (e) => setPropietario(e.target.value)} />
        </div>

        <div className='mb-5'>
            <label className='block text-gray-700 uppercase font-bold' htmlFor='email'>Email</label>
            <input className='border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md' 
                   type="email" placeholder='email del propietario' id='email'
                   value={email} onChange={ (e) => setEmail(e.target.value)} />
        </div>

        <div className='mb-5'>
          <label className='block text-gray-700 uppercase font-bold' htmlFor='fecha'>Fecha de alta</label>
          <input className='border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md' type="date" id='fecha'
           value={fecha} onChange={ (e) => setFecha(e.target.value)} />
        </div>

        <div className='mb-5'>
          <label className='block text-gray-700 uppercase font-bold' htmlFor='sintomas'>Síntomas</label>
          <textarea  className='border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md' 
                     id='sintomas' placeholder='Descripción de los síntomas'
                     value={sintomas} onChange={ (e) => setSintomas(e.target.value)} />
        </div>

        <input className='bg-cyan-500 w-full p-3 text-white uppercase font-bold rounded-lg
                          hover:bg-cyan-600 cursor-pointer transition-all' 
               type="submit" 
               value={ pacienteEditar.id ? "Editar paciente" : "Guardar paciente" }/>

      </form>
    </div>
  )
}

export default Formulario

