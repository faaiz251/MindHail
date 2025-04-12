import React, { useState, useEffect } from 'react';
import { Link , useLocation } from 'react-router-dom';
import Footer from '../Common/Footer';


const TherapistCard = ({ therapist, onBook }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="therapist-card bg-white rounded-lg shadow-md overflow-hidden max-w-md">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <img src={therapist.image} alt={therapist.name} className="w-16 h-16 rounded-full object-cover mr-4" />
          <div>
            <h3 className="font-semibold text-gray-800">{therapist.name}</h3>
            <p className="text-sm text-gray-500">{therapist.qualifications}</p>
            <p className="text-sm font-medium text-green-600 mt-1">{therapist.price}</p>
          </div>
        </div>
        <div className="mb-4 border-t border-gray-100 pt-4">
          <h4 className="font-medium text-gray-800 mb-2">Specializations</h4>
          <div className="flex flex-wrap gap-2 mb-3">
            {therapist.specializations.map((spec, i) => (
              <span key={i} className="specialty-tag bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                {spec}
              </span>
            ))}
          </div>
          <p className={`text-gray-600 ${expanded ? '' : 'line-clamp-3'}`}>{therapist.description}</p>
          <button onClick={() => setExpanded(!expanded)} className="text-blue-600 hover:text-blue-800 text-sm font-medium mt-2 flex items-center">
            <i className={`fas ${expanded ? 'fa-chevron-up' : 'fa-chevron-down'} mr-1`}></i> {expanded ? 'Show Less' : 'Show More'}
          </button>
          <button onClick={() => onBook(therapist)} className="book-btn w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-md transition duration-300 flex items-center justify-center mt-4">
            <i className="fas fa-calendar-alt mr-2"></i> Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default function Services ()  {
  const [selectedTherapist, setSelectedTherapist] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const therapists = [
    {
      name: 'Dr. Priya Sharma',
      image: 'https://randomuser.me/api/portraits/women/33.jpg',
      qualifications: 'MD Psychiatry, AIIMS Delhi',
      price: '₹350 per session',
      specializations: ['Anxiety', 'Depression', 'CBT', 'Trauma'],
      description:
        'Dr. Priya Sharma is an MD Psychiatrist from AIIMS Delhi with 12 years of experience. She specializes in evidence-based treatments for anxiety and mood disorders, combining medication management with psychotherapy. Fluent in Hindi and English, she provides culturally sensitive care tailored to Indian patients.',
    },
  ];

  const handleBook = (therapist) => {
    setSelectedTherapist(therapist);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedTherapist(null);
  };

  return (
    <div>
    <Header />
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Our Therapists</h1>
          <p className="text-xl max-w-2xl mx-auto">Meet our team of licensed mental health professionals</p>
        </div>
      </section>

      {/* Therapist Section */}
      <main className="container mx-auto px-4 py-12">
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Our Therapist</h2>
          <div className="flex justify-center">
            {therapists.map((therapist, i) => (
              <TherapistCard key={i} therapist={therapist} onBook={handleBook} />
            ))}
          </div>
        </section>
      </main>

      {/* Booking Modal */}
      {showModal && selectedTherapist && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white max-h-[90vh] overflow-y-auto w-[90%] max-w-lg p-6 rounded-lg shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-gray-800">Book Appointment</h3>
              <button onClick={closeModal} className="text-gray-500 hover:text-gray-700">
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="mb-4 p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center">
                <img src={selectedTherapist.image} className="w-12 h-12 rounded-full object-cover mr-3" alt={selectedTherapist.name} />
                <div>
                  <h4 className="font-semibold">{selectedTherapist.name}</h4>
                  <p className="text-sm text-gray-600">{selectedTherapist.qualifications}</p>
                  <p className="text-sm font-medium text-green-600">{selectedTherapist.price} (1 hour)</p>
                </div>
              </div>
              <div className="mt-3">
                <p className="text-sm text-gray-600">{selectedTherapist.description}</p>
              </div>
            </div>

            <form>
              <div className="mb-4">
                <label className=" text-gray-700 mb-2">Date</label>
                <input type="date" className="w-full border border-gray-300 rounded-md py-2 px-3" required />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Time</label>
                <select className="w-full border border-gray-300 rounded-md py-2 px-3" required>
                  <option value="">Select time</option>
                  <option value="09:00">9:00 AM</option>
                  <option value="10:30">10:30 AM</option>
                  <option value="12:00">12:00 PM</option>
                  <option value="14:00">2:00 PM</option>
                  <option value="15:30">3:30 PM</option>
                  <option value="17:00">5:00 PM</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Full Name</label>
                <input type="text" className="w-full border border-gray-300 rounded-md py-2 px-3" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Age</label>
                <input type="number" className="w-full border border-gray-300 rounded-md py-2 px-3" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Problem you're facing</label>
                <textarea rows="3" className="w-full border border-gray-300 rounded-md py-2 px-3"></textarea>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Duration of problem</label>
                <input type="text" className="w-full border border-gray-300 rounded-md py-2 px-3" />
              </div>
              <div className="mb-4 flex items-start">
                <input type="checkbox" id="terms" className="mt-1 mr-2" />
                <label htmlFor="terms" className="text-sm text-gray-700">I agree to the terms & conditions</label>
              </div>
              <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">
                Confirm Booking
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
    <Footer />
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
