import { useDispatch, useSelector } from "react-redux"
import { FaBars, FaEye, FaPlusCircle, FaThLarge, FaTrash, FaUserEdit } from "react-icons/fa";
import { useEffect } from "react";
import { deleteStudent, getAllStudents } from "../store/students";
import { Link } from "react-router-dom";

const StudentPanel = () => {
    const dispatch = useDispatch()
    const { students, loading } = useSelector(state => state.students)

    useEffect(() => {
        dispatch(getAllStudents())
    }, [])

    const handleStudentDelete = (id) => {
        dispatch(deleteStudent(id));
        dispatch(getAllStudents());
    }

    return (
        <main className="lg:p-8 md:p-6 p-4 bg-gray-50 min-h-screen">
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-4 lg:space-y-0">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">Student Management</h2>
                        <p className="text-gray-600 text-sm">Manage student records, grades, and information</p>
                    </div>

                    <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 w-full lg:w-auto">
                        <Link
                            to="/admin/add-student"
                            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-200 flex items-center justify-center space-x-3 cursor-pointer shadow-sm hover:shadow-md">
                            <FaPlusCircle className="text-lg" />
                            <span>Add New Student</span>
                        </Link>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-8">
                    <div className="relative flex-1 max-w-md">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        <input
                            type="text"
                            placeholder="Search students..."
                            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 transition-all duration-200"
                        />
                    </div>

                    <select className="px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 transition-all duration-200">
                        <option value="">All Courses</option>
                        <option value="web-development">Web Development</option>
                        <option value="mobile-development">Mobile Development</option>
                        <option value="data-science">Data Science</option>
                    </select>
                </div>
            </div>


            <div className="flex justify-between items-center mb-4">
                <div className="text-sm text-gray-600">
                    Showing <span className="font-semibold">24</span> of <span className="font-semibold">124</span> students
                </div>
                <div className="flex space-x-2">
                    <button className="p-2 bg-white border cursor-pointer border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50">
                        <FaThLarge />
                    </button>
                    <button className="p-2 bg-primary text-grey-900 cursor-pointer border border-primary rounded-lg">
                        <FaBars />
                    </button>
                </div>
            </div>


            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        {loading && (
                            <tbody>
                                <tr>
                                    <td colSpan="6" className="p-8">
                                        <div className="flex items-center justify-center space-x-4">
                                            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
                                            <span className="text-lg font-semibold text-gray-600">Loading students...</span>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        )}
                        {!loading && students.length === 0 && (
                            <tbody>
                                <tr>
                                    <td colSpan="6" className="p-8">
                                        <div className="text-center">
                                            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                                            </svg>
                                            <h3 className="mt-4 text-lg font-medium text-gray-900">No students found</h3>
                                            <p className="mt-1 text-sm text-gray-500">Get started by adding a new student.</p>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        )}
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Student Information
                                </th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Course
                                </th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Date of Birth
                                </th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Enrollment Date
                                </th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Fees Status
                                </th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">

                            {students.map((val) => (
                                <tr key={val._id} className="hover:bg-gray-50 transition-all duration-200">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="shrink-0 h-12 w-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white shadow-sm">
                                                <span className="text-lg font-semibold">{val.name[0].toUpperCase()}</span>
                                            </div>
                                            <div className="ml-4">
                                                <div className="text-sm font-semibold text-gray-900">
                                                    {val.name}
                                                </div>
                                                <div className="text-sm text-gray-500 mt-1">
                                                    {val.email}
                                                </div>
                                            </div>
                                        </div>
                                    </td>

                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="inline-flex items-center px-2.5 py-1 rounded-lg bg-blue-50 border border-blue-100">
                                            <span className="text-sm font-medium text-blue-700">{val.course}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-600">
                                            {val.dob}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-600">
                                            10/12/2025
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="inline-flex px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800 border border-green-200">
                                            Completed
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center space-x-3">
                                            <button className="p-2 text-blue-600 hover:text-blue-900 hover:bg-blue-50 rounded-lg transition-all duration-200">
                                                <FaUserEdit className="text-lg" />
                                            </button>
                                            <button className="p-2 text-green-600 hover:text-green-900 hover:bg-green-50 rounded-lg transition-all duration-200">
                                                <FaEye className="text-lg" />
                                            </button>
                                            <button
                                                onClick={() => handleStudentDelete(val._id)}
                                                className="p-2 text-red-600 hover:text-red-900 hover:bg-red-50 rounded-lg transition-all duration-200"
                                            >
                                                <FaTrash className="text-lg" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>


                <div className="bg-white px-6 py-4 flex items-center justify-between border-t border-gray-100">
                    <div className="flex-1 flex justify-between sm:hidden">
                        <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-xl text-gray-700 bg-white hover:bg-gray-50 transition-all duration-200">
                            Previous
                        </button>
                        <button className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-xl text-gray-700 bg-white hover:bg-gray-50 transition-all duration-200">
                            Next
                        </button>
                    </div>
                    <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                        <div>
                            <p className="text-sm text-gray-700">
                                Showing <span className="font-semibold text-gray-900">1</span> to <span className="font-semibold text-gray-900">5</span> of{' '}
                                <span className="font-semibold text-gray-900">124</span> results
                            </p>
                        </div>
                        <div>
                            <nav className="relative z-0 inline-flex gap-2" aria-label="Pagination">
                                <button className="relative inline-flex items-center px-3 py-2 rounded-xl border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-all duration-200">
                                    <span className="sr-only">Previous</span>
                                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </button>
                                <button className="relative inline-flex items-center px-4 py-2 border border-blue-600 bg-blue-600 text-sm font-medium text-white hover:bg-blue-700 transition-all duration-200 rounded-xl">
                                    1
                                </button>
                                <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 transition-all duration-200 rounded-xl">
                                    2
                                </button>
                                <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 transition-all duration-200 rounded-xl">
                                    3
                                </button>
                                <button className="relative inline-flex items-center px-3 py-2 rounded-xl border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-all duration-200">
                                    <span className="sr-only">Next</span>
                                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default StudentPanel