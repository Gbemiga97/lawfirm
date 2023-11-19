import { useEffect, useState } from "react"
import { Nav, NavMobile } from "../component"
import { images } from "../constants"




const Header = () => {

    const [bg, setBg] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 80 ? setBg(true) : setBg(false)
        })
    })

  return (
    <header className={`${bg && 'bg-white shadow-md py-4'} 
    p-8 lg:px-0 w-full fixed z-10 transition-all duration-300`}>
        <div className="container mx-auto flex items-center justify-between">
            <a href="#">
            <img src={images.logo} alt="logo" />
            </a>

        <Nav />


        <NavMobile />
        </div>

    </header>
  )
}

export default Header