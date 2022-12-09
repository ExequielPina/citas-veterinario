

const Error = ({children}) => {
  return (
    <div className="bg-red-800 text-white text-center p-2 uppercase font-bold rounded-xl mb-3">
        <p>{children}</p>
    </div>
  )
}

export default Error