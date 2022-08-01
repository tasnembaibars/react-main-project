import React, { useState, useEffect } from 'react';
import '../Posts.css';
import axios from "axios";
import { useParams } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
export default function Products() {
    // const { id } = useParams();
    // const [Load, setLoad] = useState(true);
    // const [Product, setProduct] = useState([ ]);

    // useEffect(() => {
    //     fetch(`http://127.0.0.1:8000/api/services/${id}`)
    //     .then((response) => response.json())
    //     .then(data => {
    //             setProduct(data);
    //             setLoad(false);
    //             console.log('Product' , data);});
    // }, []);

    //fetch all product
   
    // useEffect(() => {
        
    //     // const fetchproduct = async () => {
    //     //     const response = await fetch(`http://127.0.0.1:8000/api/services/${id}`)
    //     //     const res = await response.json()
          
    //     //     setAll(res.services);
    //     //      console.log('all', all);
    //     // }
    //     // fetchproduct()
    // }, [])
//     const [all, setAll] = useState({})


//    const fetchData = async()=>{
//    const resp = await fetch(`http://127.0.0.1:8000/api/services/${id}`)
//       const respdata = await resp.json()
//       setAll(respdata);
    
//   }
//   useEffect(() => {
//     fetchData()
//   }, []);
//   console.log(all);
const { id } = useParams();
const [all, setAll] = useState([])
useEffect(() => {
    const fetchData = async () => {
        const resp = await fetch(`http://127.0.0.1:8000/api/services/${id}`)
        const respdata = await resp.json()
        setAll(respdata);
    }

    fetchData()
}, []);
console.log(all);
    return (
        <div>
            {/* {Load && <h1>Loading .... </h1>} */}
            {/* {all.length>0 && all.map((p) => {
                return ( */}
                    <section class="wpo-service-section-s3 section-padding">
                        
                       
                        <div class="container">
                            <div class="wpo-service-wrap">
                                <div class="row">
                                    <div class="col-lg-4 col-md-6 col-12">
                                        <div class="wpo-service-item">
                                       
                                            <div class="wpo-service-text">
                                                <div class="s-icon">
                                                <img src={`http://127.0.0.1:8000/${all.picture}`} alt class="img img-responsive" />
                                                </div>
                                                <h2 className='text-center '>{all.title}</h2>
                                                <a href="service-single.html">Price: {all.price}</a>
                                                <div class="submit-area" >
            <br />
            <br />
                                                <button type="submit" name='like' class="theme-btn-s4" >  <NavLink to={`/product/${all.id}`} style={{ textDecoration: " none", color:"white" }}>Show services</NavLink> </button>
</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                {/* )
            }
            )} */}
        </div>
    );
}
