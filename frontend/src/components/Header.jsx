import { Link } from "react-router-dom"


const Header = () => {
    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold text-gray-800">Ilham Sir</Link>
                <div className="hidden md:flex space-x-6">
                    <Link to="/" className="text-gray-600 hover:text-indigo-600 transition duration-300">Home</Link>
                    <Link to="/about" className="text-gray-600 hover:text-indigo-600 transition duration-300">About</Link>
                    <Link to="/course" className="text-gray-600 hover:text-indigo-600 transition duration-300">DIT Course</Link>
                    <Link to="/students" className="text-gray-600 hover:text-indigo-600 transition duration-300">Students</Link>
                    <Link to="/contact" className="text-gray-600 hover:text-indigo-600 transition duration-300">Contact</Link>
                </div>
                <button id="mobile-menu-button" className="md:hidden flex items-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7">
                        </path>
                    </svg>
                </button>
            </nav>

            <div id="mobile-menu" className="hidden md:hidden">
                <Link to="/home" className="block py-2 px-4 text-sm hover:bg-gray-100">Home</Link>
                <Link to="/about" className="block py-2 px-4 text-sm hover:bg-gray-100">About</Link>
                <Link to="/course" className="block py-2 px-4 text-sm hover:bg-gray-100">DIT Course</Link>
                <Link to="/students" className="block py-2 px-4 text-sm hover:bg-gray-100">Resources</Link>
                <Link to="/contact" className="block py-2 px-4 text-sm hover:bg-gray-100">Contact</Link>
            </div>
        </header>
    )
}

export default Header