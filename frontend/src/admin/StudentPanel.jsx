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
        <main className="p-6">

            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-4 lg:space-y-0">
                    <div>
                        <h2 className="text-xl font-bold text-gray-900">All Students</h2>
                        <p className="text-gray-600">Manage student records, grades, and information</p>
                    </div>

                    <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 w-full lg:w-auto">
                        <Link to="/admin/add-student" className="bg-blue-600 hover:bg-blue-800 text-white px-4 py-2 rounded-lg font-medium transition duration-200 flex items-center justify-center space-x-2 cursor-pointer">
                            <FaPlusCircle />
                            <span>Add New Student</span>
                        </Link>

                    </div>
                </div>

                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 mt-6">
                    <div className="relative flex-1 max-w-md">
                        <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                        <input
                            type="text"
                            placeholder="Search students by name, ID, or email..."
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                    </div>

                    <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
                        <option>All Courses</option>

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


            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="overflow-x-auto">

                    <table className="min-w-full divide-y divide-gray-200">
                        {loading && <h1 className="p-5 font-bold text-center">Loading students...</h1>}
                        {!loading && students.length === 0 && <h1 className="p-5 font-bold text-center">No students found</h1>}
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Student
                                </th>

                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Course
                                </th>

                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Date of birth
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Enroll Date
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Fees
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">

                            {students.map((val) => (
                                <tr key={val._id} className="hover:bg-gray-50 transition duration-150">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0 h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                                                <span className="text-blue-600 font-medium">{val.name[0]}</span>
                                            </div>
                                            <div className="ml-4">
                                                <div className="text-sm font-medium text-gray-900">
                                                    {val.name}
                                                </div>
                                                <div className="text-sm text-gray-500">
                                                    {val.email}
                                                </div>
                                            </div>
                                        </div>
                                    </td>

                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">{val.course}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div>
                                            {val.dob}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            10/12/2025
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="inline-flex px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                                            Completed
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                        <div className="flex space-x-2">
                                            <button className="text-blue-600 text-2xl cursor-pointer hover:text-blue-900 transition duration-150">
                                                <FaUserEdit />
                                            </button>
                                            <button className="text-green-600 text-2xl cursor-pointer hover:text-green-900 transition duration-150">
                                                <FaEye />
                                            </button>

                                            <button className="text-red-600 text-1xl cursor-pointer hover:text-red-900 transition duration-150">
                                                <FaTrash onClick={() => handleStudentDelete(val._id)} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>


                <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
                    <div className="flex-1 flex justify-between sm:hidden">
                        <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                            Previous
                        </a>
                        <a href="#" className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                            Next
                        </a>
                    </div>
                    <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                        <div>
                            <p className="text-sm text-gray-700">
                                Showing <span className="font-medium">1</span> to <span className="font-medium">5</span> of <span className="font-medium">124</span> results
                            </p>
                        </div>
                        <div>
                            <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                                <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                                    <span className="sr-only">Previous</span>
                                    <i className="fas fa-chevron-left"></i>
                                </a>
                                <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                                    1
                                </a>
                                <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                                    2
                                </a>
                                <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                                    3
                                </a>
                                <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                                    <span className="sr-only">Next</span>
                                    <i className="fas fa-chevron-right"></i>
                                </a>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default StudentPanel