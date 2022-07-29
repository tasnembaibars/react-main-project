import React from 'react';
import {  Link  , NavLink } from 'react-router-dom';
const NavBar = () => {
    return (
        <>
      
     <section class="topbar">
     <h2 class="hidden">some</h2>
     <div class="container-fluid">
         <div class="row">
             <div class="col col-lg-7 col-md-12 col-12">
                 <div class="contact-intro">
                     <ul>
                         <li><i class="fi flaticon-email"></i>Nay@gmail.com</li>
                         <li><i class="fi flaticon-phone-call"></i> +962 (079) 869523</li>
                         <li><i class="fi flaticon-maps-and-flags"></i> Irbid – 1075 Firs Avenue</li>
                     </ul>
                 </div>
             </div>
             <div class="col col-lg-5 col-md-12 col-12">
                 <div class="contact-info">
                     <ul>
                         <li><a href="#"><i class="fi flaticon-facebook-app-symbol"></i></a></li>
                         <li><a href="#"><i class="fi flaticon-twitter"></i></a></li>
                         <li><a href="#"><i class="fi flaticon-linkedin"></i></a></li>
                         <li><a href="#"><i class="fi flaticon-instagram-1"></i></a></li>
                         <li><a href="#"><i class="fi flaticon-pinterest"></i></a></li>
                         <li><a href="#"><i class="fi flaticon-youtube"></i></a></li>
                     </ul>
                 </div>
             </div>
         </div>
     </div>
 </section>
          <header id="header">
                <div class="wpo-site-header">
                    <nav class="navigation navbar navbar-expand-lg navbar-light">
                        <div class="container-fluid">
                            <div class="row align-items-center">
                                <div class="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                                    <div class="mobail-menu">
                                        <button type="button" class="navbar-toggler open-btn">
                                            <span class="sr-only">Toggle navigation</span>
                                            <span class="icon-bar first-angle"></span>
                                            <span class="icon-bar middle-angle"></span>
                                            <span class="icon-bar last-angle"></span>
                                        </button>
                                    </div>
                                </div>
                                <div class="col-lg-2 col-md-6 col-6">
                                    <div class="navbar-header">
                                        <a class="navbar-brand" href="/"><img src="assets/images/logo.png"
                                                alt=""/></a>
                                    </div>
                                </div>
                                <div class="col-lg-8 col-md-1 col-1">
                                    <div id="navbar" class="collapse navbar-collapse navigation-holder">
                                        <button class="menu-close"><i class="ti-close"></i></button>
                                        <ul class="nav navbar-nav mb-2 mb-lg-0">
                                            <li class="menu-item-has-children">
                                               
                                                <NavLink  to="/" >Home</NavLink>
                                                {/* <ul class="sub-menu">
                                                    <li><a class="active" href="index.html">Main Home</a></li>
                                                    <li><a href="index-2.html">Wedding Planner</a></li>
                                                    <li><a href="index-3.html">Announcement S1</a></li>
                                                    <li><a href="index-4.html">Announcement S2</a></li>
                                                    <li><a href="index-5.html">Wedding Home</a></li>
                                                    <li><a href="index-7.html">Shop Home</a></li>
                                                    <li><a href="index-6.html">Invitation</a></li>
                                                </ul> */}
                                            </li>
                                            {/* <li class="menu-item-has-children">
                                                <a href="/about">About</a> */}
                                                {/* <ul class="sub-menu">
                                                    <li><a href="about.html">About</a></li>
                                                    <li><a href="story.html">Our story</a></li>
                                                    <li><a href="accomodation.html">Accomodation</a></li>
                                                    <li><a href="rsvp.html">RSVP</a></li>
                                                    <li><a href="gallery.html">Gallery</a></li>
                                                    <li><a href="planner.html">Planners</a></li>
                                                    <li><a href="team-single.html">Planner Single</a></li>
                                                    <li><a href="groom-bride.html">Bridesmaid & Groomsman</a></li>
                                                    <li><a href="service.html">Serevice</a></li>
                                                    <li><a href="service-s2.html">Serevice S2</a></li>
                                                    <li><a href="service-single.html">Serevice Single</a></li>
                                                    <li><a href="pricing.html">Pricing</a></li>
                                                    <li class="menu-item-has-children">
                                                        <a href="#">Auth Pages</a>
                                                        <ul class="sub-menu">
                                                            <li><a href="login.html">Login</a>
                                                            </li>
                                                            <li><a href="register.html">Register</a></li>
                                                            <li><a href="forgot.html">Forgot Password</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="coming.html">Coming Soon</a></li>
                                                    <li><a href="404.html">404 Error</a></li>
                                                </ul> */}
                                            {/* </li> */}
                                            <li class="menu-item-has-children">
                                            <NavLink  to="/shop" >Shop</NavLink>
                                            
                                                {/* <ul class="sub-menu">
                                                    <li><a href="portfolio-grid.html">Portfolio Grid</a></li>
                                                    <li><a href="portfolio-mashonary.html">Portfolio Mashonary</a></li>
                                                    <li><a href="portfolio-mashonary-s2.html">Portfolio Mashonary S2</a>
                                                    </li>
                                                    <li><a href="portfolio-single.html">Portfolio Single</a></li>
                                                </ul> */}
                                            </li>
                                            <li class="menu-item-has-children">
                                            <NavLink  to="/about" >About</NavLink>
                                          
                                                {/* <ul class="sub-menu">
                                                    <li><a href="shop.html">Shop</a></li>
                                                    <li><a href="shop-single.html">Shop Single</a></li>
                                                    <li><a href="cart.html">Cart</a></li>
                                                    <li><a href="wishlist.html">Wishlist</a></li>
                                                    <li><a href="checkout.html">Checkout</a></li>
                                                </ul> */}
                                            </li>
                                            <li class="menu-item-has-children">
                                            <NavLink  to="/Posts" >Posts</NavLink>
                                            </li>
                                            <li class="menu-item-has-children">
                                            
                                                <NavLink  to="/contact" >Contact</NavLink>
                                                {/* <ul class="sub-menu">
                                                    <li><a href="blog.html">Blog right sidebar</a></li>
                                                    <li><a href="blog-left-sidebar.html">Blog left sidebar</a></li>
                                                    <li><a href="blog-fullwidth.html">Blog fullwidth</a></li>
                                                    <li class="menu-item-has-children">
                                                        <a href="#">Blog details</a>
                                                        <ul class="sub-menu">
                                                            <li><a href="blog-single.html">Blog details right
                                                                sidebar</a>
                                                            </li>
                                                            <li><a href="blog-single-left-sidebar.html">Blog details
                                                                left
                                                                sidebar</a></li>
                                                            <li><a href="blog-single-fullwidth.html">Blog details
                                                                fullwidth</a></li>
                                                        </ul>
                                                    </li>
                                                </ul> */}
                                            </li>
                                            {/* <li><a href="contact.html">Contact</a></li> */}
                                        </ul>

                                    </div>
                                </div>
                                <div class="col-lg-2 col-md-2 col-2">
                                    <div class="header-right">
                                        <div class="header-search-form-wrapper">
                                            <div class="cart-search-contact">
                                                <button class="search-toggle-btn"><i
                                                    class="fi flaticon-search"></i></button>
                                                <div class="header-search-form">
                                                    <form>
                                                        <div>
                                                            <input type="text" class="form-control"
                                                                placeholder="Search here..." />
                                                            <button type="submit"><i
                                                                class="fi flaticon-search"></i></button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                        <a className="nav-link"  style={{color:"#1a3b55",marginLeft:"10px"}}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
  
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
</svg></a>
                                        {/* <div class="mini-cart">
                                            <button class="cart-toggle-btn"> <i class="fi flaticon-shopping-cart"></i>
                                                <span class="cart-count">2</span></button>
                                            <div class="mini-cart-content">
                                                <button class="mini-cart-close"><i class="ti-close"></i></button>
                                                <div class="mini-cart-items">
                                                    <div class="mini-cart-item clearfix">
                                                        <div class="mini-cart-item-image">
                                                            <a href="shop.html"><img
                                                                src="assets/images/shop/mini-cart/img-1.jpg"
                                                                alt /></a>
                                                        </div>
                                                        <div class="mini-cart-item-des">
                                                            <a href="shop.html">Wedding Gown</a>
                                                            <span class="mini-cart-item-price">$20.15 x 1</span>
                                                            <span class="mini-cart-item-quantity"><a href="#"><i
                                                                class="ti-close"></i></a></span>
                                                        </div>
                                                    </div>
                                                    <div class="mini-cart-item clearfix">
                                                        <div class="mini-cart-item-image">
                                                            <a href="shop.html"><img
                                                                src="assets/images/shop/mini-cart/img-2.jpg"
                                                                alt /></a>
                                                        </div>
                                                        <div class="mini-cart-item-des">
                                                            <a href="shop.html">Bridal Flower</a>
                                                            <span class="mini-cart-item-price">$13.25 x 2</span>
                                                            <span class="mini-cart-item-quantity"><a href="#"><i
                                                                class="ti-close"></i></a></span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="mini-cart-action clearfix">
                                                    <span class="mini-checkout-price">Subtotal:
                                                        <span>$215.14</span></span>
                                                    <div class="mini-btn">
                                                        <a href="checkout.html" class="view-cart-btn s1">Checkout</a>
                                                        <a href="cart.html" class="view-cart-btn">View Cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    );
}

export default NavBar;