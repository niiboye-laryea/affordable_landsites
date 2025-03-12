import React from 'react';
import { color, motion } from 'framer-motion';

var Navbar = () => {
    const menuItems = ['Home', 'What we offer', 'Contact Us', 'About Us'];
    
    return (
        <div className="sticky top-0 bg-slate-50/90 flex flex-row justify-between items-center px-10 w-full h-18">
            <div>logo</div>
            <div className="flex flex-col sm:md:lg:flex-row gap-4 text-gray-500 py-3 px-5 cursor-pointer">
                <ul className="flex flex-col md:flex-row md:space-x-4">
                    {
                        menuItems.map((item, index) => (
                            <motion.li
                                key = {index}
                                whileHover = {{ scale: 1.05, color: "black" }}
                                className = "menu-items"
                            > {item} </motion.li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Navbar