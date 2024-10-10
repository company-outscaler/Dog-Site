import React from 'react';

const Footer = () => {
    return (
        <section className="bg-dark p-5 action">
            <div className="row text-white">
                <div className="col-md-4 p-5 d-flex align-items-start justify-content-center overflow-hidden">
                    <div>
                        <h1 className="text-start">About</h1>

                        <div className='text-center'>
                            <p>Our program</p>
                            <p>Team work</p>
                            <p>Terminal condition</p>
                            <p>Brand service</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 p-5 d-flex align-items-start justify-content-center">
                    <div>
                        <h1 className="text-start">Services</h1>
                        <div className='text-center'>
                            <p>Our program</p>
                            <p>Team work</p>
                            <p>Terminal condition</p>
                            <p>Brand service</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 p-5">
                    <p className="fs-3 d-flex align-items-start justify-content-center">Title Here</p>
                    <p className='text-center'>Lorem ipsum dolor sit amet consectetur.</p>
                    <form action="/action_page.php">
                        <div className="d-flex">
                            <input
                                className="btn btn-warning text-white fw-bold"
                                type="text"
                                id="fname"
                                name="fname"
                                style={{
                                    borderTopRightRadius: '0',
                                    borderBottomRightRadius: '0',
                                }}
                            />
                            <br /><br />

                            <button
                                className="btn btn-info"
                                type="submit"
                                style={{
                                    width: '5rem',
                                    borderTopLeftRadius: '0',
                                    borderBottomLeftRadius: '0',
                                }}
                            >
                                <i className="fa-regular fa-paper-plane"></i>
                            </button>
                        </div>

                    </form>

                    <div className="mt-4 d-flex align-items-center justify-content-center">
                        <i className="fa-brands fa-facebook fs-4 ms-3"></i>
                        <i className="fa-brands fa-instagram fs-4 ms-3"></i>
                        <i className="fa-brands fa-youtube fs-4 ms-3"></i>
                        <i className="fa-solid fa-phone fs-4 ms-3"></i>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;
