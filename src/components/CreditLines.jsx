import React from 'react'
import Arrow from './Arrow'
import image from '../assets/image'
import '../styles/CreditLines.css'


const CreditLines = () => {
  return (
    <div className='container col-12 text-center h-50'>
      <h4 className='title_credit'>Indique la linea de credito que quiere reconsiderar</h4>
      <div className='container '>
        <div className='row d-flex justify-content-center'>
        <div className="card col-4 col-md-4 col-lg-3 m-2 p-0 card_hover" >
          <img src={image.img2} className="card-img-top p-2 img_Credit" alt="..." />
            <h5 className="card_title">Cartera Ordinaria</h5>
            <div className="card-body  continue_btn">
            <h4 className='fw-semibold text_continue'>Continuar</h4>
          </div>
        </div>
        <div className="card col-4 col-md-4 col-lg-3 m-2 p-0 card_hover" >
          <img src={image.img3} className="card-img-top p-2 img_Credit" alt="..." />
            <h5 className="card_title">Leasing</h5>
          <div className="card-body continue_btn ">
            <h4 className='fw-semibold text_continue'>Continuar</h4>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default CreditLines