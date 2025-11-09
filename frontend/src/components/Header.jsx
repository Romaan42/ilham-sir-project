import { Link } from "react-router-dom"
import { FaBarsStaggered } from "react-icons/fa6";
import { useState } from "react";


const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);


    return (
        <header className="bg-white shadow-md sticky top-0 z-50 h-16">
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold text-gray-800">Ilham Sir</Link>
                <div className="hidden md:flex space-x-6 ">
                    <Link to="/" className="text-gray-600 hover:text-indigo-600 transition duration-300">Home</Link>
                    <Link to="/about" className="text-gray-600 hover:text-indigo-600 transition duration-300">About</Link>
                    <Link to="/course" className="text-gray-600 hover:text-indigo-600 transition duration-300">DIT Course</Link>
                    <Link to="/students" className="text-gray-600 hover:text-indigo-600 transition duration-300">Students</Link>
                    <Link to="/contact" className="text-gray-600 hover:text-indigo-600 transition duration-300">Contact</Link>
                </div>
                <button id="mobile-menu-button" className="md:hidden flex items-center cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>

                    <FaBarsStaggered size={20} />
                </button>
            </nav>

            <div id="mobile-menu" className={`${!isMenuOpen ? "-translate-y-100" : "-translate-y-0"} md:hidden transition-all duration-300 h-fit bg-white shadow-md w-full`}>
                <Link to="/home" className=" block py-2 px-4 text-sm hover:bg-gray-100">Home</Link>
                <Link to="/about" className="block py-2 px-4 text-sm hover:bg-gray-100">About</Link>
                <Link to="/course" className="block py-2 px-4 text-sm hover:bg-gray-100">DIT Course</Link>
                <Link to="/students" className="block py-2 px-4 text-sm hover:bg-gray-100">Resources</Link>
                <Link to="/contact" className="block py-2 px-4 text-sm hover:bg-gray-100">Contact</Link>
            </div>
        </header>
    )
}

export default Header