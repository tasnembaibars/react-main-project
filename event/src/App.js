// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link ,NavLink } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

import Contact from './components/contact';
import Register from './components/Register';
import Login from './components/Login';
function App() {
  return (

    <Router>
      <NavBar />
    <Routes>

      <Route path="/contact" element={<Contact />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />


    </Routes>
    <Footer />

  </Router>

  );
}

export default App;
