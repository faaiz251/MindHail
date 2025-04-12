import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Services from "./Components/Services";
import Aichat from "./Components/Aichat";
import Posts from "./Components/Posts";
import Contact from "./Components/Contact";
import '@fortawesome/fontawesome-free/css/all.min.css';
import AdminDashboard  from "./Components/AdminDashboard";

function App() {

  return (
    <div>
        <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/services" element={<Services />} />
          <Route path="/ai-chat" element={<Aichat />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
