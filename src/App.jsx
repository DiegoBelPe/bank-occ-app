import { useState, useEffect } from 'react'
import './App.css'
import Alert from './components/Alert'
import Clients from './components/Clients'
import CreditLines from './components/CreditLines'
import Footer from './components/Footer'
import Navbar from './components/Navbar'




function App() {
  
  return (
    <div className="vh-100">
      <Navbar />
      <Clients />
      <CreditLines />
      <Alert />
      <Footer />
    </div>
  )
}

export default App
