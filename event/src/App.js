
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home';
import Contact from './contact';
import About from './components/About';
import Single from './components/Single';
import Shop from './components/Shop';
function App() {
  return (

    <Router>
      <NavBar />
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />





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
