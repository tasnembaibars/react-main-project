
import { BrowserRouter as Router, Routes, Route, Link ,NavLink } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

import Contact from './components/Contact';
import Index from './components/Index';
function App() {
  return (

    <Router>
      <NavBar />
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/Contact" element={<Contact />} />
    </Routes>
    <Footer />

  </Router>

  );
}

export default App;
