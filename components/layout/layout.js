import Nav from '../navbar/navbar'
import Footer from './footer'
import { React } from 'react'


const Layout = ({ preview, children }) => {

  return (
    <>
        
        <Nav/>
                  <div className="">
                    {children}
                  </div>    
        <Footer/>          
    </>
  )
}

export default Layout