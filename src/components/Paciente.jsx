

const Paciente = ({paciente}) => {
  
  const { nombre, propietario, email, fecha, sintomas } = paciente

  return (
    <div className="bg-white shadow-lg m-3 px-5 py-10 rounded-xl mt-10">
      <p className="text-center text-lg mt-4  mb-6 font-bold text-gray-700 uppercase">Gestión de <span className="text-cyan-500 font-bold">pacientes y citas</span> </p>
        <p className="block text-gray-700 uppercase font-bold mb-3">Nombre de la mascota: {''} <span className="font-normal normal-case">{nombre}</span></p>
        <p className="block text-gray-700 uppercase font-bold mb-3">Propietario: {''} <span className="font-normal normal-case">{propietario}</span></p>
        <p className="block text-gray-700 uppercase font-bold mb-3">email: {''} <span className="font-normal normal-case">{email}</span></p>
        <p className="block text-gray-700 uppercase font-bold mb-3">Fecha de alta: {''} <span className="font-normal normal-case">{fecha}</span></p>
        <p className="block text-gray-700 uppercase font-bold mb-3">Síntomas: {''} <span className="font-normal normal-case">{sintomas}</span></p>
      </div>
  )
}

export default Paciente