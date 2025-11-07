
const About = () => {
    return (
        <div className="min-h-screen bg-gray-50 mb-20">
            {/* Hero Section */}
            <div className="relative bg-white py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-6">
                            About Our Company
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            We are passionate about delivering exceptional value and innovative solutions
                            to our clients. Our journey began with a simple idea: to make a difference.
                        </p>
                    </div>
                </div>
            </div>

            {/* Values Section */}
            <div className="py-16 bg-gray-100">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Innovation",
                                description: "Pushing boundaries and embracing new technologies",
                                icon: "💡"
                            },
                            {
                                title: "Excellence",
                                description: "Delivering the highest quality in everything we do",
                                icon: "⭐"
                            },
                            {
                                title: "Integrity",
                                description: "Building trust through honest and ethical practices",
                                icon: "🤝"
                            }
                        ].map((value, index) => (
                            <div key={index} className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <div className="text-4xl mb-4">{value.icon}</div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                                <p className="text-gray-600">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { number: "10+", label: "Years Experience" },
                            { number: "200+", label: "Projects Completed" },
                            { number: "50+", label: "Team Members" },
                            { number: "95%", label: "Client Satisfaction" }
                        ].map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                                <div className="text-gray-600">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Team Section */}
            <div className="py-16 bg-gray-100">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Leadership Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                name: "John Doe",
                                role: "CEO & Founder",
                                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            },
                            {
                                name: "Sarah Johnson",
                                role: "CTO",
                                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            },
                            {
                                name: "Michael Brown",
                                role: "Head of Design",
                                image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            }
                        ].map((member, index) => (
                            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                                    <p className="text-gray-600">{member.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Mission Statement */}
            <div className="py-16 bg-blue-600 text-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                        <p className="text-xl leading-relaxed">
                            To empower businesses through innovative technology solutions while maintaining
                            the highest standards of quality and customer satisfaction. We strive to make
                            a positive impact in everything we do.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;