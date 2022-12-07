import React from 'react'

const Formulario = () => {
  return (
    <div className='md:w-1/2 lg:w-2/5'>
      <h2 className='font-black text-gray-700 text-3xl text-center mb-10'>Seguimiento de pacientes</h2>
      

      <form className='bg-white shadow-lg rounded-md py-10 px-5 mb-10'>
        <p className='text-center text-lg mt-3 mb-6 font-bold text-gray-700 uppercase'>Añadir {''}<span className='text-cyan-500 font-bold'>pacientes</span></p>
        <div className='mb-5'>
          <label className='block text-gray-700 uppercase font-bold' htmlFor='mascota'>Nombre de la mascota</label>
          <input className='border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md' type="text" placeholder='Nombre de la mascota' id='mascota' />
        </div>

        <div className='mb-5'>
          <label className='block text-gray-700 uppercase font-bold' htmlFor='propietario'>Nombre del propietario</label>
          <input className='border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md' type="text" placeholder='Nombre del propietario' id='propietario' />
        </div>

        <div className='mb-5'>
          <label className='block text-gray-700 uppercase font-bold' htmlFor='email'>Email</label>
          <input className='border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md' type="email" placeholder='email del propietario' id='email' />
        </div>

        <div className='mb-5'>
          <label className='block text-gray-700 uppercase font-bold' htmlFor='fecha'>Fecha de alta</label>
          <input className='border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md' type="date" id='fecha' />
        </div>

        <div className='mb-5'>
          <label className='block text-gray-700 uppercase font-bold' htmlFor='sintomas'>Síntomas</label>
          <textarea  className='border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md' id='sintomas' placeholder='Descripción de los síntomas'/>
        </div>

        <input className='bg-cyan-500 w-full p-3 text-white uppercase font-bold rounded-lg hover:bg-cyan-600 cursor-pointer transition-all' type="submit" value="Guardar paciente" />

      </form>
    </div>
  )
}

export default Formulario

