import React, { useState, useEffect } from 'react';
import '../Posts.css';
import axios from "axios";
import { useParams } from 'react-router';

function Singlepost() {
    // const [post, setPost] = useState('');
    // const [rule , setRule] = useState(0);
    // const [likesP , setLikesP] = useState(0);
    // const [costumer_id , setCostumer_id] = useState(1);
    const {id} = useParams();
    const [posts, setPosts] = useState([]);
    console.log(id);
    const [comments, setcomments] = useState([]);
    useEffect(() => {
     
    fetch(`http://127.0.0.1:8000/api/singlepost/${id}`) 
  .then((response)=> response.json())
  .then(data => {setPosts(data);
      console.log(data);
      });
      fetch(`http://127.0.0.1:8000/api/viewComments/${id}`) 
      .then((response)=> response.json())
      .then(data => {setcomments(data);
          console.log(data);
          });
    }, []);

    

   
    return (
        <>

            <section class="wpo-blog-single-section section-padding">
                <div class="container">
              

                    <h3 class="comments-title">Posts</h3>
                           
                        <div className="author-box">
                            <div className="author-avatar">
                                <a href="#" target="_blank"><img src="assets/images/blog-details/author.jpg" alt /></a>
                            </div>
                            <div className="author-content">
                                {/* <a href="#" className="author-name">Author: Jenny Watson</a> */}
                                <div class="comments-meta">
                                    <h4>Robert Sonny <span class="comments-date">{posts.Date}</span></h4>
                                </div>
                                <p>{posts.post}</p>
                                <div className="socials">
                                    <ul className="social-link">
                                       
                                        <button type="submit" name='like' style={{ border: "none" }} ><i class="fa fa-comment-o" > 35 Comments </i></button>
                                    </ul>
                                    {comments && comments.map(m => (
                                    <div class="comments-area">
                                        <div class="comments-section">
                                            <h3 class="comments-title">Comments</h3>
                                            <ol class="comments">
                                                <li class="comment even thread-even depth-1" id="comment-1">
                                                    <div id="div-comment-1">
                                                        <div class="comment-theme">
                                                            <div class="comment-image"><img src="assets/images/blog-details/comments-author/img-1.jpg" alt />{m.Date}</div>
                                                        </div>
                                                        <div class="comment-main-area">
                                                            <div class="comment-wrapper">
                                                                <div class="comments-meta">
                                                                    <h4>Robert Sonny <span class="comments-date"></span></h4>
                                                                </div>
                                                                <div class="comment-area">
                                                                    <p>{m.comment}</p>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ol>

                                        </div>
                                    </div>
                                    ))}
                                    <br /> <br />
                                    <input type="text" style={{ width: "500px", borderRadius: "20px" }}></input>
                                    <button type="submit" >Comments</button>
                                </div>
                            </div>

                        </div>


                </div>





            </section >
        </>


    );
}
export default Singlepost;