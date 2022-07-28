<<<<<<< HEAD

import { BrowserRouter as Router, Routes, Route, Link ,NavLink } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

import Contact from './components/Contact';
import Index from './components/Index';
=======
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link ,NavLink } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home';
import Contact from './components/contact';
import Register from './components/Register';
import Login from './components/Login';
>>>>>>> 40e1ba3e497192f58505849841545d3ee96eac27
function App() {
  return (

    <Router>
      <NavBar />
    <Routes>
<<<<<<< HEAD
      <Route path="/" element={<Index />} />
      <Route path="/Contact" element={<Contact />} />
=======

      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />


>>>>>>> 40e1ba3e497192f58505849841545d3ee96eac27
    </Routes>
    <Footer />

  </Router>

  );
}

export default App;
