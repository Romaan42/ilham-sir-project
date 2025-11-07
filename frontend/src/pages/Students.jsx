

import { useState, useEffect } from 'react';

const Students = () => {
    const [students, setStudents] = useState([
        {
            id: 1,
            name: "John Doe",
            email: "john.doe@example.com",
            course: "Web Development",
            enrollmentDate: "2023-09-15",
            status: "active",
            progress: 75,
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
        },
        {
            id: 2,
            name: "Jane Smith",
            email: "jane.smith@example.com",
            course: "Python Programming",
            enrollmentDate: "2023-08-20",
            status: "active",
            progress: 90,
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
        },
        {
            id: 3,
            name: "Mike Johnson",
            email: "mike.j@example.com",
            course: "MS Office Professional",
            enrollmentDate: "2023-10-01",
            status: "active",
            progress: 45,
            image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
        }
    ]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterCourse, setFilterCourse] = useState('all');


    // Filter and search functionality
    const filteredStudents = students.filter(student => {
        const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            student.email.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCourse = filterCourse === 'all' || student.course === filterCourse;
        return matchesSearch && matchesCourse;
    });

    // Get unique courses for filter dropdown
    const courses = [...new Set(students.map(student => student.course))];

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
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredStudents.map((student) => (
                            <div key={student.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                                <div className="relative">
                                    <img
                                        src={student.image}
                                        alt={student.name}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-semibold ${student.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                                        }`}>
                                        {student.status}
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{student.name}</h3>
                                    <p className="text-gray-600 mb-4">{student.email}</p>
                                    <div className="space-y-3">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-500">Course:</span>
                                            <span className="font-medium text-gray-900">{student.course}</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-500">Enrolled:</span>
                                            <span className="font-medium text-gray-900">
                                                {new Date(student.enrollmentDate).toLocaleDateString()}
                                            </span>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-500">Progress:</span>
                                                <span className="font-medium text-gray-900">{student.progress}%</span>
                                            </div>
                                            <div className="w-full bg-gray-200 rounded-full h-2">
                                                <div
                                                    className="bg-blue-600 h-2 rounded-full"
                                                    style={{ width: `${student.progress}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                                        View Profile
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* No Results */}
                {!loading && !error && filteredStudents.length === 0 && (
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