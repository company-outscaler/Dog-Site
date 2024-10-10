import React from 'react';

const testimonials = [
    {
        img: "./img/girlimages-1.jpg",
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        subtitle: "Lorem, ipsum dolor.",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit dolor sit amet consectetur adipisicing.",
        extraInfo: "Lorem, ipsum."

    },
    {
        img: "./img/gettyimages-159615215-1024x1024.jpg",
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        subtitle: "Lorem, ipsum dolor.",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit dolor sit amet consectetur adipisicing.",
        extraInfo: "Lorem, ipsum."
    },
    {
        img: "./img/gettyimages-925156722-1024x1024.jpg",
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        subtitle: "Lorem, ipsum dolor.",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit dolor sit amet consectetur adipisicing.",
        extraInfo: "Lorem, ipsum."
    }
];

const Testimonial = () => {
    return (
        <>
            <div className="container">
                <div className="row d-flex py-5 px-5">
                    {testimonials.map((item, index) => (
                        <div key={index} className="col-md-4" data-aos={index % 2 === 0 ? "fade-right" : "fade-left"} data-aos-duration="2000">
                            <div className="card" style={{ width: '21rem' }}>
                                <img src={item.img} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="fw-bold text-start">{item.title}</p>
                                    <p className="text-start text-info fw-bold">{item.subtitle}</p>
                                    <p className="text-start">{item.description}</p>
                                    <p className="text-start text-info fw-bold">{item.extraInfo}</p>
                                    <button
                                        className="btn btn-primary mt-2"
                                        onClick={() => alert(`${item.title} button clicked`)}
                                    >
                                        Read More
                                    </button>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Testimonial;
