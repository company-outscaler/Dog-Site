import React from 'react'
const Logos = () => {
    return (
        <div className="hero mb-5">
            <div className="row p-5">
                <div className="col-md-4 p-5 margin-top z-2" data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom">
                    <div className="text-center">
                        <i className="fa-regular fa-heart text-light text-center" style={{ fontSize: '90px' }}></i>
                    </div>

                    <div className="text-center mt-3">
                        <h1 className="text-white">+34739</h1>
                        <p className=" text-white material-icons">Happy Clients</p>
                    </div>
                </div>

                <div className="col-md-4 p-5 margin-top z-2" data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom">
                    <div className=" text-center">
                        <i className="fa-solid fa-stethoscope text-light" style={{ fontSize: '90px' }}></i>
                    </div>

                    <div className="text-center mt-3">
                        <h1 className="text-white">+45382</h1>
                        <p className=" text-white">Departments</p>
                    </div>
                </div>

                <div className="col-md-4 p-5 margin-top z-2" data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom">
                    <div className=" text-center">
                        <i className="fa-solid fa-syringe text-light" style={{ fontSize: '90px' }}></i>
                    </div>

                    <div className="text-center mt-3">
                        <h1 className="text-white">+54762</h1>
                        <p className=" text-white">Vaccinations</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Logos;
