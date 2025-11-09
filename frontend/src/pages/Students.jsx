import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllStudents } from '../store/students';


const Students = () => {
    const dispatch = useDispatch();

    const [searchTerm, setSearchTerm] = useState('');
    const [filterCourse, setFilterCourse] = useState('all');

    const { students, loading, error } = useSelector(state => state.students)




    // Get unique courses for filter dropdown
    const courses = [...new Set(students.map(student => student.course))];

    useEffect(() => {
        dispatch(getAllStudents());
    }, []);

    return (
        <div className="min-h-screen bg-gray-50">

            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Students</h1>
                        <p className="text-xl text-blue-100">
                            Meet our talented students and their progress in various courses
                        </p>
                    </div>
                </div>
            </div>

            {/* Filters and Search */}
            <div className="container mx-auto px-4 py-8">
                <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search students..."
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <span className="absolute right-3 top-2.5 text-gray-400">🔍</span>
                        </div>
                        <select
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            value={filterCourse}
                            onChange={(e) => setFilterCourse(e.target.value)}
                        >
                            <option value="all">All Courses</option>
                            {courses.map(course => (
                                <option key={course} value={course}>{course}</option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Loading State */}
                {loading && (
                    <div className="text-center py-12">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                        <p className="mt-4 text-gray-600">Loading students data...</p>
                    </div>
                )}

                {/* Error State */}
                {error && !loading && (
                    <div className="text-center py-12">
                        <div className="text-red-600 text-xl">⚠️ {error}</div>
                    </div>
                )}

                {/* Students Grid */}
                {!loading && !error && (
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

                                    </tr>
                                ))}

                            </tbody>
                        </table>
                    </div>
                )}

                {/* No Results */}
                {!loading && !error && students.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-gray-600 text-xl">No students found matching your criteria</p>
                    </div>
                )}
            </div>

            {/* Statistics Section */}
            <div className="bg-white py-12 mt-8">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { label: "Total Students", value: students.length },
                            { label: "Active Students", value: students.filter(s => s.status === 'active').length },
                            { label: "Courses Offered", value: courses.length },
                            { label: "Average Progress", value: `${Math.round(students.reduce((acc, curr) => acc + curr.progress, 0) / students.length)}%` }
                        ].map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                                <div className="text-gray-600">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Students;