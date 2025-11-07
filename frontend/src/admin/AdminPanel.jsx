import { useState } from 'react';
import { Link, Outlet, useLocation } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { FaBars, FaRegUser } from "react-icons/fa";
import { IoIosPersonAdd } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { useDispatch } from 'react-redux';
import { adminLogout } from '../store/adminLogin';

const AdminPanel = () => {
    const dispatch = useDispatch();
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const location = useLocation();


    const navigation = [
        { name: 'Dashboard', path: '/admin', icon: <MdDashboard /> },
        { name: 'Students', path: '/admin/students', icon: <FaRegUser /> },
        { name: 'Add Student', path: '/admin/add-student', icon: <IoIosPersonAdd /> },

    ];

    const isActivePath = (path) => {
        return location.pathname === path;
    };

    const handleLogout = () => {
        dispatch(adminLogout());
    }
    return (
        <div className="min-h-screen bg-gray-100">
            <FaBars className='absolute text-2xl top-5 left-5 cursor-pointer' onClick={() => setIsSidebarOpen(true)} />
            <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                } transition-transform duration-300 ease-in-out `}>
                {/* Sidebar Header */}
                <div className="flex items-center justify-between h-16 px-4 bg-blue-600 text-white">
                    <h1 className="text-xl font-bold">Admin Panel</h1>

                    <RxCross2 className='text-2xl cursor-pointer' onClick={() => setIsSidebarOpen(false)} />

                </div>

                {/* Navigation Links */}
                <nav className="mt-5 px-2">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            to={item.path}
                            className={`flex items-center px-4 py-3 text-gray-700 rounded-lg mb-1 ${isActivePath(item.path)
                                ? 'bg-blue-50 text-blue-700 font-medium'
                                : 'hover:bg-gray-50'
                                }`}
                        >
                            <span className="text-xl mr-3">{item.icon}</span>
                            {item.name}
                        </Link>
                    ))}
                </nav>
                <div className="absolute bottom-0 w-full mb-4 px-4">
                    <button
                        onClick={handleLogout}
                        className="w-full cursor-pointer bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
                    >
                        Logout
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className={`${isSidebarOpen ? 'ml-64' : 'ml-0'} transition-margin duration-300 ease-in-out`}>
                {/* Top Header */}
                <header className="bg-white shadow-sm">
                    <div className="flex items-center justify-between h-16 px-4">
                        <button
                            onClick={() => setIsSidebarOpen(true)}
                            className={`p-2 rounded-md hover:bg-gray-100 lg:hidden ${isSidebarOpen ? 'hidden' : 'block'
                                }`}
                        >
                            ☰
                        </button>

                        {/* Admin Profile Section */}
                        <div className="flex items-center ml-auto">
                            <div className="relative">
                                <button className="flex items-center space-x-2 text-gray-700 hover:text-gray-900">
                                    <img
                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                        alt="Admin"
                                        className="w-8 h-8 rounded-full"
                                    />
                                    <span className="font-medium">Admin User</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Page Content */}
                <main className="p-6">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default AdminPanel