import React from 'react';

const Layout = () => {
    return (
        <section className="hero-section-two">
            <div className="container p-5">
                <div className="row align-items-center" data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500">
                    {/* Text Section */}
                    <div className="col-12 col-md-8 d-flex flex-column justify-content-center p-4 p-md-5">
                        <h1 className="fw-bolder ">As a veterinarian and  lover of animals.</h1>
                        <p className="mb-5 para-width">Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Velit maiores officiis itaque ducimus enim dolorum similique laboriosam. A veniam,
                            tempora, tempore laboriosam aspernatur ducimus omnis.
                        </p>
                        <div className="d-flex">
                            <button type="button" className="btn  btn-warning fs-4 text-white mb-4">Click here</button>
                        </div>
                    </div>

                    {/* Video Section */}
                    <div className="col-12 col-md-4 p-4 p-md-5" data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1500">
                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe
                                className="w-100"
                                height="315"
                                src="https://www.youtube.com/embed/faJWRP_qwqk?si=MTLLN8oW4uvaXqYF"
                                title="YouTube video player"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Layout;
