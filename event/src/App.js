
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

import About from './components/About';
import Single from './components/Single';
import Shop from './components/Shop';
import Index from './components/Index';
import Posts from './components/Posts';
import Contact from './components/contact';
import Register from './components/Register';
import Login from './components/Login';

function App() {
  return (
    <Router>
      
      <NavBar />
    <Routes>
    <Route path="/" element={<Index />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Posts" element={<Posts />} />




{/* routes */}
<Route path="/about" element={<About />} />
<Route path="/post" element={<Single />} />
<Route path="/shop" element={<Shop />} />

    </Routes>
    <Footer />
  </Router>

  );
}

export default App;
