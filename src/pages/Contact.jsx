import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-20">
      
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">Contact <span className="text-blue-600">Mstore</span></h1>
        <p className="text-gray-600 text-lg sm:text-xl">
          Have a question or need support? Fill out the form or reach us through the info below. We’re always here to help.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        
        {/* Contact Info Cards */}
        <div className="space-y-6">

          <div className="flex items-center bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
            <FaMapMarkerAlt size={32} className="text-blue-600 mr-4" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Address</h3>
              <p className="text-gray-600">Gurgaon, Haryana, 122506</p>
            </div>
          </div>

          <div className="flex items-center bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
            <FaEnvelope size={32} className="text-blue-600 mr-4" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Email</h3>
              <p className="text-gray-600">mithleshkumar.wrk@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
            <FaPhone size={32} className="text-blue-600 mr-4" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Phone</h3>
              <p className="text-gray-600">+91 7217663942</p>
            </div>
          </div>

        </div>

        {/* Contact Form */}
        <div className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-xl transition">

          <h3 className="text-3xl font-bold text-blue-600 mb-6 text-center">Send a Message</h3>

          <form className="space-y-6">

            <div>
              <label className="block text-gray-700 mb-2 font-semibold">Your Name</label>
              <input type="text" placeholder="John Doe" className="w-full px-4 py-3 border border-gray-300 rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600" />
            </div>

            <div>
              <label className="block text-gray-700 mb-2 font-semibold">Email Address</label>
              <input type="email" placeholder="john@example.com" className="w-full px-4 py-3 border border-gray-300 rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600" />
            </div>

            <div>
              <label className="block text-gray-700 mb-2 font-semibold">Message</label>
              <textarea rows="5" placeholder="Type your message..." className="w-full px-4 py-3 border border-gray-300 rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"></textarea>
            </div>

            <button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold py-3 rounded-xl hover:opacity-90 transition duration-300">
              Send Message 🚀
            </button>
            
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;
