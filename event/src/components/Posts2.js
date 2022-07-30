import React, { useState, useEffect } from 'react';
import '../Posts.css';
import axios from "axios";
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

    //like
    const [likeactive, setlikeactive] = useState(false);
    const [likes, setlike] = useState(0);

    const like = (id) => {

        if (likeactive) {
            setlikeactive(false);
            setlike(likes - 1);
        }
        else {
            setlikeactive(true);
            setlike(likes + 1);
        }
        fetch(`http://127.0.0.1:8000/api/update/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ likes: likes }),

        });

    }

    //like

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
                    {posts && posts.map(m => (
                        <div className="author-box">
                            <div className="author-avatar">
                                <a href="#" target="_blank"><img src="assets/images/blog-details/author.jpg" alt /></a>
                            </div>
                            <div className="author-content">
                                {/* <a href="#" className="author-name">Author: Jenny Watson</a> */}
                                <div class="comments-meta">
                                    <h4>Robert Sonny <span class="comments-date">{m.Date}</span></h4>
                                </div>
                                <p>{m.post}</p>
                                <div className="socials">
                                    <ul className="social-link">
                                        <button type="submit" name='like' className={[likeactive ? 'active-like' : null, 'button'].join(' ')} onClick={() => like(m.id)} style={{ border: "none" }} ><i class='far fa-heart'></i> {likes} Likes</button>
                                        <button type="submit" name='like' style={{ border: "none" }} ><i class="fa fa-comment-o" > 35 Comments </i></button>


                                        {/*  */}
                                        {/* <i style="font-size:24px" class="fa">&#xf0e5;</i> */}
                                        {/* <i class='far fa-heart' style='font-size:48px;color:red'></i> */}
                                    </ul>
                                    <div class="comments-area">
                                        <div class="comments-section">
                                            <h3 class="comments-title">Comments</h3>
                                            <ol class="comments">
                                                <li class="comment even thread-even depth-1" id="comment-1">
                                                    <div id="div-comment-1">
                                                        <div class="comment-theme">
                                                            <div class="comment-image"><img src="assets/images/blog-details/comments-author/img-1.jpg" alt /></div>
                                                        </div>
                                                        <div class="comment-main-area">
                                                            <div class="comment-wrapper">
                                                                <div class="comments-meta">
                                                                    <h4>Robert Sonny <span class="comments-date">says Jul 21, 2021 at 10:00am</span></h4>
                                                                </div>
                                                                <div class="comment-area">
                                                                    <p>I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system</p>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ol>

                                        </div>
                                    </div>

                                    <br /> <br />
                                    <input type="text" style={{ width: "500px", borderRadius: "20px" }}></input>
                                    <button type="submit" >Comments</button>
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