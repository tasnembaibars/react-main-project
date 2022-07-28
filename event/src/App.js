import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link ,NavLink } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home';
import Contact from './components/contact';
import Profile from './components/Profile';
function App() {
  return (

    <Router>
      <NavBar />
       <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/profile" element={<Profile />} />

       </Routes>


    <Footer />

  </Router>

  );
}

export default App;
