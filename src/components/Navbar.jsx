import React from 'react'
import image from '../assets/image'
import '../styles/Navbar.css'
import Arrow from './Arrow'

const Navbar = () => {
  return (
    <div className='col-12 '>
      <nav className="navbar navbar-expand-lg bg-light ">
  <div className="container-fluid ">
    <Arrow />
    <img className='h-logo' src={image.img} alt="banco occidente" />
    <button className=" navbar-toggler btn-occ" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon btn-occ"></span>
    </button>
    <div className="collapse navbar-collapse mt-nav" id="navbarNavDropdown">
      <div className="navbar-nav">
          <div className='d-flex flex-column justify-content-center'>
            <h6 className='m-0 text-center title_avatar'>Carlos Gómez</h6>
            <p className='m-0 text-center text-avatar'>Gerente de Relacion</p>
          </div>
        <li className="nav-item dropdown">
          
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <img className='border border-secondary border-3 rounded-circle'src={image.avatar} alt="" />
          </a>
          <ul className="dropdown-menu m-0" aria-labelledby="navbarDropdownMenuLink">
            
            <li><a className="dropdown-item" href="#">Perfil</a></li>
            <li><a className="dropdown-item" href="#">Configuraciones</a></li>
          </ul>
        </li>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar