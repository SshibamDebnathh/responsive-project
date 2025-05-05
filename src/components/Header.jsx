import { useEffect } from 'react'
import React from 'react'
import { NavLink, Link } from 'react-router-dom'

function Header() {
    const [navbarSm, setnavbarSm] = React.useState(true)

    useEffect(() => {
        console.log("useeffect")
        if (navbarSm) return;

        const handleScroll = () => {
            console.log('navbar removed');
            console.log('scroll', window.scrollY, "px");
            setnavbarSm(!navbarSm)
        }

        window.addEventListener('scroll', handleScroll)

        // cleanup when unmounted
        return () => {
            console.log('Scroll listener removed');
            window.removeEventListener("scroll", handleScroll)
        };
    }
        , [navbarSm])

    return (

        <div>
        
            <header className='flex justify-between'>
                <Link href="#LCA" className='flex items-center'>
                    <h1 className='text-4xl font-bold'>LCA.</h1>
                </Link>
            <ul className={navbarSm ? 'hidden lg:flex lg:gap-8 lg:text-xl' : 'lg:flex lg:gap-8 lg:text-xl md:text-lg fixed top-10 bg-white border-1 border-purple-800 shadow-black shadow-2xl right-0 p-4 rounded-md lg:static lg:border-0 lg:shadow-none lg:p-0'} >
                <li><NavLink className={({ isActive }) => `${isActive ? `text-purple-600` : `text-black`}`} to="/" >Home</NavLink></li>
                <li><NavLink className={({ isActive }) => `${isActive ? `text-purple-600` : `text-black`}`} to="/about" >About</NavLink></li>
                <li><NavLink className={({ isActive }) => `${isActive ? `text-purple-600` : `text-black`}`} to="/services" >Services</NavLink></li>
                <li><NavLink className={({ isActive }) => `${isActive ? `text-purple-600` : `text-black`}`} to="/contact" >Contact</NavLink></li>
                <li><NavLink className={({ isActive }) => `${isActive ? `text-purple-600` : `text-black`}`} to="/testimonial" >Testimonials</NavLink></li>
            </ul>
                <div className='hidden lg:text-xl lg:flex lg:gap-2'>
                    <Link href="#login" className='border-1 px-4 py-1 rounded-md hover:bg-black hover:text-white'>Login</Link>
                    <Link href="#register" className="bg-purple-800 text-white py-1 px-4 border -1 border-purple-800 rounded-md hover:bg-white hover:text-purple-800">Register</Link>
                </div>
                <div className='lg:hidden'>
                    <i className='fa-solid fa-bars fa-2x' onClick={() => { setnavbarSm(!navbarSm) }}></i>
                </div>
            </header>
         </div>
    )
}

export default Header