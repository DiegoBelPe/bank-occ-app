import React from 'react'
import Arrow from './Arrow'
import image from '../assets/image'
import '../styles/CreditLines.css'


const CreditLines = () => {
  return (
    <div className='container col-12 text-center h-50  '>
      <h4>Indique la linea de credito que quiere reconsiderar</h4>
      <div className='container '>
        <div className='row d-flex justify-content-center'>
        <div className="card col-6 col-md-4 col-lg-3 m-2 " >
          <img src={image.img2} className="card-img-top p-2 img_Credit" alt="..." />
            <h5 className="card-title">Cartera Ordinaria</h5>
          <div className="card-body">
            <a href="#" className="btn btn-primary">Continuar</a>
          </div>
        </div>
        <div className="card col-6 col-md-4 col-lg-3 m-2" >
          <img src={image.img3} className="card-img-top p-2 img_Credit" alt="..." />
            <h5 className="card-title">Leasing</h5>
          <div className="card-body bg-primary ">
            <h3>Continuar</h3>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default CreditLines