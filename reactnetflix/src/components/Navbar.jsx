import React from 'react'
import { useAtom } from 'jotai'
import { languageAtom } from '../jotai/atoms'

const Navbar = () => {
  const [, setLanguage] = useAtom(languageAtom)

  return (
    <div className='navbar'>
        <h3>Netflix Clone</h3>
        <div>
            <button className="btn btn-accent mr-4" onClick={()=> setLanguage("id")}>Indonesia</button>
            <button className="btn" onClick={()=> setLanguage("en")}>English</button>
        </div>
    </div>
  )
}

export default Navbar