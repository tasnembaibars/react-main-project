import React, { useState, useEffect } from 'react';
import '../Posts.css';
import axios from "axios";
import { useParams } from 'react-router';
export default function Products() {
    const { id } = useParams();
    const [Load, setLoad] = useState(true);
    // const [Product, setProduct] = useState([ ]);

    // useEffect(() => {
    //     fetch(`http://127.0.0.1:8000/api/services/${id}`)
    //     .then((response) => response.json())
    //     .then(data => {
    //             setProduct(data);
    //             setLoad(false);
    //             console.log('Product' , data);});
    // }, []);

    //fetch all comments
    const [all, setAll] = useState([])
    useEffect(() => {
        const fetchproduct = async () => {
            const response = await fetch(`http://127.0.0.1:8000/api/services/${id}`)
            const res = await response.json()
            setLoad(false);
            setAll(res)
        }
        fetchproduct()
    }, [])
    console.log('all', all);

    return (
        <div>
            {Load && <h1>Loading .... </h1>}
            {all.length>0 && all.map(p => {
                return (
                    <section class="wpo-service-section-s3 section-padding">
                        <h2 class="hidden">{p.title}</h2>
                        <div class="container">
                            <div class="wpo-service-wrap">
                                <div class="row">
                                    <div class="col-lg-4 col-md-6 col-12">
                                        <div class="wpo-service-item">
                                            <div class="wpo-service-text">
                                                <div class="s-icon">
                                                    <i class="fi flaticon-gallery"></i>
                                                </div>
                                                <a href="service-single.html">{p.description}</a>
                                                <p>widdeng</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                )
            }
            )}
        </div>
    );
}
