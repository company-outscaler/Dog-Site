import React from 'react';

const Layout = () => {
    return (
        <section className="hero-section-two">
            <div className="container p-5">
                <div className="row">
                    <div className="col-md-8 d-flex flex-column justify-content-start p-5">
                        <h1 className="fw-bolder text-start">As a veterinarian and <br /> lover of animals.</h1>
                        <p className="mb-5 para-width">Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Velit maiores officiis<br /> itaque ducimus enim dolorum similique laboriosam. A veniam,
                            tempora, <br />tempore laboriosam aspernatur ducimus omnis.
                        </p>
                        <div className="d-flex">
                            <button type="button" className="btn btn-warning fs-4 text-white mb-md-4">Click here</button>
                        </div>
                    </div>

                    <div className="col-md-4 p-5">
                        <div className="embed-responsive embed-responsive">
                            <iframe
                                width="350"
                                height="330"
                                src="https://www.youtube.com/embed/faJWRP_qwqk?si=MTLLN8oW4uvaXqYF"
                                title="YouTube video player"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Layout;
