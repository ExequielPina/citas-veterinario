import { useState, useEffect } from "react"


const Formulario = () => {
  // ** States que leen los valores del formulario **//
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');
  // ** State para alertas de error en el formulario ** //
  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([ nombre, propietario, email, fecha, sintomas ].includes('') ) {
        setError(true)
        return;
    }
    setError(false)
  }

  return (
    <div className='md:w-1/2 lg:w-2/5 mx-5'>
      <h2 className='font-black text-gray-700 text-3xl text-center mb-10'>Seguimiento de pacientes</h2>
      

      <form className='bg-white shadow-lg rounded-xl py-10 px-5 mb-10' 
            onSubmit={handleSubmit} >
         <p className='text-center text-lg mt-3 mb-6 font-bold text-gray-700 uppercase'>Añadir {''}
      <span className='text-cyan-500 font-bold'>pacientes</span> </p>
        {error && <div className="bg-red-800 text-white text-center p-2 uppercase font-bold rounded-xl mb-3"><p>¡Todos los campos son obligatorios!</p></div> }
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
               type="submit" value="Guardar paciente" />

      </form>
    </div>
  )
}

export default Formulario

