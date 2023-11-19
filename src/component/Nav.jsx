import React from 'react'
import { navigation } from '../data'
import { Link } from 'react-scroll'

const Nav = () => {
  return (
    <nav className='hidden lg:block'>
      <ul className='lg:flex  space-x-6 font-body font-semibold text-sm text-primary'>
        {
          navigation.map(({name, href}, i) => (
            <li key={i}>
              <Link 
              to={href}
              offset={-120}
              activeClass='active'
              spy={true}
              className='hover:text-accent-hover transition-all duration-300
              cursor-pointer'
              >
              {name}
              </Link>
            </li>
           
          ))
        }
         </ul>
    </nav>
  )
}

export default Nav