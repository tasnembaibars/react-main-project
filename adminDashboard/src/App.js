
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';


import Saidebar from './components/sidebar';
import Header from './components/header';
import Dashboard from './components/dashboard';
import Footer from './components/footer';
import Users from './components/Users/users';
import UpdateUser from './components/Users/updateUser';

import Services from './components/services/Services';
import UpdateServices from './components/services/UpdateServices';

import Categoriese from './components/categury/categoriese';
import UpdateCategoriese from './components/categury/UpdateCategoriese';


import Books from './Books/Books';
import UpdateBook from './Books/updatebook';

import Posts from './components/posts/Posts';
import Login from './components/login';

import Admin from './admin';




function App() {
  return (
    <>

      <Router>
        
            <Routes>

              <Route path="/admin/*" element={<Admin />} />

              <Route path="/" element={<Login />} />

            </Routes>


      </Router>

      
    </>

  );
}

export default App;
