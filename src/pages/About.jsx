import React from "react";
import { Link } from "react-router-dom";
import { FaShippingFast, FaHeadset, FaShieldAlt } from "react-icons/fa";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-20">
      {/* Hero Section */}

      <div className="max-w-6xl mx-auto text-center space-y-6">

        <h1 className="text-5xl font-bold text-gray-800">About <span className="text-blue-600">Mstore</span></h1>

        <p className="text-gray-600 text-lg sm:text-xl">
          Your one-stop destination for premium electronics. We bring the latest gadgets, top-quality accessories, and a seamless shopping experience for tech lovers everywhere.
        </p>

        <Link to="/products">
          <button className="mt-4 bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700 transition duration-300 font-semibold cursor-pointer">
            Start Shopping
          </button>
        </Link>

      </div>

      {/* Mission & Vision */}
      <div className="max-w-6xl mx-auto mt-16 grid md:grid-cols-2 gap-12">

        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">Our Mission</h2>
          <p className="text-gray-700">
            We strive to make innovative technology accessible to everyone. Connecting people with the tools and tech they need to thrive in a digital world.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">Our Vision</h2>
          <p className="text-gray-700">
            We envision a future where technology elevates everyday life. Offering practical and affordable solutions with cutting-edge innovation.
          </p>
        </div>

      </div>

      {/* Why Choose Us */}
      <div className="max-w-6xl mx-auto mt-16 text-center">

        <h2 className="text-3xl font-bold text-gray-800 mb-10">Why Choose <span className="text-blue-600">Mstore?</span></h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition flex flex-col items-center text-center">
            <FaShieldAlt size={40} className="text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Trusted Products</h3>
            <p className="text-gray-600">Top-quality electronics from brands you can trust.</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition flex flex-col items-center text-center">
            <FaShippingFast size={40} className="text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Fast Shipping</h3>
            <p className="text-gray-600">Lightning-fast and secure delivery for every order.</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition flex flex-col items-center text-center">
            <FaHeadset size={40} className="text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Customer Support</h3>
            <p className="text-gray-600">Reliable support team always ready to help you.</p>
          </div>

        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-6xl mx-auto mt-16 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-12 text-center shadow-lg hover:shadow-xl transition">

        <h2 className="text-3xl font-bold text-gray-800 mb-4">Join the <span className="text-blue-600">Mstore Family</span></h2>

        <p className="text-gray-600 mb-6">
          Whether you're a tech enthusiast, professional, or just love gadgets — we have something for everyone. Start your tech journey with us today.
        </p>

        <Link to="/products">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700 transition duration-300 font-semibold">
            Shop Now
          </button>
        </Link>
        
      </div>
    </div>
  );
};

export default About;
