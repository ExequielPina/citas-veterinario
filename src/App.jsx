import { useState } from "react"
import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"
import Paciente from "./components/Paciente";



function App() {  

  const [pacientes, setPacientes] = useState([]);

  const [pacienteEditar, setPacienteEditar] = useState({});

  return (
    <div className="container mx-auto mt-20">
      
      <Header />
      <div className="mt-12 md:flex">
        <Formulario
            pacientes = {pacientes}
            pacienteEditar={pacienteEditar}
            setPacientes = {setPacientes}
            setPacienteEditar={setPacienteEditar}
        />
        
        <ListadoPacientes
          pacientes={pacientes}
          setPacienteEditar={setPacienteEditar}
        />
      </div>
      
      
    </div>   
  )
}

export default App
