import {useState, useEffect} from 'react'
import { getClients } from '../services/clients' 


const Clients = () => {
  const [clients, setClients] = useState([])


  useEffect(() => {
    const fetchData = async () => {
      const result = await getClients()
      setClients(result)
    }
    fetchData()
   
  }, [])

  
  return (
    <div className='container col-12 d-flex flex-column align-items-center justify-content-center h-25'>
      <div className='row'>
        <h2 className='fw-semibold text-center'>{clients.nombre}</h2>
        <p className='text-center'>{`NIT: ${clients.nit}`}</p>
        <div className='d-flex justify-content-center align-items-center'>
          <h6 className='m-1 fw-semibold'>Capa:</h6>
          <p className='m-1'>{clients.capa}</p>
          <h6 className='m-1 fw-semibold'>Segmento:</h6>
          <p className='m-1'>{clients.segmento}</p>
        </div>
        
      </div>
    </div>
  )
}

export default Clients