import React,{useEffect,useState} from 'react'
import {useNavigate} from 'react-router-dom'
function Single() {
    //insert comments
    const [comment, setComment] = useState("");
    const [costumer_id, setCostumer_id] = useState(1);
    const [post_id, setPost_id] = useState(1);
    
    const navigate = useNavigate();
    // let isLoggedIn = JSON.parse(localStorage.getItem("user"));
    // if (!isLoggedIn) {
    //   navigate("/login");
    // }
    const handleClick = async (e) => {
      e.preventDefault();
      const response= await fetch(`http://127.0.0.1:8000/api/comments_post`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ comment:comment,costumer_id,post_id  }),
      
      });
      if (response.ok){
        window.alert("comment added successfully")
      }
      
    };
    console.log(comment)


    //fetch all comments
    const [all,setAll]=useState([])
    useEffect(()=>{
      const fetchComments=async()=>{  
      const response=await fetch (`http://127.0.0.1:8000/api/comments`)
      const res=await response.json()
      setAll(res)
    }

    fetchComments() },[])
    console.log(all)   



    //select users Infos
    // const[users,setUsers]=useState([])
    // useEffect(()=>{
    //     const fetchUsers=async()=>{
    //         const response=await fetch(`http://127.0.0.1:8000/api/commentor/1`)
    //         const data=await response.json()
    //         setUsers(data)
    //     }
    //     fetchUsers()
    // },[])
    // console.log(users)


  return (
    // <!-- start page-wrapper -->
    <div className="page-wrapper">
       
       
        {/* <!-- start wpo-page-title --> */}
        <section className="wpo-page-title">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="wpo-breadcumb-wrap">
                            <h2>Blog Single</h2>
                            <ol className="wpo-breadcumb-wrap">
                                <li><a href="index.html">Home</a></li>
                                <li>Blog</li>
                                <li>Blog Single</li>
                            </ol>
                        </div>
                    </div>
                </div> 
                {/* <!-- end row --> */}
            </div>
             {/* <!-- end container --> */}
        </section>
        {/* <!-- end page-title --> */}

        {/* <!-- start wpo-blog-single-section --> */}
        <section className="wpo-blog-single-section wpo-blog-single-left-sidebar-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-10 col-12 offset-lg-1">
                        <div className="wpo-blog-content">
                            <div className="post format-standard-image">
                                <div className="entry-media">
                                    <img src="assets/images/blog/img-4.jpg" alt/>
                                </div>
                                <div className="entry-meta">
                                    <ul>
                                        <li><i className="fi flaticon-user"></i> By <a href="#">Jenny Watson</a> </li>
                                        <li><i className="fi flaticon-comment-white-oval-bubble"></i> Comments 35 </li>
                                        <li><i className="fi flaticon-calendar"></i> 24 Jun 2021</li>
                                    </ul>
                                </div>
                                <h2>Best wedding gift you may like & choose.</h2>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful.</p>
                                <blockquote>
                                    Combined with a handful of model sentence structures, generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                                </blockquote>
                                <p>I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself,</p>

                                <div className="gallery">
                                    <div>
                                        <img src="assets/images/blog-details/1.jpg" />
                                    </div>
                                    <div>
                                        <img src="assets/images/blog-details/2.jpg" />
                                    </div>
                                </div>
                            </div>

                            <div className="tag-share clearfix">
                                <div className="tag">
                                    <span>Share: </span>
                                    <ul>
                                        <li><a href="#">Planning</a></li>
                                        <li><a href="#">photography</a></li>
                                        <li><a href="#"> creative</a></li>
                                    </ul>
                                </div>
                            </div>
                             {/* <!-- end tag-share --> */}
                            <div className="tag-share-s2 clearfix">
                                <div className="tag">
                                    <span>Share: </span>
                                    <ul>
                                        <li><a href="#">facebook</a></li>
                                        <li><a href="#">twitter</a></li>
                                        <li><a href="#">linkedin</a></li>
                                        <li><a href="#">pinterest</a></li>
                                    </ul>
                                </div>
                            </div> 
                            {/* <!-- end tag-share --> */}

                            <div className="author-box">
                                <div className="author-avatar">
                                    <a href="#" target="_blank"><img src="assets/images/blog-details/author.jpg" alt/></a>
                                </div>
                                <div className="author-content">
                                    <a href="#" className="author-name">Author: Jenny Watson</a>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.</p>
                                    <div className="socials">
                                        <ul className="social-link">
                                            <li><a href="#"><i className="ti-facebook"></i></a></li>
                                            <li><a href="#"><i className="ti-twitter-alt"></i></a></li>
                                            <li><a href="#"><i className="ti-linkedin"></i></a></li>
                                            <li><a href="#"><i className="ti-instagram"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                             {/* <!-- end author-box --> */}

                            <div className="more-posts">
                                <div className="previous-post">
                                    <a href="blog.html">
                                        <span className="post-control-link">Previous Post</span>
                                        <span className="post-name">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.</span>
                                    </a>
                                </div>
                                <div className="next-post">
                                    <a href="blog-left-sidebar.html">
                                        <span className="post-control-link">Next Post</span>
                                        <span className="post-name">Dignissimos ducimus qui blanditiis praesentiu deleniti atque corrupti quos dolores</span>
                                    </a>
                                </div>
                            </div>

                            <div className="comments-area">
                                <div className="comments-section">
                                    <h3 className="comments-title">5 Comments</h3>
                                    <ol className="comments">
                                        <li className="comment even thread-even depth-1" id="comment-1">
                                            {all.map((user)=>{
                                                    return( 
                                                    <div id="div-comment-1">
                                                <div className="comment-theme">
                                                    <div className="comment-image"><img src="assets/images/blog-details/comments-author/img-1.jpg" alt/></div>
                                                </div>
                                               
                                                <div className="comment-main-area">
                                                
                                                    <div className="comment-wrapper">
                                                       
                                                        <div className="comments-meta">
                                                            <h4>{user.name} <span className="comments-date">{user.Date}</span></h4>
                                                        </div>
                                                        <div className="comment-area">
                                                            <p>{user.comment}</p>
                                                            <div className="comments-reply">
                                                                <a className="comment-reply-link" href="#"><span>Reply</span></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                       

                                                </div>
                                           
                                            </div>
                                             ) })}
                                            {/* <ul className="children">
                                                <li className="comment">
                                                    <div>
                                                        <div className="comment-theme">
                                                            <div className="comment-image"><img src="assets/images/blog-details/comments-author/img-2.jpg" alt/></div>
                                                        </div>
                                                        <div className="comment-main-area">
                                                            <div className="comment-wrapper">
                                                                <div className="comments-meta">
                                                                    <h4>John Abraham  <span className="comments-date">says Jul 21, 2021 at 10:00am</span></h4>
                                                                </div>
                                                                <div className="comment-area">
                                                                    <p>I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system</p>
                                                                    <div className="comments-reply">
                                                                        <a  className="comment-reply-link" href="#"><span>Reply</span></a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <ul>
                                                        <li className="comment">
                                                            <div>
                                                                <div className="comment-theme">
                                                                    <div className="comment-image"><img src="assets/images/blog-details/comments-author/img-3.jpg" alt/></div>
                                                                </div>
                                                                <div className="comment-main-area">
                                                                    <div className="comment-wrapper">
                                                                        <div className="comments-meta">
                                                                            <h4>Robert Sonny <span className="comments-date">says Jul 21, 2021 at 10:00am</span></h4>
                                                                        </div>
                                                                        <div className="comment-area">
                                                                            <p>I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system</p>
                                                                            <div className="comments-reply">
                                                                                <a  className="comment-reply-link" href="#"><span>Reply</span></a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul> */}
                                        </li>
{/* 
                                        <li className="comment">
                                            <div>
                                                <div className="comment-theme">
                                                    <div className="comment-image"><img src="assets/images/blog-details/comments-author/img-1.jpg" alt/></div>
                                                </div>
                                                <div className="comment-main-area">
                                                    <div className="comment-wrapper">
                                                        <div className="comments-meta">
                                                            <h4>John Abraham  <span className="comments-date">says Jul 21, 2021 at 10:00am</span></h4>
                                                        </div>
                                                        <div className="comment-area">
                                                            <p>I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system</p>
                                                            <div className="comments-reply">
                                                                <a  className="comment-reply-link" href="#"><span>Reply</span></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li> */}
                                    </ol>
                                </div>
                                 {/* <!-- end comments-section --> */}

                                <div className="comment-respond">
                                    <h3 className="comment-reply-title">Leave Comment</h3>
                                    <form className="comment-form" onSubmit={handleClick}>
                                     
                                        <div className="form-textarea">
                                            <textarea id="comment" placeholder="Write Your Comments..." name='comment' value={comment} onChange={(e)=>setComment(e.target.value)}></textarea>
                                        </div>
                                        <div className="form-submit">
                                           <button type="submit" style={{border:"none",background:"none"}}>Post Comment</button>
                                           {/* <button type="submit" style={{border:"none",background:"none"}}><input id="submit" value="Post Comment"/></button> */}
                                        </div>
                                    </form>
                                </div>
                            </div>
                             {/* <!-- end comments-area --> */}
                        </div>
                    </div>
                </div>
            </div>
             {/* <!-- end container --> */}
        </section>
        {/* <!-- end wpo-blog-single-section --> */}



    </div>
    // <!-- end of page-wrapper --> 

  )
}

export default Single
