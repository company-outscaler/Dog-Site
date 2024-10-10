import React from 'react';

const newsItems = [
    {
        img: "./img/medium-shot-people-cleaning-building_23-2150454559.jpg",
        category: "Carpet Cleaning",
        date: "July 20, 2020",
        title: "Spring cleaning Tips",
        readMoreLink: "#"
    },
    {
        img: "./img/homecleaning-solution_1037680-36739.avif",
        category: "Carpet Cleaning",
        date: "July 20, 2020",
        title: "Spring cleaning Tips",
        readMoreLink: "#"
    },
    {
        img: "./img/cleaning-services-hq-images-cleaning-equipment-floor-glass-carpet-cleaning_514619-1107.jpg",
        category: "Carpet Cleaning",
        date: "July 20, 2020",
        title: "Spring cleaning Tips",
        readMoreLink: "#"
    }
];

const Badges = () => {
    return (
        <section className="contect-pera flip-card-front">
            <div className="container py-5">
                <div className="row p-5">
                    <h1 style={{ color: 'navy' }} className="text-center">
                        We Will Make Absolutely Any Place <br /> Any Clean, Neat & Tidy.
                    </h1>
                    <p className="text-center p-3 fw-bold text-success" data-aos="fade-up" data-aos-delay="200" data-aos-duration="2000">
                        Recent News
                    </p>

                    <div className="row d-flex text-center  flip-card-front ">
                        {newsItems.map((item, index) => (
                            <div key={index} className="col-md-4 px-4">
                                <div className="card" style={{ width: '19rem', height: '400px', borderRadius: '15px', overflow: 'hidden' }}>
                                    <img
                                        src={item.img}
                                        style={{ width: '100%', height: '200px', objectFit: 'cover', borderTopLeftRadius: '15px', borderTopRightRadius: '15px' }}
                                        className="card-img-top"
                                        alt={item.title}
                                    />
                                    <div className="card-body bg-warning">
                                        <p style={{ color: 'navy' }} className="fs-6 text-start">
                                            <span className="fw-bold">{item.category}</span> / {item.date}
                                        </p>
                                        <h5 style={{ color: 'navy' }} className="fs-5 text-start">
                                            {item.title}
                                        </h5>
                                        <div>
                                            <p className="text-start fw-bold py-4" style={{ color: 'navy' }}>
                                                <a href={item.readMoreLink} style={{ textDecoration: 'none', color: 'navy' }}>
                                                    Read More
                                                </a>
                                                <span>
                                                    <i className="fa-solid fa-plus ms-3"></i>
                                                </span>
                                                <div class="like-wrapper">
                                                    <input class="check" type="checkbox" id="like-toggle" />
                                                    <label class="container" for="like-toggle">
                                                        <svg
                                                            viewBox="0 0 512 512"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            class="icon inactive"
                                                        >
                                                            <path
                                                                d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"
                                                            ></path>
                                                        </svg>
                                                        <svg
                                                            viewBox="0 0 512 512"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            class="icon active"
                                                        >
                                                            <path
                                                                d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"
                                                            ></path>
                                                        </svg>
                                                        <div class="checkmark"></div>
                                                        <span class="like-text">Like</span>
                                                    </label>
                                                </div>


                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Badges;
