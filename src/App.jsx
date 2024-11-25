import React from 'react'
import ProductListening from './pages/ProductListening'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='text-3xl'>
      <Header/>
      <ProductListening/>
      <Footer/>
    </div>
  )
}

export default App