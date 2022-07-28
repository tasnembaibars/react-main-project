import React from 'react';
import {  Link  } from 'react-router-dom';
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