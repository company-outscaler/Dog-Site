import React, { useState } from 'react';

const TestimonlDropdowns = () => {
    // State to control visibility of the testimonial cards
    const [isVisible, setIsVisible] = useState(false);

    // Toggle function to show/hide the cards
    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <>
            <section className="py-5 bg-light">
                <div className="container py-5">
                    <header className="text-center mb-5">
                        <div className="row">
                            <div className="col-md-12 mx-auto">
                                <h2 className="text-uppercase fw-bold">What <span className="text-warning">our clients </span>say</h2>
                                <p className="text-muted">Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.</p>
                            </div>
                        </div>
                    </header>

                    {/* Button to toggle visibility of the cards */}
                    <div className="text-center mb-4">
                        <button
                            className="btn btn-primary"
                            onClick={toggleVisibility}
                        >
                            {isVisible ? 'Hide Testimonials' : 'Show Testimonials'}
                        </button>
                    </div>

                    {/* Show testimonials based on the `isVisible` state */}
                    {isVisible && (
                        <div>
                            <div className="swiper testimonials-slider swiper-initialized swiper-horizontal swiper-pointer-events">
                                <div className="swiper-wrapper d-flex justify-content-center" style={{ transform: "translate3d(0px, 0px, 0px)" }}>
                                    <div className="swiper-slide mb-5 swiper-slide-active" role="group" aria-label="1 / 4" style={{ width: "629px", marginRight: "30px" }}>
                                        <div className="card">
                                            <div className="card-body p-4 p-lg-5">
                                                <div className="row">
                                                    <div className="col-lg-10">
                                                        <div className="d-flex">
                                                            <div className="flex-grow-1" style={{ minWidth: "60px" }}>
                                                                <img className="w-100" src="./img/testimonial-1.077294a1 (1).jpg" alt="..." />
                                                            </div>
                                                            <div className="ms-3 flex-grow-1">
                                                                <h3 className="h5">Outstanding quality</h3>
                                                                <ul className="list-inline small mb-4">
                                                                    <li className="list-inline-item m-0"><i className="fas fa-star text-warning"></i></li>
                                                                    <li className="list-inline-item m-0"><i className="fas fa-star text-warning"></i></li>
                                                                    <li className="list-inline-item m-0"><i className="fas fa-star text-warning"></i></li>
                                                                    <li className="list-inline-item m-0"><i className="fas fa-star text-warning"></i></li>
                                                                    <li className="list-inline-item m-0"><i className="fas fa-star text-warning"></i></li>
                                                                </ul>
                                                                <p className="text-sm text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
                                                                <h6 className="mb-0">- Jacklyn Fernandez</h6>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-2 d-none d-lg-block text-end">
                                                        <i className="fas fa-quote-right fa-2x text-primary"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Add more slides similarly */}
                                </div>

                                <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal swiper-pagination-bullets-dynamic"
                                    style={{ width: "80px" }}>
                                    <span className="swiper-pagination-bullet swiper-pagination-bullet-active swiper-pagination-bullet-active-main"
                                        tabIndex="0" role="button" aria-label="Go to slide 1" style={{ left: "16px" }}></span>
                                    <span className="swiper-pagination-bullet swiper-pagination-bullet-active-next"
                                        tabIndex="0" role="button" aria-label="Go to slide 2" style={{ left: "16px" }}></span>
                                    <span className="swiper-pagination-bullet swiper-pagination-bullet-active-next-next"
                                        tabIndex="0" role="button" aria-label="Go to slide 3" style={{ left: "16px" }}></span>
                                </div>
                                <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}

export default TestimonlDropdowns;
