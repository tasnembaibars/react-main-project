
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link ,NavLink } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';


import About from './components/About';
import Single from './components/Single';
import Shop from './components/Shop';
import Index from './components/Index';
import Posts2 from './components/Posts2';
import Contact from './components/contact';
import Register from './components/Register';
import Login from './components/Login';
import Profile from './components/Profile';
import './App.css';
import CheckOut from './components/Checkout';
import Singlepost from './components/Singlepost';
import { createContext, useState } from 'react';
export const userContext = createContext();

function App() {
  
  const [userData, setUserData] = useState([]);


  return (
    <Router>
       <userContext.Provider value={{ userData, setUserData }}>
      <NavBar />
    <Routes>

    <Route path="/" element={<Index />} />
    <Route path="/Singlepost/:id" element={<Singlepost />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile/:id" element={<Profile/>} />
      <Route path="/Posts2" element={<Posts2 />} />
      <Route path="/Checkout" element={<CheckOut />} />




{/* routes */}
<Route path="/about" element={<About />} />
<Route path="/post" element={<Single />} />
<Route path="/shop" element={<Shop />} />

    </Routes>
    <Footer />
    </userContext.Provider>
  </Router>

  );
}

export default App;
