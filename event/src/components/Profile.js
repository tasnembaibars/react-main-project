import './profile.css';
import { useParams } from 'react-router';
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Profile() {

    const [users, setUsers] = useState({
        name: '', email: '', phone: '', password: '', picture: ''
    });

    const [update, setUpdate] = useState(false);
    const { id } = useParams();
    console.log(id);

    useEffect(() => {
        const data = async () => {
            const response = await fetch(`http://127.0.0.1:8000/api/profile/${id}`)
            const dbData = await response.json();
            setUsers(dbData);

        }
        data()
    }, [update])

    const updateHandeler = (e) => {
        e.preventDefault();
        axios.put(`http://127.0.0.1:8000/api/profile/${id}`, users)
            .then((res) => setUsers(res.data))
            .then(() => setUpdate(!update))
        console.log(users)
        if (!update) {
            window.alert('Your profile has been updated successfuly')

        }
    }

    //post history
    const [post, setPost] = useState([]);

    useEffect(() => {
        const fetching = async () => {
            const api = await fetch(`http://127.0.0.1:8000/api/userposts/${id}`);
            const dataa = await api.json();
            setPost(dataa);
            console.log(dataa);
        }
        fetching();
    }, [id])

    return (


        <div class="container" style={{ marginTop: '120px' }}>
            <div class="profile-wrapper">
                <div class="profile-section-user">
                    {/* <div class="profile-cover-img"><img src="https://bootdey.com/img/Content/flores-amarillas-wallpaper.jpeg" alt=""/></div> */}


                    {/* <hr class="m-0"/> */}
                    <div class="hidden-sm-down">
                        {/* <hr class="m-0"/> */}
                        <div class="profile-info-contact p-4">
                            {/* <h6 class="mb-3">User Information</h6> */}
                            <form onSubmit={updateHandeler}>
                                <div class="profile-info-brief p-3"><img class="img-fluid user-profile-avatar" src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="" />
                                    <div class="text-center">
                                    <input type="file" name='picture' />
                                        <hr class="m-2"/>
                                    </div>
                                </div>
                              
                                <table class="table">
                                    <tbody>
                                        <tr>
                                            <td><strong>Name:</strong></td>
                                            <td>
                                                <input type="text" className="form-control" name='name' value={users.name} onChange={(e) => setUsers({ ...users, name: e.target.value })} />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><strong>Email:</strong></td>
                                            <td>
                                                {/* <p class="text-muted mb-0">rathemes@gmail.com</p> */}
                                                <input type="text" className="form-control" name='email' value={users.email} onChange={(e) => setUsers({ ...users, email: e.target.value })} />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><strong>Phone:</strong></td>
                                            <td>
                                                {/* <p class="text-muted mb-0">Rathemes</p> */}
                                                <input type="text" className="form-control" name='phone' placeholder='' value={users.phone} onChange={(e) => setUsers({ ...users, phone: e.target.value })} />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><strong>Password:</strong></td>
                                            <td>
                                                {/* <p class="text-muted mb-0">Rathemes</p> */}
                                                <input type="password" className="form-control" name='password' placeholder='' value={users.password} onChange={(e) => setUsers({ ...users, password: e.target.value })} />
                                            </td>
                                        </tr>
                                        <button className="btn btn-primary" type='submit' style={{ backgroundColor: '#86a0b6', marginTop: '10px' }} >Update</button>

                                    </tbody>
                                </table>
                            </form>
                        </div>

                        <hr class="m-0" />
                        {/* <div class="profile-info-general p-4">
                <h6 class="mb-3">General Information</h6>
                <table class="table">
                    <tbody>
                        <tr>
                            <td><strong>JOB:</strong></td>
                            <td>
                                <p class="text-muted mb-0">Web Developer</p>
                            </td>
                        </tr>
                        <tr>
                            <td><strong>POSITION:</strong></td>
                            <td>
                                <p class="text-muted mb-0">Team Manager</p>
                            </td>
                        </tr>
                        <tr>
                            <td><strong>STUDIED:</strong></td>
                            <td>
                                <p class="text-muted mb-0">Computer Science</p>
                            </td>
                        </tr>
                        <tr>
                            <td><strong>LAST SEEN:</strong></td>
                            <td>
                                <p class="text-muted mb-0">Yesterday 8:00 AM</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div> */}

                        <hr class="m-0" />
                    </div>

                </div>

                <div class="profile-section-main">

                    <ul class="nav nav-tabs profile-tabs" role="tablist">
                        <li class="nav-item"><a class="nav-link active" data-toggle="tab" href="#profile-overview" role="tab">Timeline</a></li>
                    </ul>

                    <div class="tab-content profile-tabs-content">

                        <div class="tab-pane active" id="profile-overview" role="tabpanel">

                            {post.length > 0 && post.map(c => (

                                <div class="stream-posts">

                                    <div class="stream-post">

                                        <div class="sp-author">
                                            <a href="#" class="sp-author-avatar"><img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="" /></a>
                                            <h6 class="sp-author-name"><a href="#">{c.name}</a></h6></div>
                                        <div class="sp-content">
                                            <div class="sp-info"></div>
                                            <h6>{c.Date}</h6>
                                            <p class="sp-paragraph mb-0">{c.post}</p>
                                        </div>
                                        <h2></h2>


                                    </div>
                                </div>
                            ))}

                        </div>

                    </div>

                </div>

            </div>
        </div>



    )
}

export default Profile; 