import Paciente from "./Paciente"


const ListadoPacientes = () => {
  return (
    <div className="md:w-1/2 lg:w-3/5" >
      <h2 className="font-black text-gray-700 text-3xl text-center">Listado de Pacientes</h2> 
      <Paciente />
    </div>
    
  )
}

export default ListadoPacientes