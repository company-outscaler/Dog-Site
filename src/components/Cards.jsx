import React from 'react';

const Cards = () => {
    return (
        <section className="hero-section-three bg-warning">
            <div className="container py-5">
                <div className="row p-5 text-white d-flex text-center" data-aos="fade-up"
                    data-aos-duration="2000">
                    <h1 className="bd">Title Here</h1>
                    <p className="fw-bold">
                        Instead of fully detailed illustrations, simplify dog toys like balls and bones into line art.<br />
                        These elements can be scattered along the lines, enhancing the playful theme.
                    </p>
                </div>

                <div className="row d-flex">
                    <div className="col-md-4 p-4" data-aos="fade-right"
                        data-aos-duration="2000">
                        <div className="card img-thumbnail" style={{}}>
                            <img
                                src="./img/close-up-veterinarian-taking-care-dog_23-2149100226.avif"
                                className="card-img-top img-fluid"
                                alt="Veterinarian caring for a dog"
                            />
                        </div>
                    </div>
                    <div className="col-md-4 p-4" data-aos="fade-up"
                        data-aos-duration="2000">
                        <div className="card img-thumbnail" style={{}}>
                            <img
                                src="./img/A dog putting their paw in a trainers hand_0.jpg"
                                className="card-img-top img-fluid"
                                alt="Dog and trainer interaction"
                            />
                        </div>
                    </div>
                    <div className="col-md-4 p-4" data-aos="fade-left"
                        data-aos-duration="2000">
                        <div className="card img-thumbnail" style={{}}>
                            <img
                                src="./img/close-veterinarian-taking-care-dog_23-2149100223.avif"
                                className="card-img-top img-fluid"
                                alt="Close-up of veterinarian taking care of a dog"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cards;
