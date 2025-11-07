const Course = () => {
    const courses = [
        {
            title: "MS Office Professional",
            description: "Master Microsoft Office applications including Word, Excel, PowerPoint, and Access for professional workplace productivity.",
            duration: "3 months",
            level: "Beginner to Advanced",
            topics: ["Word", "Excel", "PowerPoint", "Access", "Outlook"],
            icon: "📊",
            color: "blue"
        },
        {
            title: "Adobe Photoshop",
            description: "Learn professional photo editing, digital art creation, and graphic design using industry-standard Adobe Photoshop.",
            duration: "4 months",
            level: "Beginner to Intermediate",
            topics: ["Photo Editing", "Digital Art", "Graphic Design", "Web Graphics", "Photo Manipulation"],
            icon: "🎨",
            color: "purple"
        },
        {
            title: "Python Programming",
            description: "Develop strong programming foundations with Python, covering data structures, algorithms, and practical applications.",
            duration: "6 months",
            level: "Beginner to Advanced",
            topics: ["Basic Programming", "Data Structures", "GUI Development", "Database Integration", "Web Scraping"],
            icon: "🐍",
            color: "green"
        },
        {
            title: "Web Development",
            description: "Build modern, responsive websites using HTML5, CSS3, JavaScript, and popular frameworks like React.",
            duration: "6 months",
            level: "Beginner to Advanced",
            topics: ["HTML5", "CSS3", "JavaScript", "React", "Responsive Design"],
            icon: "💻",
            color: "orange"
        },
        {
            title: "Database Management",
            description: "Learn database design, SQL, and management using popular systems like MySQL and MongoDB.",
            duration: "3 months",
            level: "Intermediate",
            topics: ["SQL", "Database Design", "MySQL", "MongoDB", "Data Security"],
            icon: "🗄️",
            color: "red"
        },
        {
            title: "Digital Marketing",
            description: "Master digital marketing strategies, social media management, and SEO techniques.",
            duration: "4 months",
            level: "Beginner to Intermediate",
            topics: ["SEO", "Social Media Marketing", "Content Marketing", "Email Marketing", "Analytics"],
            icon: "📱",
            color: "indigo"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 mb-20">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Diploma in Information Technology
                        </h1>
                        <p className="text-xl text-blue-100 leading-relaxed mb-8">
                            Launch your career in IT with our comprehensive diploma program.
                            Master the latest technologies and gain practical skills for the digital world.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
                                Enroll Now
                            </button>
                            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                                Download Brochure
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Courses Grid */}
            <div className="py-16 container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                    Our Course Modules
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {courses.map((course, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                            <div className={`bg-${course.color}-100 p-6 text-center`}>
                                <span className="text-5xl">{course.icon}</span>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                    {course.title}
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    {course.description}
                                </p>
                                <div className="space-y-2">
                                    <div className="flex items-center text-sm text-gray-500">
                                        <span className="mr-2">⏱️</span>
                                        Duration: {course.duration}
                                    </div>
                                    <div className="flex items-center text-sm text-gray-500">
                                        <span className="mr-2">📚</span>
                                        Level: {course.level}
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Topics:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {course.topics.map((topic, i) => (
                                            <span
                                                key={i}
                                                className={`bg-${course.color}-100 text-${course.color}-700 text-xs px-3 py-1 rounded-full`}
                                            >
                                                {topic}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <button className={`mt-6 w-full bg-${course.color}-600 text-white py-2 rounded-lg hover:bg-${course.color}-700 transition-colors`}>
                                    Learn More
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Features Section */}
            <div className="bg-gray-100 py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                        Why Choose Our DIT Program?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: "👨‍🏫",
                                title: "Expert Instructors",
                                description: "Learn from industry professionals with years of experience"
                            },
                            {
                                icon: "💼",
                                title: "Practical Projects",
                                description: "Build real-world projects for your portfolio"
                            },
                            {
                                icon: "🎓",
                                title: "Recognized Certification",
                                description: "Receive an industry-recognized diploma"
                            },
                            {
                                icon: "🤝",
                                title: "Job Assistance",
                                description: "Get placement support and career guidance"
                            }
                        ].map((feature, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                                <div className="text-4xl mb-4">{feature.icon}</div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-blue-600 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4">Ready to Start Your IT Career?</h2>
                    <p className="text-xl text-blue-100 mb-8">
                        Join our DIT program and transform your future in the digital world
                    </p>
                    <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors cursor-pointer">
                        Apply Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Course;