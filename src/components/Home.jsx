import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar"
import React, { useState } from 'react';

const Home = () => {
    const navigate = useNavigate();
    return (
        <section className="bg-warning">
            <Navbar />
            <div className="container py-5">
                <div className="row p-5">
                    <div className="about-text col-md-8 d-flex flex-column justify-content-start p-5">
                        <h1 className="fw-bolder text-black text-start">First I wanted to be <br />a veterinarian</h1>
                        <p className="fw-bolder mb-5 text-white">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit <br />
                            maiores officiis itaque ducimus enim dolorum similique laboriosam. <br />
                            A veniam, tempora, tempore laboriosam aspernatur ducimus libero totam <br />
                            aperiam natus, omnis nesciunt!
                        </p>
                        <div className="d-flex">
                            <button onClick={() => navigate('/Contact')} type="button" className="btn btn-info text-white fs-4">Contact us</button >
                            <button type="button" className="btn btn-outline-info fs-4 text-white ms-5">Show me</button>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div>
                            <img src="./img/dog(3).png" className="img-fluid" alt="" width="450px" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Home;
