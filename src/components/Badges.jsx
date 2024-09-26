import React from 'react'

const Badges = () => {
    return (
        <section className="contect-pera">
            <div className="container py-5">
                <div className="row p-5">
                    <h1 style={{ color: 'navy' }} className="text-center" data-aos="fade-up"
                        data-aos-duration="2000">
                        We Will Make Absolutely Any Place <br /> Any Clean, Neat & Tidy.
                    </h1>
                    <p className="text-center p-3 fw-bold text-success">Recent News</p>

                    <div className="row d-flex text-center">
                        <div className="col-md-4 px-4" >
                            <div className="card" style={{ width: '19rem', height: '400px' }}>
                                <img
                                    src="./img/medium-shot-people-cleaning-building_23-2150454559.jpg"
                                    style={{ width: '303px', height: '200px' }}
                                    className="card-img-top"
                                    alt="..."
                                />
                                <div className="card-body">
                                    <p style={{ color: 'navy' }} className="fs-6 text-start">
                                        <span className="fw-bold">Carpet Cleaning</span> / July 20, 2020
                                    </p>
                                    <h5 style={{ color: 'navy' }} className="fs-5 text-start">
                                        Spring cleaning Tips
                                    </h5>
                                    <div>
                                        <p className="text-start fw-bold py-4" style={{ color: 'navy' }}>
                                            Read More
                                            <span>
                                                <i className="fa-solid fa-plus ms-3"></i>
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 px-4">
                            <div className="card" style={{ width: '19rem', height: '400px' }}>
                                <img
                                    src="./img/homecleaning-solution_1037680-36739.avif"
                                    style={{ width: '303px', height: '200px' }}
                                    className="card-img-top"
                                    alt="..."
                                />
                                <div className="card-body">
                                    <p style={{ color: 'navy' }} className="fs-6 text-start">
                                        <span className="fw-bold">Carpet Cleaning</span> / July 20, 2020
                                    </p>
                                    <h5 style={{ color: 'navy' }} className="fs-5 text-start">
                                        Spring cleaning Tips
                                    </h5>
                                    <div>
                                        <p className="text-start fw-bold py-4" style={{ color: 'navy' }}>
                                            Read More
                                            <span>
                                                <i className="fa-solid fa-plus ms-3"></i>
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 px-4">
                            <div className="card" style={{ width: '19rem', height: '400px' }}>
                                <img
                                    src="./img/cleaning-services-hq-images-cleaning-equipment-floor-glass-carpet-cleaning_514619-1107.jpg"
                                    style={{ width: '303px', height: '200px' }}
                                    className="card-img-top"
                                    alt="..."
                                />
                                <div className="card-body">
                                    <p style={{ color: 'navy' }} className="fs-6 text-start">
                                        <span className="fw-bold">Carpet Cleaning</span> / July 20, 2020
                                    </p>
                                    <h5 style={{ color: 'navy' }} className="fs-5 text-start">
                                        Spring cleaning Tips
                                    </h5>
                                    <div>
                                        <p className="text-start fw-bold py-4" style={{ color: 'navy' }}>
                                            Read More
                                            <span>
                                                <i className="fa-solid fa-plus ms-3"></i>
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Badges