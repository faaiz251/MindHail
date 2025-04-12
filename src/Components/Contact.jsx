import React from 'react';
import Footer from '../Common/Footer';
import { Link , useLocation } from 'react-router-dom';


// Main Component (Contact Page)
export default function Contact() {
  return (
    <div>
      <Header />
    <div className="bg-gray-50">

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Contact Us</h2>
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" id="name" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea id="message" rows="4" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"></textarea>
              </div>
              <div>
                <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
    </div>
  );
};


const Header = () => {
  const location = useLocation();
    return (
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-3 md:py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center group">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl transition-all duration-300 group-hover:bg-blue-700">
                M
              </div>
              <span className="ml-3 text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                Mindhail
              </span>
            </Link>
  
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6">
      <Link to="/" className={linkClasses("/")}>Home</Link>
      <Link to="/services" className={linkClasses("/services")}>Services</Link>
      <Link to="/ai-chat" className={linkClasses("/ai-chat")}>AI Chat</Link>
      <Link to="/posts" className={linkClasses("/posts")}>Posts</Link>
      <Link to="/contact" className={linkClasses("/contact")}>Contact</Link>
    </nav>
  
            {/* Login Button and Mobile Menu */}
            <div className="flex items-center space-x-4">
              <Link to="/login" className="login-button px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-md font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-md flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                </svg>
                <span className="hidden md:inline" id="login-text">Login</span>
                <span className="md:hidden">Login</span>
              </Link>
  
              {/* Mobile Menu Button */}
              <button className="md:hidden text-gray-600 hover:text-blue-600 focus:outline-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
    );
  };


  const linkClasses = (path) => {
    const isActive = location.pathname === path;
    return `
      px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 relative
      ${isActive ? 
        "text-blue-600 font-semibold after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-4/5 after:h-0.5 after:bg-blue-600 after:rounded-full after:content-['']" :
        "text-gray-600 hover:text-blue-600"
      }
    `;
  };
