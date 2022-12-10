import Paciente from "./Paciente"


const ListadoPacientes = ({ pacientes, setPacienteEditar, eliminarPaciente }) => {

  return(
    <div className="md:w-1/2 lg:w-3/5 mx-2"> 
      {pacientes && pacientes.length ? (
        <>      
          <h2 className="font-black text-gray-700 text-3xl text-center">Listado de Pacientes</h2> 
            { pacientes.map( paciente  =>(
                <Paciente
                  key={paciente.id}
                  paciente={paciente}
                  setPacienteEditar={setPacienteEditar}
                  eliminarPaciente={eliminarPaciente}
                />
            ))}       
        </>   

      ) : (
        <>
         <h2 className="font-black text-gray-700 text-3xl text-center">Aun no hay pacientes</h2> 
        </>
      )} 
      </div>    
    )
  }
  

export default ListadoPacientes