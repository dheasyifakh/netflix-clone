import React from 'react'
import Navbar from './Navbar'

const Layout = ({children}) => {
  return (
    <main className='layout'>
      <Navbar/>
      {children}
    </main>
  )
}

export default Layout