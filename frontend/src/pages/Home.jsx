

const Home = () => {
    return (

        <main>

            <section id="home" className="bg-indigo-600 text-white">
                <div className="container mx-auto px-6 py-20 md:py-32 text-center">
                    <div className="flex flex-col md:flex-row items-center justify-center">
                        <img src="https://placehold.co/150x150/ffffff/6366f1?text=IS" alt="Ilham Sir"
                            className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-lg mb-6 md:mb-0 md:mr-10" />
                        <div>
                            <h1 className="text-4xl md:text-6xl font-bold">Ilham Sir</h1>
                            <p className="mt-4 text-lg md:text-xl">Your Guide to Mastering Information Technology</p>
                            <p className="mt-2 text-indigo-200 text-sm md:text-base max-w-2xl mx-auto">"Empowering the next
                                generation of tech professionals with knowledge and passion."</p>
                        </div>
                    </div>
                </div>
            </section>


            <section id="about" className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
                    <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10">
                        <div className="md:w-2/3">
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Hello and welcome! I am Ilham, a dedicated Computer Science educator with a passion for
                                demystifying the world of technology. With several years of experience in the field, my goal
                                is to make learning Information Technology an engaging and rewarding experience for every
                                student.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                I specialize in teaching the Diploma in Information Technology (DIT) curriculum, focusing on
                                building strong foundational skills in programming, database management, web development,
                                and networking. I believe in a hands-on approach, encouraging students to build projects and
                                solve real-world problems.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                My teaching philosophy is simple: inspire curiosity, foster critical thinking, and equip
                                students with the practical skills they need to succeed in the ever-evolving tech industry.
                            </p>
                        </div>
                        <div className="md:w-1/3 text-center">
                            <img src="https://placehold.co/200x200/6366f1/ffffff?text=Ilham+Sir" alt="Ilham Sir"
                                className="w-40 h-40 rounded-full border-4 border-indigo-600 shadow-lg mx-auto" />
                        </div>
                    </div>
                </div>
            </section>


            <section id="course" className="py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-12">DIT Course Outline</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                        <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
                            <h3 className="text-xl font-semibold mb-2 text-indigo-700">Introduction to IT & OS</h3>
                            <p className="text-gray-600">Understanding the fundamentals of computers, hardware, software, and
                                operating systems like Windows.</p>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
                            <h3 className="text-xl font-semibold mb-2 text-indigo-700">MS Office Suite</h3>
                            <p className="text-gray-600">Mastering essential productivity tools: MS Word, MS Excel, and MS
                                PowerPoint for professional documentation and data analysis.</p>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
                            <h3 className="text-xl font-semibold mb-2 text-indigo-700">Programming Fundamentals</h3>
                            <p className="text-gray-600">Learning the basics of programming logic and syntax using languages
                                like C++ or Python.</p>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
                            <h3 className="text-xl font-semibold mb-2 text-indigo-700">Web Development</h3>
                            <p className="text-gray-600">An introduction to creating websites with HTML, CSS, and basic
                                JavaScript.</p>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
                            <h3 className="text-xl font-semibold mb-2 text-indigo-700">Database Management</h3>
                            <p className="text-gray-600">Understanding how to design and manage databases using MS Access or
                                SQL.</p>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
                            <h3 className="text-xl font-semibold mb-2 text-indigo-700">Networking Basics</h3>
                            <p className="text-gray-600">Covering the core concepts of computer networks, topologies, and the
                                internet.</p>
                        </div>
                    </div>
                </div>
            </section>


            <section id="resources" className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-12">Student Resources</h2>
                    <div className="max-w-4xl mx-auto space-y-4">
                        <a href="#" className="block bg-gray-100 p-4 rounded-lg hover:bg-indigo-100 transition duration-300">
                            <h3 className="font-semibold text-gray-800">Lecture Notes & Slides</h3>
                            <p className="text-sm text-gray-600">Download PDF notes from recent classNamees.</p>
                        </a>
                        <a href="#" className="block bg-gray-100 p-4 rounded-lg hover:bg-indigo-100 transition duration-300">
                            <h3 className="font-semibold text-gray-800">Online Coding Platforms</h3>
                            <p className="text-sm text-gray-600">Links to websites like HackerRank or LeetCode to practice
                                coding.</p>
                        </a>
                        <a href="#" className="block bg-gray-100 p-4 rounded-lg hover:bg-indigo-100 transition duration-300">
                            <h3 className="font-semibold text-gray-800">Recommended YouTube Channels</h3>
                            <p className="text-sm text-gray-600">A curated list of channels for visual learning.</p>
                        </a>
                    </div>
                </div>
            </section>


            <section id="contact" className="py-20">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">Have questions about the DIT course or need guidance on
                        a project? Feel free to reach out.</p>
                    <a href="mailto:ilham.sir@example.com"
                        className="bg-indigo-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-indigo-700 transition duration-300">
                        Email Me
                    </a>
                    <p className="text-sm text-gray-500 mt-4">(ilham.sir@example.com)</p>
                </div>
            </section>

        </main>

    )
}

export default Home