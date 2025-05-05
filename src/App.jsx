import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'


function App() {

  return (
    <div className='min-screen-h px-6 py-3 flex flex-col gap-10 md:px-10 lg:px-16 lg:py-7'>
      <Header/>
      <main>
      <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}

export default App