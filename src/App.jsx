import { useState } from 'react'
import './App.css'
import Clients from './components/Clients'
import CreditLines from './components/CreditLines'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {

  return (
    <div className="bg-primary">
      <Navbar />
      <Clients />
      <CreditLines />
      <Footer />
    </div>
  )
}

export default App
