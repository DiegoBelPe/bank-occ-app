import { useState, useEffect } from 'react'
import './App.css'
import Alert from './components/Alert'
import ClientsList from './components/ClientsList'
import CreditLines from './components/CreditLines'
import Footer from './components/Footer'
import Navbar from './components/Navbar'




function App() {
  
  return (
    <div className="vh-100">
      <Navbar />
      <ClientsList />
      <CreditLines />
      <Alert />
      <Footer />
    </div>
  )
}

export default App
