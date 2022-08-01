
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



function App() {
  return (
    <>
      <Router>
        <div class="container-scroller">

          <Header />
          <div class="container-fluid page-body-wrapper">
            <Saidebar />
            <Routes>

              <Route path="/admin" element={<Dashboard />} />

              <Route path="/admin/users" element={<Users />} />
              <Route path="/admin/users/:id" element={<UpdateUser />} />

              <Route path="/admin/services" element={<Services />} />
              <Route path="/admin/services/:id" element={<UpdateServices />} />

              <Route path="/admin/categoriese" element={<Categoriese />} />
              <Route path="/admin/categoriese/:id" element={<UpdateCategoriese />} />


              <Route path="/admin/books" element={<Books />} />
              <Route path="/admin/books/:id" element={<UpdateBook />} />

              <Route path="/admin/posts" element={<Posts />} />



              {/* <Route path="/contact" element={<  />} />
        <Route path="/about" element={<About />} />
        <Route path="/categury" element={<Cat />} /> */}

            </Routes>

          </div>

          < Footer />

        </div>

      </Router>







    </>

  );
}

export default App;
