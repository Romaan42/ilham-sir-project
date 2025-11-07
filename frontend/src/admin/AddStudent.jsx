import axios from "axios";
import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";

const AddStudent = () => {
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        const allData = {
            name: e.target.name.value,
            fatherName: e.target.fatherName.value,
            phone: e.target.phone.value,
            dob: e.target.dateOfBirth.value,
            gender: e.target.gender.value,
            email: e.target.email.value,
            address: e.target.address.value,
            course: e.target.courses.value,
            enrlDate: e.target.enrollDate.value,
            fees: e.target.fees.value,
        };
        axios
            .post("http://localhost:3000/student", allData)
            .then((res) => {
                toast.success(res.data.message);
                document.getElementById("studentForm").reset();
            })
            .catch(() => {
                toast.error("user added failed");
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <Toaster position="top-center" reverseOrder={false} />
            <form id="studentForm" className="p-8" onSubmit={handleSubmit}>
                <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                        <i className="fas fa-user-circle text-primary mr-2"></i>
                        Personal Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Full Name <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <i className="fas fa-user absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                                <input
                                    type="text"
                                    name="name"
                                    id="fullName"
                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition duration-200"
                                    placeholder="Enter full name"
                                    required
                                />
                            </div>
                            <p className="text-red-500 text-xs mt-1 hidden" id="nameError">
                                Please enter a valid name
                            </p>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Father Name <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <i className="fas fa-user absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                                <input
                                    type="text"
                                    id="fatherName"
                                    name="fatherName"
                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition duration-200"
                                    placeholder="Enter Father name"
                                    required
                                />
                            </div>
                            <p className="text-red-500 text-xs mt-1 hidden" id="nameError">
                                Please enter a valid name
                            </p>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Phone Number <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <i className="fas fa-phone absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition duration-200"
                                    placeholder="Enter phone number"
                                    required
                                />
                            </div>
                            <p className="text-red-500 text-xs mt-1 hidden" id="phoneError">
                                Please enter a valid phone number
                            </p>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Date of Birth <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <i className="fas fa-calendar absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                                <input
                                    type="date"
                                    name="dateOfBirth"
                                    id="dob"
                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition duration-200"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Gender <span className="text-red-500">*</span>
                            </label>
                            <div className="grid grid-cols-2 gap-3">
                                <label className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition duration-200">
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="male"
                                        className="text-primary focus:ring-primary"
                                    />
                                    <span className="ml-2 text-gray-700">Male</span>
                                </label>
                                <label className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition duration-200">
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="female"
                                        className="text-primary focus:ring-primary"
                                    />
                                    <span className="ml-2 text-gray-700">Female</span>
                                </label>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Email Address <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <i className="fas fa-envelope absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition duration-200"
                                    placeholder="Enter email address"
                                    required
                                />
                            </div>
                            <p className="text-red-500 text-xs mt-1 hidden" id="emailError">
                                Please enter a valid email address
                            </p>
                        </div>

                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Address
                            </label>
                            <div className="relative">
                                <i className="fas fa-map-marker-alt absolute left-3 top-3 text-gray-400"></i>
                                <textarea
                                    id="address"
                                    name="address"
                                    rows="3"
                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition duration-200"
                                    placeholder="Enter full address"
                                ></textarea>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                        <i className="fas fa-graduation-cap text-primary mr-2"></i>
                        Academic Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Course <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <i className="fas fa-book absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                                <select
                                    id="course"
                                    name="courses"
                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition duration-200 appearance-none"
                                    required
                                >
                                    <option value="">Select Course</option>
                                    <option value="D.I.T">D.I.T</option>
                                    <option value="office">MS office</option>
                                    <option value="photoshop">Photoshop</option>
                                </select>
                                <i className="fas fa-chevron-down absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"></i>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Enrollment Date <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <i className="fas fa-calendar-check absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                                <input
                                    type="date"
                                    name="enrollDate"
                                    id="enrollmentDate"
                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition duration-200"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Fees Status <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <i className="fas fa-circle absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                                <select
                                    id="status"
                                    name="fees"
                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition duration-200 appearance-none"
                                    required
                                >
                                    <option value="pending">Pending</option>
                                    <option value="completed">Completed</option>
                                </select>
                                <i className="fas fa-chevron-down absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0 sm:space-x-4 pt-6 border-t border-gray-200">
                    <button
                        type="button"
                        className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition duration-200 flex items-center justify-center space-x-2"
                    >
                        <i className="fas fa-arrow-left"></i>
                        <span>Back to Students</span>
                    </button>
                    <div className="flex space-x-4">
                        <button
                            type="button"
                            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition duration-200 flex items-center justify-center space-x-2"
                        >
                            <i className="fas fa-redo"></i>
                            <span>Reset Form</span>
                        </button>
                        <button
                            type="submit"
                            disabled={loading}
                            className={`px-6 py-3 ${loading ? "bg-blue-400" : "bg-blue-600"} text-white rounded-lg font-medium hover:bg-blue-800 transition duration-200 flex items-center justify-center space-x-2 cursor-pointer`}
                        >
                            <i className="fas fa-user-plus"></i>
                            <span>{loading ? "Adding..." : "Add Student"}</span>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddStudent;
