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
    <h2>Datos cliente</h2>
    <p>Peticion a AWS</p>
    </div>
  )
}

export default Clients