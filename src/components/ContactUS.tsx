"use client";
import React, { useState } from "react";
import emailjs from 'emailjs-com';
import CustomImage from "./CustomImage";
import Modal from "./Modal";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    to_name: 'ashishplus4me@gmail.com',
    lastName: '',
    from_name: '',
    message: ''
  });

  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState('');

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs.send(
      'service_35vhb1a',
      'template_xlvigdj',
      formData,
      '0cFK8ENEnLd8f_-qI'
    ).then(
      (result) => {
        setIsSent(true);
        setError('');
      },
      (error) => {
        setIsSent(false);
        setError('Failed to send email.');
      }
    );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="scroll-snap-y scroll-smooth">
      <section className="h-[576px] bg-cover z-10 bg-center flex items-center justify-center">
        <CustomImage
          src="/images/developer_word_1.png"
          alt='Developer_Work'
          width={500}
          height={700}
        />
      </section>


      <div className={`container bg-gray-100 -mt-20 mx-auto max-w-6xl p-8 text-black py-10 mb-10 rounded-lg shadow-lg ${isSent ? 'relative' : ''}`}>
        {isSent &&
          <Modal
            type='success'
            message="Email sent successfully!"
            duration={5000}
          />}
        {error &&
          <Modal
            type='error'
            message={error}
          />}

        <div className="text-center mx-auto space-y-4 max-w-3xl">
          <h2 className="font-extrabold text-2xl md:text-3xl text-black">
            Contact us about HubSpot&#39;s software
          </h2>
          <p className="text-lg md:text-lg font-light text-gray-500 leading-relaxed">
            We&#39;d love to show you how you can get more traffic and leads,
            increase your sales productivity, and provide better customer service.
          </p>
        </div>


        <div className="mt-12 bg-white shadow-lg rounded-lg p-8">
          <h3 className="text-3xl md:text-4xl font-bold text-center text-violet-700 mb-6">
            Contact Us
          </h3>
          <p className="text-lg text-gray-500 text-center mb-8">
            Need to get in touch? Fill out the form with your inquiry.
          </p>

          <form onSubmit={sendEmail} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label htmlFor="firstName" className="text-lg font-semibold text-gray-700">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  className="mt-1 p-3 border rounded-md focus:ring-2 focus:ring-violet-500 focus:outline-none"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="lastName" className="text-lg font-semibold text-gray-700">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  className="mt-1 p-3 border rounded-md focus:ring-2 focus:ring-violet-500 focus:outline-none"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label htmlFor="from_name" className="text-lg font-semibold text-gray-700">Email</label>
              <input
                type="email"
                name="from_name"
                className="mt-1 p-3 border rounded-md focus:ring-2 focus:ring-violet-500 focus:outline-none"
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="message" className="text-lg font-semibold text-gray-700">Message</label>
              <textarea
                name="message"
                className="mt-1 p-3 border rounded-md focus:ring-2 focus:ring-violet-500 focus:outline-none"
                onChange={handleChange}
                rows={5}
                required
              />
            </div>

            <button
              type="submit"
              className="py-3 px-6 bg-violet-600 text-white font-bold rounded-lg shadow-md hover:bg-violet-800 transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-violet-400"
            >
              Submit
            </button>
          </form>

          {isSent && <p className="text-greenText mt-4 text-center">Email sent successfully!</p>}
          {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
