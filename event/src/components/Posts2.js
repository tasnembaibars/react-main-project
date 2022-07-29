import React ,{useState , useEffect} from 'react';
import  '../Posts.css';
import axios from "axios";
 function Posts2() {
const [post , setPost] = useState({ });
const [rule , setRule] = useState(0);
const [likes , setLikes] = useState(0);
const [costumer_id , setCostumer_id] = useState(1);
const [posts , setPosts] = useState([]);
const add_Posts = (e) => {
    e.preventDefault();
      axios.post(`http://localhost:8000/api/post` ,
     { post ,
      rule , 
      likes ,
      costumer_id}
      );
      console.log(post);
  };
 
  
//   useEffect(() => {
//     const data = axios.get('http://localhost:8000/api/posts');
//     setPosts(data);
//     console.log(posts);
//     window.scroll(0, 0);


//     // eslint-disable-next-line
//   }, []);

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
                                            <textarea id="comment" placeholder="Write Your Comments..." onChange={(e)=>setPost(e.target.value)}></textarea>
                                        </div>
                                        <div class="form-submit">
                                            <button id="submit" value="Post Comment" type="submit" onClick={add_Posts}>
                                                Add Post
                                         </button>
                                        </div>
                                    </form>
                                </div>
                            </div> 
                            <div className="author-box">
                                <div className="author-avatar">
                                    <a href="#" target="_blank"><img src="assets/images/blog-details/author.jpg" alt/></a>
                                </div>
                          {/* {posts.map(p =>(
                          <div className="author-content">
                          <a href="#" className="author-name">Author: Jenny Watson</a>
                          <p>{p.post} </p>
                          <div className="socials">
                              <ul className="social-link">
                                  <li><a href="#"><i className="ti-facebook"></i></a></li>
                                  <li><a href="#"><i className="ti-twitter-alt"></i></a></li>
                                  <li><a href="#"><i className="ti-linkedin"></i></a></li>
                                  <li><a href="#"><i className="ti-instagram"></i></a></li>
                              </ul>
                          </div>
                      </div>

                          ))} */}
                                
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