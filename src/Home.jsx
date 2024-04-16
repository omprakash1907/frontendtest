import React, { useEffect, useState } from 'react'
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import axios from 'axios';


const Home = () => {

    const [dishes, setDishes] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/recipes')
            .then(response => {
                setDishes(response.data);
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
            });
    }, []);

    console.log(dishes);

    return (
        <>
            <section className='home my-5'>
                <div className="container">
                    <h2 className='text-center fw-bold font-sz'>Discover Receipies</h2>
                    <p className='text-center fw-bold fs-5'>or <Link to='/create' className='text-primary'>Create Your Own</Link></p>

                    <InputGroup size="lg" className='rounded-lg shadow-md col-8'>
                        <InputGroup.Text id="inputGroup-sizing-lg">Search Recepies</InputGroup.Text>
                        <Form.Control
                            aria-label="Large"
                            aria-describedby="inputGroup-sizing-sm"
                            className='shadow-md'
                        />
                    </InputGroup>

                    <div className="d-flex align-items-center flex-wrap justify-content-Evenly gap-2 mt-5">
                        <button className="btn btn-outline-danger rounded-pill px-4">
                            All
                        </button>
                        <button className="btn btn-outline-danger rounded-pill px-4">
                            Combo
                        </button>
                        <button className="btn btn-outline-danger rounded-pill px-4">
                            Burger
                        </button>
                        <button className="btn btn-outline-danger rounded-pill px-4">
                            Wrap
                        </button>
                        <button className="btn btn-outline-danger rounded-pill px-4">
                            Frankie
                        </button>
                        <button className="btn btn-outline-danger rounded-pill px-4">
                            Fries
                        </button>
                        <button className="btn btn-outline-danger rounded-pill px-4">
                            Beverages
                        </button>
                    </div>

                    <div className="recepies-card my-5">
                        <div className="row">

                            {
                                dishes && dishes.map((dish, index) => {
                                    return <div className="col-4" key={index}>
                                        <div class="card">
                                            <img src="https://media.gettyimages.com/id/1363638825/photo/vegan-plant-based-asian-food-recipes-with-rice-and-brown-rice-as.jpg?s=612x612&w=gi&k=20&c=QuqQ2wgvQazlitFvRhMuR2_nWZEf5CB3xa3FS4R0ffM=" class="card-img-top" alt="..."></img>
                                            <div class="card-body">
                                                <h5 class="card-title">{dish.title}</h5>
                                                <p class="card-text">{dish.instructions}</p>
                                                <span className='fw-bold'>ingredients : </span>
                                                {
                                                    dish.ingredients.map((item, index) => {
                                                        return <span class="card-text">{item}, </span>
                                                    })
                                                }
                                                <a href="#" class="btn btn-primary">Go somewhere</a>
                                            </div>
                                        </div>
                                    </div>
                                })
                            }

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home