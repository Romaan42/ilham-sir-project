

import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        course: 'Select a course',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Add your form submission logic here
        // For now, we'll just simulate a submission
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
    };

    const contactInfo = [
        {
            icon: "📱",
            title: "Phone",
            details: ["+92 308 5367805"],
            className: "bg-blue-50"
        },
        {
            icon: "📧",
            title: "Email",
            details: ["ilhamkhan2013@gmail.com"],
            className: "bg-green-50"
        },
        {
            icon: "📍",
            title: "Location",
            details: ["Babakrai Tarnab", "Charsadda, KPK"],
            className: "bg-purple-50"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 my-20">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
                        <p className="text-xl text-blue-100">
                            Have questions? We'd love to hear from you. Send us a message
                            and we'll respond as soon as possible.
                        </p>
                    </div>
                </div>
            </div>

            {/* Contact Information Cards */}
            <div className="container mx-auto px-4 py-12">
                <div className="grid justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {contactInfo.map((info, index) => (
                        <div
                            key={index}
                            className={`${info.className} rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300`}
                        >
                            <div className="text-4xl mb-4">{info.icon}</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{info.title}</h3>
                            {info.details.map((detail, idx) => (
                                <p key={idx} className="text-gray-600">{detail}</p>
                            ))}
                        </div>
                    ))}
                </div>

                {/* Contact Form Section */}
                <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        {/* Form */}
                        <div className="p-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-gray-700 mb-2" htmlFor="name">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 mb-2" htmlFor="email">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 mb-2" htmlFor="phone">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 mb-2" htmlFor="course">
                                        Interested Course
                                    </label>
                                    <select
                                        id="course"
                                        name="course"
                                        value={formData.course}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        required
                                    >
                                        <option value="Select a course" disabled>Select a course</option>
                                        <option value="Web Development">Web Development</option>
                                        <option value="Python Programming">Python Programming</option>
                                        <option value="MS Office">MS Office</option>
                                        <option value="Adobe Photoshop">Adobe Photoshop</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-gray-700 mb-2" htmlFor="message">
                                        Your Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="4"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        required
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
                                >
                                    Send Message
                                </button>
                            </form>
                            {submitted && (
                                <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-lg">
                                    Thank you for your message! We'll get back to you soon.
                                </div>
                            )}
                        </div>

                        {/* Map */}
                        <div className="relative h-full min-h-[400px] bg-gray-300">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519.574382253604!2d71.67956565048223!3d34.22067834767976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38db52d2f8fd751f%3A0x46b7a1f7e614925c!2sPakistan!5e0!3m2!1sen!2s!4v1761321664904!5m2!1sen!2s"
                                referrerpolicy="no-referrer-when-downgrade"
                                className="absolute inset-0 w-full h-full"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>

            {/* Social Media Section */}
            <div className="bg-gray-100 py-12">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
                        Connect With Us
                    </h2>
                    <div className="flex justify-center space-x-6">
                        {[
                            { icon: "📱", name: "Facebook" },
                            { icon: "📸", name: "Instagram" },
                            { icon: "🐦", name: "Twitter" },
                            { icon: "💼", name: "LinkedIn" }
                        ].map((social, index) => (
                            <a
                                key={index}
                                href="#"
                                className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
                            >
                                <span className="text-xl">{social.icon}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;