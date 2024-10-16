import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
    const navigate = useNavigate();

    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration in milliseconds
            once: true, // Animation will happen only once when scrolling down
        });
    }, []);

    return (
        <section className="bg-warning">
            <Navbar />
            <div className="container-fluid py-5">
                <div className="row p-5">
                    <div className="about-text col-md-7 d-flex flex-column justify-content-start p-5" data-aos="fade-right"
                        data-aos-duration="2000">
                        <h1 className="fw-bolder text-black text-start">First I wanted to be a veterinarian</h1>
                        <p className="fw-bolder mb-5 text-white">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                            maiores officiis itaque ducimus enim dolorum similique laboriosam.
                            A veniam, tempora, tempore laboriosam aspernatur ducimus libero totam
                            aperiam natus, omnis nesciunt!
                        </p>
                        <div className="d-flex" data-aos="zoom-in">
                            <button onClick={() => navigate('/Contact')} type="button" className="btn btn-enimi btn-info text-white fs-5">Contact us</button >                        </div>
                    </div>

                    <div className="col-md-5" data-aos="fade-left"
                        data-aos-duration="2000">
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
