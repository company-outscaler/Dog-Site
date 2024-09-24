import React from 'react'

const ContactForm = () => {
    return (
        <section>
            <div className="container">
                <div className="col-md-12">
                    <div className="row py-5">
                        <div className="col-md-5">
                            <img src="./img/serious-woman-talking-mobile-phone-outdoor-cafe_1262-19033.jpg" alt=""
                                width="430" height="390" />
                        </div>
                        <div className="col-md-7">
                            <div className="col-md-12 py-4">
                                <h1>Quick Contact</h1>
                            </div>
                            <form>
                                <div className="mb-3">
                                    <label for="nameInput" className="form-label">Name</label>
                                    <input type="text" className="form-control" id="nameInput" aria-describedby="nameHelp" />
                                </div>
                                <div className="mb-3">
                                    <label for="emailInput" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="emailInput" aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-3">
                                    <label for="passwordInput" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="passwordInput" />
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                                </div>
                                <button type="submit" className="btn btn-danger">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default ContactForm