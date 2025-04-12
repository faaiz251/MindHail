import React from 'react';
import '../Templates/load-templates';
import { Link , useLocation } from 'react-router-dom';

export default function Home() {
  return (
    <div className=" bg-gray-50">
        <Header />
      <HeroSection />
      <Services />
      <About />
      <Testimonials />
      <Footer />
    </div>
  )
}

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
  

const HeroSection = () => (
    <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50 text-center px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
        Your Mental Health Journey Starts Here
      </h1>
      <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
        Mindhail connects you with professional therapists and AI-powered tools to support your mental wellbeing.
      </p>
      <div className="space-x-4">
        <Link to="/services" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md font-medium transition duration-300">Explore Services</Link>
        <a href="#" className="border border-blue-500 text-blue-500 hover:bg-blue-50 px-6 py-3 rounded-md font-medium transition duration-300">Learn More</a>
      </div>
    </section>
  );
  
  const Services = () => (
    <section id="services" className="py-20 bg-white px-4">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Services</h2>
      <div className="grid md:grid-cols-3 gap-8 container mx-auto">
        {[
          {
            icon: "fas fa-user-md",
            title: "Professional Therapy",
            desc: "Connect with licensed therapists for personalized mental health support."
          },
          {
            icon: "fas fa-robot",
            title: "AI Chat Support",
            desc: "24/7 access to our AI mental health assistant for immediate support."
          },
          {
            icon: "fas fa-building",
            title: "Corporate Wellness",
            desc: "Comprehensive mental health solutions for your organization."
          }
        ].map((feature, idx) => (
          <div key={idx} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <i className={`${feature.icon} text-blue-500 text-xl`} />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
            <p className="text-gray-600">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
  
  const About = () => (
    <section id="about" className="py-20 bg-gray-50 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">About Mindhail</h2>
          <p className="text-gray-600 mb-4">
            Mindhail is a revolutionary mental health platform that combines human expertise with AI technology to provide accessible, affordable mental health support to everyone.
          </p>
          <p className="text-gray-600">
            Our mission is to break down barriers to mental healthcare and create a world where everyone has the tools and support they need to thrive.
          </p>
        </div>
        <div className="md:w-1/2 bg-blue-100 rounded-lg h-64 flex items-center justify-center">
          <span className="text-gray-500">Mindhail team image</span>
        </div>
      </div>
    </section>
  );
  
  const Testimonials = () => (
    <section className="py-20 bg-white px-4">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">What Our Users Say</h2>
      <div className="grid md:grid-cols-3 gap-8 container mx-auto">
        {[
          {
            name: "Sarah J.",
            role: "Individual User",
            text: "Mindhail has transformed my mental health journey. The therapists are exceptional and the platform is so easy to use."
          },
          {
            name: "Michael T.",
            role: "Corporate Admin",
            text: "Implementing Mindhail for our employees has significantly improved workplace wellbeing and productivity."
          },
          {
            name: "Dr. Lisa R.",
            role: "Therapist",
            text: "The platform makes it easy to connect with clients and provide quality care. The tools are excellent."
          }
        ].map((t, idx) => (
          <div key={idx} className="bg-gray-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-blue-500 rounded-full"></div>
              <div className="ml-4">
                <h4 className="font-medium">{t.name}</h4>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            </div>
            <p className="text-gray-600">"{t.text}"</p>
          </div>
        ))}
      </div>
    </section>
  );
  
  const Footer = () => (
    <footer className="bg-gray-800 text-white py-12 px-4">
      <div className="container mx-auto grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center font-bold text-xl">M</div>
            <span className="ml-2 text-xl font-semibold">Mindhail</span>
          </div>
          <p className="text-gray-400">Your mental health partner for a better tomorrow.</p>
        </div>
        <FooterLinks title="Quick Links" links={["Home", "Services", "AI Chat", "Community", "Contact"]} />
        <FooterLinks title="Legal" links={["Privacy Policy", "Terms of Service", "HIPAA Compliance", "Cookie Policy"]} />
        <div>
          <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
          <div className="flex space-x-4 text-xl text-gray-400 hover:text-white">
            {["facebook-f", "twitter", "instagram", "linkedin-in"].map((icon, idx) => (
              <a href="#" key={idx}><i className={`fab fa-${icon}`} /></a>
            ))}
          </div>
          <div className="mt-6">
            <p className="text-gray-400">Subscribe to our newsletter</p>
            <div className="flex mt-2">
              <input type="email" placeholder="Your email" className="px-4 py-2 w-full rounded-l-md text-gray-800" />
              <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-r-md">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
        <p>&copy; 2023 Mindhail. All rights reserved.</p>
      </div>
    </footer>
  );
  
  const FooterLinks = ({ title, links }) => (
    <div>
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <ul className="space-y-2">
        {links.map((link, idx) => (
          <li key={idx}><a href="#" className="text-gray-400 hover:text-white">{link}</a></li>
        ))}
      </ul>
    </div>
  );

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