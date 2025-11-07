import { useSelector } from 'react-redux'

const Dashboard = () => {
    const { students, loading } = useSelector(state => state.students)

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
                        {students.map((student) => (
                            <div key={student._id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                <div className="flex items-center space-x-3">
                                    <img src="https://ui-avatars.com/api/?name=Aisha+Khan&background=10B981&color=fff" alt="Aisha" className="w-10 h-10 rounded-full" />
                                    <div>
                                        <p className="font-medium">Aisha Khan</p>
                                        <p className="text-xs text-gray-500">Mathematics</p>
                                    </div>
                                </div>
                                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">A+</span>
                            </div>))}


                        <button className='mt-10 cursor-pointer float-end bg-blue-600 py-2.5 px-5 w-full rounded-2xl text-white hover:bg-blue-800'>View all</button>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Dashboard