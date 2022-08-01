
import React, { useState, useEffect } from 'react';
import '../Posts.css';
import axios from "axios";
import { useParams } from 'react-router';
export default function Products2() {
    const { id } = useParams();

    const [Product, setProduct] = useState([]);
    //  const [user_id, setuser_id] = useState({});
    //  const [post_id, setpost_id] = useState({});
    //  const [likes, setlike] = useState(0);
    //  setpost_id(id);
    //  setuser_id(1);
    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/products/${id}`)
            .then((response) => response.json())
            .then(data => {
                setProduct(data);
                console.log(data);
            });


    }, []);
    return (
        <div>
{Product && Product.map(p => (
            <section class="wpo-service-section-s3 section-padding">
                <h2 class="hidden">{Product.title}</h2>
                <div class="container">
                    <div class="wpo-service-wrap">
                        <div class="row">
                            <div class="col-lg-4 col-md-6 col-12">
                                <div class="wpo-service-item">
                                    <div class="wpo-service-text">
                                        <div class="s-icon">
                                            <i class="fi flaticon-gallery"></i>
                                        </div>
                                        <a href="service-single.html">{Product.	description}</a>
                                        <p>widdeng</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
       
))}
 </div>
    );
}