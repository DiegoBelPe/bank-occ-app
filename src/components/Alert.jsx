import React from 'react'
import CircleAlert from './CircleAlert'

const Alert = () => {
  return (
    <div className='container col-8 text-center d-flex flex-row justify-content-center  '>
      <div class="col-8 alert alert-danger" role="alert">
        <CircleAlert />
        Las demas lineas de credito no estarán disponibles por el momento!
      </div>
    </div>
  )
}

export default Alert