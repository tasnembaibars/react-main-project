import React, { useState, useEffect } from 'react';
import '../Posts.css';
import axios from "axios";
import { Link, NavLink } from 'react-router-dom';
function Posts2() {
    const [post, setPost] = useState('');
    // const [rule , setRule] = useState(0);
    // const [likesP , setLikesP] = useState(0);
    // const [costumer_id , setCostumer_id] = useState(1);

    const [posts, setPosts] = useState([]);
    const [Load, setLoad] = useState(true);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/posts')
            .then((response) => response.json())
            .then(data => {
                setPosts(data);
                setLoad(false);
                console.log(data);
            });
            
    }, []);
    

    //  start Add post
    const add_Posts = async (e) => {
        e.preventDefault();
        const response = await fetch(`http://127.0.0.1:8000/api/post`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ post: post }),

        });
        console.log(post);
        if (response.ok) {
            window.alert("comment added successfully")
        }
        window.location.href = "http://localhost:3000/Posts2";
    }


    //  end Add post

    

    return (
        <>

            <section class="wpo-blog-single-section section-padding">
                <div class="container">
                    <div class="row">


                        <div class="comment-respond">
                            <h3 class="comment-reply-title">Add Post</h3>
                            <form class="comment-form" onSubmit={add_Posts}>

                                {/* <input placeholder="Website" type="url"/> */}
                                <div class="form-textarea">
                                    <textarea id="comment" placeholder="Write Your Comments..." onChange={(e) => setPost(e.target.value)} name="post" value={post}></textarea>
                                </div>
                                <div class="form-submit">
                                    <button id="submit" value="Post Comment" type="submit" >
                                        Add Post
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <br />
                    <br /><br /><br /><br />

                    <h3 class="comments-title">Posts</h3>
                    {Load && <h1>Loading .... </h1>}
                    {posts && posts.map(p => (
                        <div className="author-box">
                            <div className="author-avatar">
                                <a href="#" target="_blank"><img src="assets/images/blog-details/author.jpg" alt /></a>
                            </div>
                            <div className="author-content">
                                {/* <a href="#" className="author-name">Author: Jenny Watson</a> */}
                                <div class="comments-meta">
                                    <h4>Robert Sonny <span class="comments-date">{p.Date}</span></h4>
                                </div>
                                <p>{p.post}</p>
                                <div className="socials">
                                    <ul className="social-link">
                                    
                                        <button type="submit" name='like' style={{ border: "none" }} >  <NavLink  to={`/post/${p.id}`}  style={{  textDecoration:" none" }}><i class="fa fa-comment-o" >Comments</i></NavLink> </button>

                                        {/*  */}
                                        {/* <i style="font-size:24px" class="fa">&#xf0e5;</i> */}
                                        {/* <i class='far fa-heart' style='font-size:48px;color:red'></i> */}
                                    </ul>
                                   

                                </div>
                            </div>

                        </div>

                    )
                    )
                    }

                </div>





            </section >
        </>


    );
}
export default Posts2;