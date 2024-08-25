import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import My_services from './components/Services/My_services'
import My_work from './components/Mywork/Mywork'
import Contact from './components/Contact/contact'
import Footer from './components/footer/Footer'










const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <My_services/>
      <My_work/>
      <Contact/>
      <Footer/>
    
      
    </div>
  )
}

export default App