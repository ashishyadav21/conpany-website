import React from 'react'

const Service = () => {
    return (
        <div>
            <div className="scroll-snap-y scroll-smooth">
                <section className="h-[576px] bg-event bg-cover z-10 bg-center items-center justify-center">
                </section>

                <div className='className="container bg-gray-100 -mt-20 m-auto max-w-6xl p-5 flex flex-col items-center"'>
                    <section className="h-auto flex bg-gray-100 justify-center items-center p-4">
                        <div>
                            <h1 className="text-center m-2 text-black mt-5 font-extrabold text-4xl sm:text-3xl">
                                Powering Digital Transformation Globally
                            </h1>
                            <p className="text-center m-1 text-black font-normal mt-4 text-xl sm:text-lg">
                                Through App Modernization, New Product Development and Data Engineering services
                                <br></br>
                                with an integrated Design, Technology, Data Science, Process and
                                <br></br>
                                Change Management teams.
                            </p>
                            <p className="text-center text-gray-400 mt-4 font-light text-lg sm:text-lg">
                                Green Field delivers end-to-end digital transformation strategy and solution for scaling and building
                                <br></br>
                                innovative new products/solutions
                                for enterprises and startups.
                            </p>
                            <div className="mt-10 flex m-2 justify-center items-center">
                                <button className="w-[150px] h-12 sm:text-sm rounded-xl bg-white text-lg text-[#3c4aed] shadow-sm shadow-[#096ad0] transition-all duration-300 ease-in-out hover:bg-[#096ad0] hover:text-white hover:-translate-y-1">
                                    Contact Us
                                </button>
                            </div>
                        </div>
                    </section>
                    <section className="bg-gray-100 mt-4 text-white py-16">
                        <div className="container mx-auto text-center">
                            <h1 className="text-5xl font-bold text-black mb-4">Innovative Solutions for Your Business</h1>
                            <p className="text-lg mb-6 text-gray-500">
                                Empowering businesses with scalable and secure technology solutions tailored to their needs.
                            </p>
                            <button className="w-[150px] h-12 sm:text-sm rounded-xl bg-white text-lg text-[#3c4aed] shadow-sm shadow-[#096ad0] transition-all duration-300 ease-in-out hover:bg-[#096ad0] hover:text-white hover:-translate-y-1">
                                Get Started
                            </button>
                        </div>
                    </section>

                    <section className="py-16 bg-gray-100">
                        <div className="container mx-auto text-center">
                            <h2 className="text-4xl font-extrabold mb-10 text-black">Our Solutions</h2>

                            <div className="flex flex-row gap-8">
                                <div className="bg-white flex flex-col p-8 justify-center items-center rounded-lg shadow-sm shadow-gray-400 hover:shadow-gray-600 hover:shadow-2xl">
                                    <h3 className="text-xl font-bold mb-4 text-gray-700">Enterprise Solutions</h3>
                                    <p className="text-gray-700 mb-6">
                                        Build robust and secure backend systems for enterprise platforms.
                                    </p>
                                    <button className="w-[150px] h-12 sm:text-sm rounded-xl bg-white text-lg text-[#3c4aed] transition-all duration-300 ease-in-out hover:-translate-y-1">
                                        Learn More...
                                    </button>
                                </div>

                                <div className="bg-white flex flex-col p-8 justify-center items-center rounded-lg shadow-sm shadow-gray-400 hover:shadow-2xl hover:transform hover:rotate-x-16 hover:rotate-y-16 hover:scale-105 transition-transform duration-300 ease-out">
                                    <h3 className="text-xl font-bold mb-4 text-gray-700">SaaS Development</h3>
                                    <p className="text-gray-700 mb-6">
                                        Scale your business with powerful and secure SaaS applications.
                                    </p>
                                    <button className="w-[150px] h-12 sm:text-sm rounded-xl bg-white text-lg text-[#3c4aed] transition-all duration-300 ease-in-out hover:-translate-y-1">
                                        Learn More...
                                    </button>
                                </div>

                                <div className="bg-white flex flex-col p-8 justify-center items-center rounded-lg shadow-sm shadow-gray-400 hover:shadow-gray-600 hover:shadow-2xl">
                                    <h3 className="text-xl font-bold mb-4 text-gray-700">Mobile App Development</h3>
                                    <p className="text-gray-700 mb-6">
                                        Create seamless mobile experiences on iOS and Android.
                                    </p>
                                    <button className="w-[150px] h-12 sm:text-sm rounded-xl bg-white text-lg text-[#3c4aed] transition-all duration-300 ease-in-out hover:-translate-y-1">
                                        Learn More...
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="bg-gray-100 py-16">
                        <div className="container mx-auto text-center">
                            <h2 className="text-4xl font-extrabold mb-8 text-black">Why Choose Us?</h2>
                            <p className="text-lg text-gray-700 mb-6">
                                With years of experience and cutting-edge technologies, we deliver scalable, secure, and reliable solutions.
                            </p>
                            <ul className="text-left list-disc list-inside text-gray-700 space-y-3">
                                <li>Expertise in enterprise-level applications</li>
                                <li>Custom-built SaaS and mobile solutions</li>
                                <li>Proven track record of success in multiple industries</li>
                            </ul>
                        </div>
                    </section>

                    <section className="bg-blue-600 text-white py-16">
                        <div className="container mx-auto text-center">
                            <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
                            <p className="text-lg mb-6">Let’s work together to create innovative, scalable, and secure solutions.</p>
                            <button className="w-[150px] h-12 sm:text-sm rounded-xl bg-white text-lg text-[#3c4aed] shadow-sm shadow-[#096ad0] transition-all duration-300 ease-in-out hover:bg-[#096ad0] hover:text-white hover:-translate-y-1">
                                Contact Us...
                            </button>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Service
