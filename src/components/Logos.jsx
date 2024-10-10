import React from 'react';

const logoItems = [
    {
        icon: "fa-regular fa-heart",
        number: "+34739",
        text: "Happy Clients"
    },
    {
        icon: "fa-solid fa-stethoscope",
        number: "+45382",
        text: "Departments"
    },
    {
        icon: "fa-solid fa-syringe",
        number: "+54762",
        text: "Vaccinations"
    }
];

const Logos = () => {
    return (
        <div className="hero mb-5">
            <div className="row p-5">
                {logoItems.map((item, index) => (
                    <div key={index} className="col-md-4 p-5 margin-top z-2" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                        <div className="text-center">
                            <i className={`${item.icon} text-light`} style={{ fontSize: '90px' }}></i>
                        </div>

                        <div className="text-center mt-3">
                            <h1 className="text-white">{item.number}</h1>
                            <p className="text-white">{item.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Logos;
