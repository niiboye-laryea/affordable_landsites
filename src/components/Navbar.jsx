import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const NavLinks = () => {
    return (
        <>
            {/* <NavLink to="#">Home</NavLink>
            <NavLink to="#what_we_offer">What we offer</NavLink>
            <NavLink to="#about_us">About Us</NavLink>
            <NavLink to="#contact_us">Contact Us</NavLink> */}
            <a href="#" className='alinks'>Home</a>
            <a href="#what_we_offer" className='alinks'>What we offer</a>
            <a href="#about_us" className='alinks'>About Us</a>
            <a href="#contact_us" className='alinks'>Contact Us</a>
        </>
    );
}

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (<>
        <div className="sticky top-0 bg-slate-50/90 flex flex-row justify-between items-center px-10 w-full h-18">
            <div>logo</div>
            <nav className='w-1/3'>
                <div className='hidden lg:flex gap-3 justify-end'>
                    <NavLinks />
                </div>
                <div className='lg:hidden text-right'>
                    <button onClick={toggleMenu}>{ isOpen ? <X /> : <Menu />}</button>
                </div>
            </nav>
            {
                isOpen && (
                    <div className='absolute flex flex-col gap-3 w-1/3 bg-slate-100/95 pl-4 pb-4 pt-4 top-18 right-0 left-auto'>
                        <NavLinks />
                    </div>
                )
            }
        </div>
        
    </>);
}

export default Navbar;