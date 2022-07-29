import React from 'react';
import  '../Posts.css';
 function Posts2() {
  return (
  <>

        <section class="wpo-blog-single-section section-padding">
            <div class="container">
                <div class="row">
              
            
                                <div class="comment-respond">
                                    <h3 class="comment-reply-title">Add Post</h3>
                                    <form class="comment-form">
                                  
                                         {/* <input placeholder="Website" type="url"/> */}
                                        <div class="form-textarea">
                                            <textarea id="comment" placeholder="Write Your Comments..."></textarea>
                                        </div>
                                        <div class="form-submit">
                                            <input id="submit" value="Post Comment" type="submit"/>
                                        </div>
                                    </form>
                                </div>
                            </div> 
                            <div class="comments-area">
                                <div class="comments-section">
                                    <h3 class="comments-title">Posts</h3>
                                    <ol class="comments">
                                        <li class="comment even thread-even depth-1" id="comment-1">
                                            <div id="div-comment-1">
                                                <div class="comment-theme">
                                                    <div class="comment-image"><img src="assets/images/blog-details/comments-author/img-1.jpg" alt/></div>
                                                </div>
                                                <div class="comment-main-area">
                                                    <div class="comment-wrapper">
                                                        <div class="comments-meta">
                                                            <h4>Robert Sonny <span class="comments-date">says Jul 21, 2021 at 10:00am</span></h4>
                                                        </div>
                                                        <div class="comment-area">
                                                            <p>I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system</p>
                                                            <div class="comments-reply">
                                                                <a class="comment-reply-link" href="#"><span>Reply</span></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <ul class="children">
                                                <li class="comment">
                                                    <div>
                                                        <div class="comment-theme">
                                                            <div class="comment-image"><img src="assets/images/blog-details/comments-author/img-2.jpg" alt/></div>
                                                        </div>
                                                        <div class="comment-main-area">
                                                            <div class="comment-wrapper">
                                                                <div class="comments-meta">
                                                                    <h4>John Abraham  <span class="comments-date">says Jul 21, 2021 at 10:00am</span></h4>
                                                                </div>
                                                                <div class="comment-area">
                                                                    <p>I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system</p>
                                                                    <div class="comments-reply">
                                                                        <a  class="comment-reply-link" href="#"><span>Reply</span></a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <ul>
                                                        <li class="comment">
                                                            <div>
                                                                <div class="comment-theme">
                                                                    <div class="comment-image"><img src="assets/images/blog-details/comments-author/img-3.jpg" alt/></div>
                                                                </div>
                                                                <div class="comment-main-area">
                                                                    <div class="comment-wrapper">
                                                                        <div class="comments-meta">
                                                                            <h4>Robert Sonny <span class="comments-date">says Jul 21, 2021 at 10:00am</span></h4>
                                                                        </div>
                                                                        <div class="comment-area">
                                                                            <p>I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system</p>
                                                                            <div class="comments-reply">
                                                                                <a  class="comment-reply-link" href="#"><span>Reply</span></a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>

                                        <li class="comment">
                                            <div>
                                                <div class="comment-theme">
                                                    <div class="comment-image"><img src="assets/images/blog-details/comments-author/img-1.jpg" alt/></div>
                                                </div>
                                                <div class="comment-main-area">
                                                    <div class="comment-wrapper">
                                                        <div class="comments-meta">
                                                            <h4>John Abraham  <span class="comments-date">says Jul 21, 2021 at 10:00am</span></h4>
                                                        </div>
                                                        <div class="comment-area">
                                                            <p>I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system</p>
                                                            <div class="comments-reply">
                                                                <a  class="comment-reply-link" href="#"><span>Reply</span></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ol>
                                </div> 
                        </div>
                    </div>
                   
                           
                           
                     
             
            
        </section>
</>


  );
}
export default Posts2 ;