import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import emailjs from "emailjs-com";

const Contact = () => {

    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [message, setmessage] = useState("");
 

    const sendEmail = (e) => {
      
      };
    
    const contact = async (e) => {
        e.preventDefault();
        axios.post(`https://62e6b4710e5d74566aeb5bb1.mockapi.io/contact`, {
            name,
            email,
            message

        })
        // e.preventDefault();
    
        emailjs.sendForm('service_2g5hjbh', 'template_nk1nx4e', e.target, '4wzL5Z_AqBhLCFm5q')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });;
     
    //   window.alert('add')
     
        // swal({
        //     title: "Good job!",
        //     icon: "success",
        //     button: "ok!",
        //   });
   
    }

    return ( 
        <>
        
        <div class="page-wrapper">
      
          
            {/* <!-- end page-title --> */}
 {/* <section className="wpo-page-title">  */}
            {/* <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="wpo-breadcumb-wrap">
                            <h2>About</h2>
                            <ol className="wpo-breadcumb-wrap">
                                <li><a href="index.html">Home</a></li>
                                <li>About</li>
                            </ol>
                        </div>
                    </div>
                </div>
                 <!-- end row -->
            </div> */}
             {/* <!-- end container --> */}
       {/* </section> */}
            {/* <!-- start wpo-contact-pg-section --> */}
            <section class="wpo-contact-pg-section section-padding" style={{marginTop:'70px'}}>
                <div class="container">
                    <div class="row">
                        <div class="col col-lg-10 offset-lg-1">
                            <div class="office-info">
                                <div class="row">
                                    <div class="col col-xl-4 col-lg-6 col-md-6 col-12">
                                        <div class="office-info-item" style={{backgroundColor:"#88a6bf3d"}}>
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
                                        <div class="office-info-item" style={{backgroundColor:"#88a6bf3d"}}>
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
                                        <div class="office-info-item" style={{backgroundColor:"#88a6bf3d"}}>
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
                               
                            </div>
                            <div class="wpo-contact-form-area" >
                                <form  class="contact-validation-active" id="contact-form-main">
                                    <div>
                                        <input type="text" class="form-control" name="name" id="name" placeholder="Your Name*" onChange={(e) => setname(e.target.value)} required/>
                                    </div>
                                    <div>
                                        <input type="email" class="form-control" name="email" id="email" placeholder="Your Email*" onChange={(e) => setemail(e.target.value)} required/>
                                    </div>
                                  
                                    
                                    <div class="fullwidth">
                                        <textarea class="form-control" name="message" id="note" placeholder="Message..." onChange={(e) => setmessage(e.target.value)} required></textarea>
                                    </div>
                                    <div class="submit-area">
                                        <button type="submit" class="theme-btn-s4" onClick={()=>contact()}>Get in Touch</button>
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
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53808.19199344085!2d35.81239014833433!3d32.55252499618217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151c76916dac0453%3A0x5416e113d81f7d82!2sIrbid!5e0!3m2!1sen!2sjo!4v1659427488545!5m2!1sen!2sjo" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </section>





            {/* <!-- color-switcher --> */}
            <div class="color-switcher-wrap">
                <div class="color-switcher-item">
                    {/* <div class="color-toggle-btn">
                        <i class="fa fa-cog"></i>
                    </div> */}
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

        </>
     );
}
 
export default Contact;
