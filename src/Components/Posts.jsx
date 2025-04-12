import React from "react";
import { Link , useLocation } from 'react-router-dom';
import Footer from "../Common/Footer";


export default function Posts() {
  return (
    <div>
      <Header />
    <div className="bg-gray-50">
      {/* Header Placeholder */}
      <div id="header-placeholder"></div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Mindhail Community</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Educational resources and community discussions about mental health and wellbeing
          </p>
        </div>

        {/* Featured Posts */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-gray-800 border-b pb-2">Featured Articles</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Post 1 */}
            <article className="bg-white post-card rounded-lg overflow-hidden shadow-md">
              <img
                src="https://images.unsplash.com/photo-1506126613408-eca07ce68773"
                alt="Mental Health"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span>April 2, 2023</span>
                  <span className="mx-2">•</span>
                  <span>8 min read</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  Understanding Anxiety Disorders
                </h3>
                <p className="text-gray-600 mb-4">
                  Learn about the different types of anxiety disorders and evidence-based treatment approaches.
                </p>
                <a href="#" className="text-blue-500 hover:text-blue-600 font-medium">
                  Read More →
                </a>
              </div>
            </article>

            {/* Post 2 */}
            <article className="bg-white post-card rounded-lg overflow-hidden shadow-md">
              <img
                src="https://images.unsplash.com/photo-1593810450967-f9c42742e326"
                alt="Meditation"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span>March 25, 2023</span>
                  <span className="mx-2">•</span>
                  <span>5 min read</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Mindfulness Meditation Guide</h3>
                <p className="text-gray-600 mb-4">
                  A beginner's guide to establishing a mindfulness meditation practice for stress reduction.
                </p>
                <a href="#" className="text-blue-500 hover:text-blue-600 font-medium">
                  Read More →
                </a>
              </div>
            </article>

            {/* Post 3 */}
            <article className="bg-white post-card rounded-lg overflow-hidden shadow-md">
              <img
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e"
                alt="Workplace"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span>March 18, 2023</span>
                  <span className="mx-2">•</span>
                  <span>10 min read</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Mental Health in the Workplace</h3>
                <p className="text-gray-600 mb-4">
                  Strategies for creating mentally healthy work environments and supporting employees.
                </p>
                <a href="#" className="text-blue-500 hover:text-blue-600 font-medium">
                  Read More →
                </a>
              </div>
            </article>
          </div>
        </section>

        {/* Community Forum */}
        <section>
          <h2 className="text-2xl font-semibold mb-8 text-gray-800 border-b pb-2">Community Discussions</h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {/* Discussion 1 */}
            <div className="p-6 border-b border-gray-100 hover:bg-gray-50">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-500 mr-4">
                  <i className="fas fa-user"></i>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800 mb-1">Coping with Seasonal Depression</h3>
                  <p className="text-gray-600 text-sm mb-2">Started by SarahJ • 24 comments • Last updated 2 days ago</p>
                  <p className="text-gray-600">Looking for advice on managing seasonal affective disorder as we head into winter...</p>
                </div>
              </div>
            </div>

            {/* Discussion 2 */}
            <div className="p-6 border-b border-gray-100 hover:bg-gray-50">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-500 mr-4">
                  <i className="fas fa-user"></i>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800 mb-1">Therapist Recommendations in NYC</h3>
                  <p className="text-gray-600 text-sm mb-2">Started by MikeT • 15 comments • Last updated 1 week ago</p>
                  <p className="text-gray-600">Does anyone have recommendations for therapists specializing in anxiety disorders in the New York area?</p>
                </div>
              </div>
            </div>

            {/* Discussion 3 */}
            <div className="p-6 hover:bg-gray-50">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-500 mr-4">
                  <i className="fas fa-user"></i>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800 mb-1">Medication Experiences</h3>
                  <p className="text-gray-600 text-sm mb-2">Started by AlexR • 42 comments • Last updated 3 days ago</p>
                  <p className="text-gray-600">Sharing experiences with different medications for depression and anxiety...</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

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
