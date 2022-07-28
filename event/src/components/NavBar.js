import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link ,NavLink } from 'react-router-dom';
const NavBar = () => {
    return ( 
        <>
        <h1>Nav bar</h1>
        <Link to='/'>home</Link>
        <Link to='/contact'>contact</Link>
        </>
     );
}
 
export default NavBar;