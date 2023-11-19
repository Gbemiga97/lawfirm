import { useState } from 'react'
import { images } from '../constants'
import { navigation } from '../data'
import { Link } from 'react-scroll'

const NavMobile = () => {
   const [isOpen, setIsOpen] = useState(false)


  return (
    <nav className='lg:hidden relative z-20'>
       <button className='cursor-pointer' onClick={() => setIsOpen(true)}>
        <img src={images.BarsIcon} alt="" />
        </button>

       <ul className={`${isOpen ?' right-0' : '-right-full'} bg-primary fixed top-0 w-full h-screen
        text-white transition-all flex flex-col justify-center items-center space-y-8 text-lg`}>

            <button onClick={() => setIsOpen(false)} className='absolute top-6 left-6'>
                <img src={images.CloseIcons} alt="" />
            </button>


            {
              navigation.map(({name, href}, i) => (
                <li>
                  <Link
                  activeClass='active'
                  to={href}
                  spy={true}
                  offset={-200}
                  onClick={() => setIsOpen(false)}
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

export default NavMobile