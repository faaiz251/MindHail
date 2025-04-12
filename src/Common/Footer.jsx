import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                M
              </div>
              <span className="ml-2 text-xl font-semibold">Mindhail</span>
            </div>
            <p className="text-gray-400">Your mental health partner for a better tomorrow.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white">Services</Link></li>
              <li><Link to="/ai-chat" className="text-gray-400 hover:text-white">AI Chat</Link></li>
              <li><Link to="/posts" className="text-gray-400 hover:text-white">Community</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to='/' className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
              <li><Link to='/' className="text-gray-400 hover:text-white">Terms of Service</Link></li>
              <li><Link to='/' className="text-gray-400 hover:text-white">HIPAA Compliance</Link></li>
              <li><Link to='/' className="text-gray-400 hover:text-white">Cookie Policy</Link></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white text-xl"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-gray-400 hover:text-white text-xl"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-gray-400 hover:text-white text-xl"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-gray-400 hover:text-white text-xl"><i className="fab fa-linkedin-in"></i></a>
            </div>
            <div className="mt-6">
              <p className="text-gray-400">Subscribe to our newsletter</p>
              <div className="flex mt-2">
                <input type="email" placeholder="Your email" className=" bg-white px-4 py-2 w-full rounded-l-md text-gray-800" />
                <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-r-md">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2023 Mindhail. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};


