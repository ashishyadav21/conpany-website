"use client"

import React from 'react'
import { useRouter } from "next/navigation";

const Service = () => {
    const router = useRouter()

    return (
        <div>
            <div className="scroll-snap-y scroll-smooth">
                <section className="h-[576px] bg-event bg-cover z-10 bg-center items-center justify-center">
                </section>

                <div className="container bg-gray-100 -mt-20 m-auto max-w-6xl p-3 flex flex-col items-center">
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

                    <section className="py-10 bg-gray-100">
                        <div className="container mx-auto text-center">
                            <h2 className="text-4xl font-extrabold mb-10 text-black">Our Solutions</h2>

                            <div className="flex flex-wrap justify-center gap-8">
                                <div className="bg-white w-[90%] min-[480px]:w-[50%] md:w-[31%] flex flex-col p-8 justify-center items-center rounded-lg shadow-sm shadow-gray-400 hover:shadow-gray-600 hover:shadow-2xl transition-all duration-300">
                                    <h3 className="text-xl font-bold mb-4 text-gray-700">Enterprise Solutions</h3>
                                    <p className="text-gray-700 mb-6">
                                        Build robust and secure backend systems for enterprise platforms.
                                    </p>
                                    <button className="w-[150px] h-12 sm:text-sm rounded-xl bg-white text-lg text-[#3c4aed] transition-all duration-300 ease-in-out hover:-translate-y-1">
                                        Learn More...
                                    </button>
                                </div>

                                <div className="bg-white w-[90%] min-[480px]:w-[50%] md:w-[31%] flex flex-col p-8 justify-center items-center rounded-lg shadow-sm shadow-gray-400 hover:shadow-2xl hover:scale-105 transition-transform duration-300 ease-out">
                                    <h3 className="text-xl font-bold mb-4 text-gray-700">SaaS Development</h3>
                                    <p className="text-gray-700 mb-6">
                                        Scale your business with powerful and secure SaaS applications.
                                    </p>
                                    <button className="w-[150px] h-12 sm:text-sm rounded-xl bg-white text-lg text-[#3c4aed] transition-all duration-300 ease-in-out hover:-translate-y-1">
                                        Learn More...
                                    </button>
                                </div>

                                <div className="bg-white w-[90%] min-[480px]:w-[50%] md:w-[31%] flex flex-col p-8 justify-center items-center rounded-lg shadow-sm shadow-gray-400 hover:shadow-gray-600 hover:shadow-2xl transition-all duration-300">
                                    <h3 className="text-xl font-bold mb-4 text-gray-700">Mobile App Development</h3>
                                    <p className="text-gray-700 mb-6">
                                        Create seamless mobile experiences on iOS and Android.
                                    </p>
                                    <button className="w-[150px] h-12 sm:text-sm rounded-xl bg-white text-lg text-[#3c4aed] transition-all duration-300 ease-in-out hover:-translate-y-1">
                                        Learn More...
                                    </button>
                                </div>

                                <div className="bg-white w-[90%] min-[480px]:w-[50%] md:w-[31%] flex flex-col p-8 justify-center items-center rounded-lg shadow-sm shadow-gray-400 hover:shadow-gray-600 hover:shadow-2xl transition-all duration-300">
                                    <h3 className="text-xl font-bold mb-4 text-gray-700">Web Development</h3>
                                    <p className="text-gray-700 mb-6">
                                        Build robust and secure backend systems for enterprise platforms.
                                    </p>
                                    <button className="w-[150px] h-12 sm:text-sm rounded-xl bg-white text-lg text-[#3c4aed] transition-all duration-300 ease-in-out hover:-translate-y-1">
                                        Learn More...
                                    </button>
                                </div>

                                <div className="bg-white w-[90%] min-[480px]:w-[50%] md:w-[31%] flex flex-col p-8 justify-center items-center rounded-lg shadow-sm shadow-gray-400 hover:shadow-gray-600 hover:shadow-2xl transition-all duration-300">
                                    <h3 className="text-xl font-bold mb-4 text-gray-700">Product Development</h3>
                                    <p className="text-gray-700 mb-6">
                                        Build robust and secure backend systems for enterprise platforms.
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
                            <div className='flex flex-col group relative p-5 m-8 shadow-lg shadow-blue-900 w-full justify-center items-start h-50 rounded-lg border-b-baseTextMedEmphasis hover:translate-x-5 hover:shadow-xl skew-y-5 skew-x-3 transition-all duration-300 ease-in-out'>
                                <div className="absolute top-0 left-0 h-full w-0 bg-blue-900 group-hover:w-10 transition-all duration-300 ease-in-out"></div>
                                <div className='p-5 justify-center'>
                                    <h3 className='text-black text-xl font-bold p-2 text-left'>Proven Expertise</h3>
                                    <p className='text-black font-light text-left p-1'>
                                        With years of experience in web development,
                                        <br></br>
                                        our team brings deep technical expertise across a wide range of industries.
                                        <br></br>
                                        From crafting bespoke websites to developing enterprise-grade applications,
                                        <br></br>
                                        we have successfully delivered hundreds of projects that meet both business and technical requirements.
                                    </p>
                                </div>
                            </div>
                            <div className='flex flex-col group relative p-5 m-8 shadow-lg shadow-blue-900 w-full justify-center items-start h-50 rounded-lg border-b-baseTextMedEmphasis hover:translate-x-10 hover:shadow-xl skew-y-5 skew-x-3 transition-all duration-300 ease-in-out'>
                                <div className="absolute top-0 left-0 h-full w-0 bg-blue-900 group-hover:w-10 transition-all duration-300 ease-in-out"></div>
                                <div className='p-5 justify-center'>
                                    <h3 className='text-black text-xl font-bold p-2 text-left'>Custom Solutions</h3>
                                    <p className='text-black font-light text-left p-1'>
                                        We understand that no two businesses are alike. That’s why we offer tailored web solutions
                                        <br></br>
                                        designed to align with your specific goals, target audience, and brand identity.
                                        <br></br>
                                        Whether you need a robust e-commerce platform, an interactive corporate site,
                                        <br></br>
                                        or a dynamic web app, we create solutions that fit your business perfectly.
                                    </p>
                                </div>
                            </div>
                            <div className='flex flex-col group relative p-5 m-8 shadow-lg shadow-blue-900 w-full justify-center items-start h-50 rounded-lg border-b-baseTextMedEmphasis hover:translate-x-10 hover:shadow-xl skew-y-5 skew-x-3 transition-all duration-300 ease-in-out'>
                                <div className="absolute top-0 left-0 h-full w-0 bg-blue-900 group-hover:w-10 transition-all duration-300 ease-in-out"></div>
                                <div className='p-5 justify-center'>
                                    <h3 className='text-black text-xl font-bold p-2 text-left'>Cutting-Edge Technology</h3>
                                    <p className='text-black font-light text-left p-1'>
                                        We leverage the latest web technologies and frameworks to ensure
                                        <br></br>
                                        your website is fast, secure, scalable, and future-proof.
                                        <br></br>
                                        From responsive design to custom backend systems,
                                        <br></br>
                                        our tech stack guarantees optimal performance on every device and platform.
                                    </p>
                                </div>
                            </div>
                            <div className='flex flex-col group relative p-5 m-8 shadow-lg shadow-blue-900 w-full justify-center items-start h-50 rounded-lg border-b-baseTextMedEmphasis hover:translate-x-10 hover:shadow-xl skew-y-5 skew-x-3 transition-all duration-300 ease-in-out'>
                                <div className="absolute top-0 left-0 h-full w-0 bg-blue-900 group-hover:w-10 transition-all duration-300 ease-in-out"></div>
                                <div className='p-5 justify-center'>
                                    <h3 className='text-black text-xl font-bold p-2 text-left'>Client-Centric Approach</h3>
                                    <p className='text-black font-light text-left p-1'>
                                        We pride ourselves on building long-term relationships with our clients.
                                        <br></br>
                                        Throughout the entire project lifecycle,from discovery and design
                                        <br></br>
                                        to development and deployment, we collaborate closely with you to ensure we
                                        <br></br>
                                        deliver on time,within budget, and above expectations.
                                    </p>
                                </div>
                            </div>
                            <div className='flex flex-col group relative p-5 m-8 shadow-lg shadow-blue-900 w-full justify-center items-start h-50 rounded-lg hover:translate-x-5 hover:shadow-xl skew-y-5 skew-x-3 transition-all duration-300 ease-in-out'>
                                <div className="absolute top-0 left-0 h-full w-0 bg-blue-900 group-hover:w-10 transition-all duration-300 ease-in-out"></div>
                                <div className='p-5 justify-center'>
                                    <h3 className='text-black text-xl font-bold p-2 text-left'>Innovation-Driven</h3>
                                    <p className='text-black font-light text-left p-1'>
                                        Staying ahead of trends is key to building future-ready solutions.
                                        <br></br>
                                        Our team constantly explores new tools, trends, and technologies,
                                        <br></br>
                                        incorporating the latest advancements in UI/UX design,
                                        <br></br>SEO optimization, and web security to give you a competitive edge.
                                    </p>
                                </div>
                            </div>
                            <div className='flex flex-col group relative p-5 m-8 shadow-lg shadow-blue-900 w-full justify-center items-start h-50 rounded-lg border-b-baseTextMedEmphasis hover:translate-x-10 hover:shadow-xl skew-y-5 skew-x-3 transition-all duration-300 ease-in-out'>
                                <div className="absolute top-0 left-0 h-full w-0 bg-blue-900 group-hover:w-10 transition-all duration-300 ease-in-out"></div>
                                <div className='p-5 justify-center'>
                                    <h3 className='text-black text-xl font-bold p-2 text-left'>Full-Service Support</h3>
                                    <p className='text-black font-light text-left p-1'>
                                        Our services don’t end at launch.
                                        <br></br>
                                        We offer full post-launch support, including maintenance,
                                        <br></br>
                                        updates, and ongoing optimization to ensure your site stays secure,
                                        <br></br>
                                        functional, and up-to-date with the latest industry standards.
                                    </p>
                                </div>
                            </div>
                            <div className='flex flex-col group relative p-5 m-8 shadow-lg shadow-blue-900 w-full justify-center items-start h-50 rounded-lg border-b-baseTextMedEmphasis hover:translate-x-10 hover:shadow-xl skew-y-5 skew-x-3 transition-all duration-300 ease-in-out'>
                                <div className="absolute top-0 left-0 h-full w-0 bg-blue-900 group-hover:w-10 transition-all duration-300 ease-in-out"></div>
                                <div className='p-5 justify-center'>
                                    <h3 className='text-black text-xl font-bold text-left'>Transparent Communication</h3>
                                    <p className='text-black font-light text-left p-1'>
                                        We believe in open and transparent communication throughout the entire process.
                                        <br></br>
                                        With regular updates, clear timelines, and an accessible team,
                                        <br></br>
                                        you’re always in the loop and confident in the project’s
                                        <br></br>
                                        progress.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="bg-blue-600 w-full text-white py-16">
                        <div className="container mx-auto text-center">
                            <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
                            <p className="text-lg mb-6">Let’s work together to create innovative, scalable, and secure solutions.</p>
                            <button className="w-[150px] h-12 sm:text-sm rounded-xl bg-white text-lg text-[#3c4aed] shadow-sm shadow-[#096ad0] transition-all duration-300 ease-in-out hover:-translate-y-1"
                                onClick={() => router.push('/contact-us')}>
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
