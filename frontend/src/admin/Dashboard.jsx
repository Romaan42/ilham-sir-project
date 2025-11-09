import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllStudents } from '../store/students'
import { Link } from 'react-router-dom'

const Dashboard = () => {
    const dispatch = useDispatch()
    const { students, loading } = useSelector(state => state.students)
    useEffect(() => {
        dispatch(getAllStudents())
    }, [])

    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                <div className="bg-white rounded-xl shadow-sm p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-6">Recent Activity</h3>
                    <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                            <div className="bg-green-100 p-2 rounded-full">
                                <i className="fas fa-user-plus text-green-600"></i>
                            </div>
                            <div>
                                <p className="text-sm font-medium">New student registered</p>
                                <p className="text-xs text-gray-500">Aisha Khan joined Mathematics course</p>
                                <p className="text-xs text-gray-400 mt-1">2 hours ago</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-3">
                            <div className="bg-blue-100 p-2 rounded-full">
                                <i className="fas fa-file-upload text-blue-600"></i>
                            </div>
                            <div>
                                <p className="text-sm font-medium">Assignment submitted</p>
                                <p className="text-xs text-gray-500">Physics assignment by Bilal Ahmed</p>
                                <p className="text-xs text-gray-400 mt-1">5 hours ago</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-3">
                            <div className="bg-purple-100 p-2 rounded-full">
                                <i className="fas fa-chart-line text-purple-600"></i>
                            </div>
                            <div>
                                <p className="text-sm font-medium">Performance improved</p>
                                <p className="text-xs text-gray-500">Sara Malik moved from B+ to A-</p>
                                <p className="text-xs text-gray-400 mt-1">1 day ago</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-3">
                            <div className="bg-yellow-100 p-2 rounded-full">
                                <i className="fas fa-exclamation-triangle text-yellow-600"></i>
                            </div>
                            <div>
                                <p className="text-sm font-medium">Attendance alert</p>
                                <p className="text-xs text-gray-500">Hamza Ali missed 3 consecutive classNamees</p>
                                <p className="text-xs text-gray-400 mt-1">2 days ago</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-6">Top Performing Students</h3>
                    <div className="space-y-4">
                        {students.length === 0 && !loading && <h1 className='text-center font-bold'>No students found</h1>}
                        {loading && <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                            <div className="flex items-center space-x-4 mb-4">
                                <div className="w-16 h-16 bg-gray-300 rounded-full animate-pulse-custom"></div>
                                <div className="flex-1">
                                    <div className="h-4 bg-gray-300 rounded w-3/4 mb-2 animate-pulse-custom"></div>
                                    <div className="h-3 bg-gray-300 rounded w-1/2 animate-pulse-custom"></div>
                                </div>
                            </div>
                            <div className="grid grid-cols-3 gap-4">
                                <div className="h-3 bg-gray-300 rounded animate-pulse-custom"></div>
                                <div className="h-3 bg-gray-300 rounded animate-pulse-custom"></div>
                                <div className="h-3 bg-gray-300 rounded animate-pulse-custom"></div>
                            </div>
                        </div>}
                        {students.map((student) => (
                            <div key={student._id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                <div className="flex items-center space-x-3">
                                    <img src={`https://ui-avatars.com/api/?name=${student.name}&background=10B981&color=fff`} alt={student.name} className="w-10 h-10 rounded-full" />
                                    <div>
                                        <p className="font-medium">{student.name}</p>
                                        <p className="text-xs text-gray-500">{student.course}</p>
                                    </div>
                                </div>
                                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">{student.fee}</span>
                            </div>))}


                        <Link to="/admin/students" className='mt-10 cursor-pointer float-end bg-blue-600 py-2.5 px-5 w-full rounded-2xl text-white hover:bg-blue-800'>View all</Link>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Dashboard