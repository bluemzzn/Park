import React, { useState } from 'react'
import parkLogo from '../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


function Navbar() {

    const [menuOpen, setmenuOpen] = useState(false);

    const toggleMenu = () => {
        setmenuOpen(!menuOpen)
    }

    return (
        <nav className='bg-[var(--color-green)]'>
            <div className='flex justify-between px-3 py-1.5 md:px-10 md:py-2 h-14 shadow-md'>
                {/* Logo */}
                <img src={parkLogo} alt="parkLogo" className='h-11 w-11' />

                {/* Toggle Menu Button */}
                <div className="md:hidden">
                    <button id='menu-button' className='mt-2' onClick={toggleMenu}><FontAwesomeIcon icon={faBars} /></button>

                </div>

                {/* Navigation bar */}
                <ul className='hidden list-none md:flex md:space-x-4 items-center'>
                    <li><a href="" className='font-bold'>Home</a></li>
                    <li><a href="" className='font-bold'>Rent</a></li>
                    <li><a href="" className='font-bold'>About</a></li>
                    <li><a href="" className='font-bold'>Contact</a></li>
                </ul>

                {/* Mobile Menu */}
                {menuOpen ? (
                    <ul className='flex-col list-none m-4 md:hidden bg-[var(--color-green)]'>
                        <li className='py-2'><a href="" className='font-bold'>Home</a></li>
                        <li className='py-2'><a href="" className='font-bold'>Rent</a></li>
                        <li className='py-2'><a href="" className='font-bold'>About</a></li>
                        <li className='py-2'><a href="" className='font-bold'>Contact</a></li>
                    </ul>
                ) : null}
            </div>

        </nav>
    )
}

export default Navbar
