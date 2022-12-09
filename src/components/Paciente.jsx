

const Paciente = ({paciente, setPacienteEditar}) => {
  
  const { nombre, propietario, email, fecha, sintomas } = paciente

  return (
    <div className="bg-white shadow-lg m-3 px-5 py-10 rounded-xl mt-10">
      <p className="text-center text-lg mt-4  mb-6 font-bold text-gray-700 uppercase">Gestión de <span className="text-cyan-500 font-bold">pacientes y citas</span> </p>
        <p className="block text-gray-700 uppercase font-bold mb-3">Nombre de la mascota: {''} <span className="font-normal normal-case">{nombre}</span></p>
        <p className="block text-gray-700 uppercase font-bold mb-3">Propietario: {''} <span className="font-normal normal-case">{propietario}</span></p>
        <p className="block text-gray-700 uppercase font-bold mb-3">email: {''} <span className="font-normal normal-case">{email}</span></p>
        <p className="block text-gray-700 uppercase font-bold mb-3">Fecha de alta: {''} <span className="font-normal normal-case">{fecha}</span></p>
        <p className="block text-gray-700 uppercase font-bold mb-3">Síntomas: {''} <span className="font-normal normal-case">{sintomas}</span></p>

        <div>
          <button className="bg-cyan-500 px-10 py-2 mt-5 mr-10 text-white uppercase font-bold rounded-lg
                          hover:bg-cyan-600 cursor-pointer transition-all"        
                  type="button"
                  onClick={() => setPacienteEditar(paciente)} 
                  >Editar
                  
                  </button>
          <button className="bg-red-500 px-10 py-2 mt-5 text-white uppercase font-bold rounded-lg
                          hover:bg-red-800 cursor-pointer transition-all" 
                  type="button">Eliminar
                  </button>
        </div>
      </div>
  )
}

export default Paciente