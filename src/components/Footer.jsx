import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaPinterest, FaTwitterSquare } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-50 to-blue-100 text-gray-700 py-12 px-6 shadow-inner md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 md:gap-2 gap-12">
        
        {/* Logo & Info */}
        <div className="space-y-4 md:px-8">
          <Link to="/" className="inline-block">
            <h1 className="text-red-500 text-3xl font-bold font-serif">
              M<span className="text-gray-800">store</span>
            </h1>
          </Link>
          <p className="text-gray-600">Powering Your World with the Best in Electronics.</p>
          <p className="text-gray-600">Gurgaon, Haryana, 122506</p>
          <p className="text-gray-600">Email: mithleshkumar.wrk@gmail.com</p>
          <p className="text-gray-600">Phone: +91 7217663942</p>
        </div>

        {/* Customer Service */}
        <div className='md:px-16'>
          <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
          <ul className="space-y-2 text-gray-600">
            <li className="hover:text-red-500 cursor-pointer transition">Contact Us</li>
            <li className="hover:text-red-500 cursor-pointer transition">Shipping & Returns</li>
            <li className="hover:text-red-500 cursor-pointer transition">FAQs</li>
            <li className="hover:text-red-500 cursor-pointer transition">Order Tracking</li>
            <li className="hover:text-red-500 cursor-pointer transition">Size Guide</li>
          </ul>
        </div>

        {/* Social Media */}
        <div className='md:px-8'>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4 text-gray-600">
            <FaFacebook className="hover:text-blue-600 cursor-pointer transition" size={24} />
            <FaInstagram className="hover:text-pink-500 cursor-pointer transition" size={24} />
            <FaTwitterSquare className="hover:text-blue-400 cursor-pointer transition" size={24} />
            <FaPinterest className="hover:text-red-500 cursor-pointer transition" size={24} />
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Stay in the Loop</h3>
          <p className="text-gray-600 mb-4">Subscribe to get special offers, free giveaways, and more.</p>
          <form className="flex">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="w-full p-3 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-500 bg-slate-50 outline-none"
            />
            <button 
              type="submit" 
              className="bg-red-500 text-white px-5 rounded-r-lg hover:bg-red-600 transition font-semibold"
            >
              Subscribe
            </button>
          </form>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="mt-12 border-t border-gray-300 pt-6 text-center text-gray-500 text-sm">
        <p>
          &copy; {new Date().getFullYear()} <span className="text-red-500 font-serif">M<span className="text-gray-800">store</span></span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
