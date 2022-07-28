

import React from 'react'

 const Contact = () => {
    return (

        <div class="page-wrapper">
            {/* <!-- start preloader --> */}
            {/* <div class="preloader">
                <div class="vertical-centered-box">
                    <div class="content">
                        <div class="loader-circle"></div>
                        <div class="loader-line-mask">
                            <div class="loader-line"></div>
                        </div>
                        <img src="assets/images/favicon.png" alt="" />
                    </div>
                </div>
            </div> */}
            {/* <!-- end preloader --> */}
            {/* <!-- Start header --> */}
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
                                        <a class="navbar-brand" href="index.html"><img src="assets/images/logo.png"
                                            alt="" /></a>
                                    </div>
                                </div>
                                <div class="col-lg-8 col-md-1 col-1">
                                    <div id="navbar" class="collapse navbar-collapse navigation-holder">
                                        <button class="menu-close"><i class="ti-close"></i></button>
                                        <ul class="nav navbar-nav mb-2 mb-lg-0">
                                            <li class="menu-item-has-children">
                                                <a href="#">Home</a>
                                                <ul class="sub-menu">
                                                    <li><a href="index.html">Main Home</a></li>
                                                    <li><a href="index-2.html">Wedding Planner</a></li>
                                                    <li><a href="index-3.html">Announcement S1</a></li>
                                                    <li><a href="index-4.html">Announcement S2</a></li>
                                                    <li><a href="index-5.html">Wedding Home</a></li>
                                                    <li><a href="index-7.html">Shop Home</a></li>
                                                    <li><a href="index-6.html">Invitation</a></li>
                                                </ul>
                                            </li>
                                            <li class="menu-item-has-children">
                                                <a href="#">Pages</a>
                                                <ul class="sub-menu">
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
                                                </ul>
                                            </li>
                                            <li class="menu-item-has-children">
                                                <a href="#">Portfolio</a>
                                                <ul class="sub-menu">
                                                    <li><a href="portfolio-grid.html">Portfolio Grid</a></li>
                                                    <li><a href="portfolio-mashonary.html">Portfolio Mashonary</a></li>
                                                    <li><a href="portfolio-mashonary-s2.html">Portfolio Mashonary S2</a></li>
                                                    <li><a href="portfolio-single.html">Portfolio Single</a></li>
                                                </ul>
                                            </li>
                                            <li class="menu-item-has-children">
                                                <a href="#">Shop</a>
                                                <ul class="sub-menu">
                                                    <li><a href="shop.html">Shop</a></li>
                                                    <li><a href="shop-single.html">Shop Single</a></li>
                                                    <li><a href="cart.html">Cart</a></li>
                                                    <li><a href="wishlist.html">Wishlist</a></li>
                                                    <li><a href="checkout.html">Checkout</a></li>
                                                </ul>
                                            </li>
                                            <li class="menu-item-has-children">
                                                <a href="#">Blog</a>
                                                <ul class="sub-menu">
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
                                                </ul>
                                            </li>
                                            <li><a class="active" href="contact.html">Contact</a></li>
                                        </ul>

                                        {/* <!-- end of nav-collapse --> */}
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
                                        <div class="mini-cart">
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
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- end of container --> */}
                    </nav>
                </div>
            </header>
            {/* <!-- end of header --> */}
            {/* <!-- start wpo-page-title --> */}
            <section class="wpo-page-title">
                <div class="container">
                    <div class="row">
                        <div class="col col-xs-12">
                            <div class="wpo-breadcumb-wrap">
                                <h2>Contact</h2>
                                <ol class="wpo-breadcumb-wrap">
                                    <li><a href="index.html">Home</a></li>
                                    <li>Contact</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                {/*  <!-- end row --> */}
                {/*  <!-- end container --> */}
            </section>
            {/* <!-- end page-title --> */}

            {/* <!-- start wpo-contact-pg-section --> */}
            <section class="wpo-contact-pg-section section-padding">
                <div class="container">
                    <div class="row">
                        <div class="col col-lg-10 offset-lg-1">
                            <div class="office-info">
                                <div class="row">
                                    <div class="col col-xl-4 col-lg-6 col-md-6 col-12">
                                        <div class="office-info-item">
                                            <div class="office-info-icon">
                                                <div class="icon">
                                                    <i class="fi flaticon-maps-and-flags"></i>
                                                </div>
                                            </div>
                                            <div class="office-info-text">
                                                <h2>Address</h2>
                                                <p>7 Green Lake Street Crawfordsville, IN 47933</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col col-xl-4 col-lg-6 col-md-6 col-12">
                                        <div class="office-info-item">
                                            <div class="office-info-icon">
                                                <div class="icon">
                                                    <i class="fi flaticon-email"></i>
                                                </div>
                                            </div>
                                            <div class="office-info-text">
                                                <h2>Email Us</h2>
                                                <p>loveme@gmail.com</p>
                                                <p>helloyou@gmail.com</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col col-xl-4 col-lg-6 col-md-6 col-12">
                                        <div class="office-info-item">
                                            <div class="office-info-icon">
                                                <div class="icon">
                                                    <i class="fi flaticon-phone-call"></i>
                                                </div>
                                            </div>
                                            <div class="office-info-text">
                                                <h2>Call Now</h2>
                                                <p>+1 800 123 456 789</p>
                                                <p>+1 800 123 654 987</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="wpo-contact-title">
                                <h2>Have Any Question?</h2>
                                <p>It is a long established fact that a reader will be distracted
                                    content of a page when looking.</p>
                            </div>
                            <div class="wpo-contact-form-area">
                                <form method="post" class="contact-validation-active" id="contact-form-main">
                                    <div>
                                        <input type="text" class="form-control" name="name" id="name" placeholder="Your Name*" />
                                    </div>
                                    <div>
                                        <input type="email" class="form-control" name="email" id="email" placeholder="Your Email*" />
                                    </div>
                                    <div>
                                        <input type="text" class="form-control" name="adress" id="adress" placeholder="Adress" />
                                    </div>
                                    <div>
                                        <select name="service" class="form-control">
                                            <option disabled="disabled" selected="">Services</option>
                                            <option>Photography</option>
                                            <option>The Rehearsal Dinner</option>
                                            <option>The Afterparty</option>
                                            <option>Videographers</option>
                                            <option>Perfect Cake</option>
                                            <option>All Of The Above</option>
                                        </select>
                                    </div>
                                    <div class="fullwidth">
                                        <textarea class="form-control" name="note" id="note" placeholder="Message..."></textarea>
                                    </div>
                                    <div class="submit-area">
                                        <button type="submit" class="theme-btn-s4">Get in Touch</button>
                                        <div id="loader">
                                            <i class="ti-reload"></i>
                                        </div>
                                    </div>
                                    <div class="clearfix error-handling-messages">
                                        <div id="success">Thank you</div>
                                        <div id="error"> Error occurred while sending email. Please try again later. </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
                {/* <!-- end container --> */}
            </section>
            {/* <!-- end wpo-contact-pg-section --> */}

            {/* <!--  start wpo-contact-map --> */}
            <section class="wpo-contact-map-section">
                <h2 class="hidden">Contact map</h2>
                <div class="wpo-contact-map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.9147703055!2d-74.11976314309273!3d40.69740344223377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sbd!4v1547528325671" allowfullscreen></iframe>
                </div>
            </section>




            <footer class="wpo-site-footer">
                <div class="wpo-upper-footer">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                                <div class="widget about-widget">
                                    <div class="logo widget-title">
                                        <img src="assets/images/logo.png" alt="blog" />
                                    </div>
                                    <p>Welcome and open yourself to your truest love this year with us! With the Release
                                        Process</p>
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <i class="ti-facebook"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i class="ti-twitter-alt"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i class="ti-instagram"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i class="ti-google"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col col-xl-3  col-lg-4 col-md-6 col-sm-12 col-12">
                                <div class="widget link-widget">
                                    <div class="widget-title">
                                        <h3>Information</h3>
                                    </div>
                                    <ul>
                                        <li><a href="about.html">About Us</a></li>
                                        <li><a href="portfolio.html">Portfolio</a></li>
                                        <li><a href="blog.html">Latest News</a></li>
                                        <li><a href="contact.html">Contact us</a></li>
                                        <li><a href="service.html">Our Services</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col col-xl-3  col-lg-4 col-md-6 col-sm-12 col-12">
                                <div class="widget wpo-service-link-widget">
                                    <div class="widget-title">
                                        <h3>Contact </h3>
                                    </div>
                                    <div class="contact-ft">
                                        <p>Would you have any enquiries.Please feel free to contuct us</p>
                                        <ul>
                                            <li><i class="fi flaticon-email"></i>loveme@gmail.com</li>
                                            <li><i class="fi flaticon-phone-call"></i>+888 (123) 869523</li>
                                            <li><i class="fi flaticon-maps-and-flags"></i>New York – 1075 Firs Avenue
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div class="col col-xl-3  col-lg-4 col-md-6 col-sm-12 col-12">
                                <div class="widget instagram">
                                    <div class="widget-title">
                                        <h3>Instagram</h3>
                                    </div>
                                    <ul class="d-flex">
                                        <li><a href="portfolio-single.html"><img src="assets/images/instragram/1.jpg"
                                            alt="" /></a></li>
                                        <li><a href="portfolio-single.html"><img src="assets/images/instragram/2.jpg"
                                            alt="" /></a></li>
                                        <li><a href="portfolio-single.html"><img src="assets/images/instragram/3.jpg"
                                            alt="" /></a></li>
                                        <li><a href="portfolio-single.html"><img src="assets/images/instragram/4.jpg"
                                            alt="" /></a></li>
                                        <li><a href="portfolio-single.html"><img src="assets/images/instragram/5.jpg"
                                            alt="" /></a></li>
                                        <li><a href="portfolio-single.html"><img src="assets/images/instragram/6.jpg"
                                            alt="" /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="wpo-lower-footer">
                    <div class="container">
                        <div class="row">
                            <div class="col col-xs-12">
                                <p class="copyright"> &copy; 2021 Loveme Template. Design By <a
                                    href="index.html">wpOceans</a>. All Rights Reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* <!-- end of wpo-site-footer-section --> */}

            {/* <!-- color-switcher --> */}
            <div class="color-switcher-wrap">
                <div class="color-switcher-item">
                    <div class="color-toggle-btn">
                        <i class="fa fa-cog"></i>
                    </div>
                    <ul id="switcher">
                        <li class="btn btn1" id="Button1"></li>
                        <li class="btn btn2" id="Button2"></li>
                        <li class="btn btn3" id="Button3"></li>
                        <li class="btn btn4" id="Button4"></li>
                        <li class="btn btn5" id="Button5"></li>
                        <li class="btn btn6" id="Button6"></li>
                        <li class="btn btn7" id="Button7"></li>
                        <li class="btn btn8" id="Button8"></li>
                        <li class="btn btn9" id="Button9"></li>
                        <li class="btn btn10" id="Button10"></li>
                        <li class="btn btn11" id="Button11"></li>
                        <li class="btn btn12" id="Button12"></li>
                    </ul>
                </div>
            </div>

        </div>

    )
}


export default Contact;