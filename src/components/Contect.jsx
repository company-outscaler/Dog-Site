import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contect = () => {

    return (
        <section>
            <div className='col-md-12'>
                <h1 className='text-center'>Quick Contact</h1>
            </div>
            <div class="container">
                <div class="col-md-12">
                    <div class="row py-5" data-aos="fade-left"
                        data-aos-duration="3000">
                        <div class="col-md-5">
                            <img src="./img/serious-woman-talking-mobile-phone-outdoor-cafe_1262-19033.jpg" alt=""
                                width="500" height="350px" />
                        </div>

                        <div class="col-md-7">
                            <div class="col-md-12">
                            </div>
                            <form>
                                <div class="mb-3">
                                    <label for="nameInput" class="form-label">Name</label>
                                    <input type="text" class="form-control" id="nameInput" aria-describedby="nameHelp" />
                                </div>
                                <div class="mb-3">
                                    <label for="emailInput" class="form-label">Email address</label>
                                    <input type="email" class="form-control" id="emailInput" aria-describedby="emailHelp" />
                                </div>
                                <div class="mb-3">
                                    <label for="passwordInput" class="form-label">Password</label>
                                    <input type="password" class="form-control" id="passwordInput" />
                                </div>
                                <div class="mb-3 form-check">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                                </div>
                                <button type="submit" class="btn btn-danger">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Contect