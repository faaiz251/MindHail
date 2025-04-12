import React, { useState } from 'react';
import { Link , useLocation } from 'react-router-dom';
import Footer from '../Common/Footer';


export default function Aichat() {
  const [messages, setMessages] = useState([
    {
      text: "Hello! I'm Mindhail's AI assistant. I can provide general information about mental health, suggest resources, and help you navigate our services. How can I help you today?",
      type: 'ai',
    },
  ]);

  const [userInput, setUserInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInput.trim() === '') return;

    const newMessages = [
      ...messages,
      { text: userInput, type: 'user' },
      { text: "I'm here to assist you. Please let me know what you need.", type: 'ai' },
    ];
    setMessages(newMessages);
    setUserInput('');
  };

  return (
    <div>
      <Header />
    <div className="bg-gray-50">
      {/* Header Placeholder */}
      <div id="header-placeholder"></div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Mindhail AI Support</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our AI assistant can provide general mental health information and resources
          </p>
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4 max-w-2xl mx-auto">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg
                  className="h-5 w-5 text-yellow-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-yellow-700">
                  <strong>Important:</strong> This AI is not a substitute for professional therapy. For personalized advice, please consult with one of our{' '}
                  <Link to="/" className="text-blue-500 hover:text-blue-600">
                    licensed therapists
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Chat Interface */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-4 border-b border-gray-200 bg-gray-50">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-500 mr-3">
                <i className="fas fa-robot"></i>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Mindhail AI</h3>
                <p className="text-xs text-gray-500">Online</p>
              </div>
            </div>
          </div>

          {/* Chat Messages Container */}
          <div className="chat-container p-4 overflow-y-auto">
            <div className="space-y-4" id="chat-messages">
              {messages.map((message, index) => (
                <div className="flex" key={index}>
                  <div
                    className={`message p-4 ${
                      message.type === 'user'
                        ? 'bg-blue-500 text-white rounded-tl-xl rounded-tr-xl rounded-br-none'
                        : 'bg-gray-200 text-gray-800 rounded-tl-xl rounded-tr-xl rounded-bl-none'
                    }`}
                  >
                    <p>{message.text}</p>
                    {message.type === 'ai' && (
                      <p className="text-xs text-gray-500 mt-2">
                        Remember: I'm not a therapist, but I can connect you with one if needed.
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chat Input */}
          <div className="mt-[250px] p-4 border-t border-gray-200 bg-gray-50">
            <form onSubmit={handleSubmit} className="flex">
              <input
                type="text"
                id="user-input"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Type your message here..."
                className="flex-1 border border-gray-300 rounded-l-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                autocomplete="off"
              />
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-r-md transition duration-300"
              >
                Send
              </button>
            </form>
          </div>
        </div>
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
