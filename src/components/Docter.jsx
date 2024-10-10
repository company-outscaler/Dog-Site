import React from 'react';

const items = [
    {
        img: "./img/attractive-female-doctor-headscarf-look-side-with-smiling-teeth-with-hands-pocket_8595-25964.jpg",
        heading: "Duilia Latin",
        para: "VEiXXfugiatYMP",
        fbicon: <i className="fa-brands fa-facebook fs-4 ms-4" style={{ color: '#f4c42f' }}></i>,
        instaicon: <i className="fa-brands fa-instagram fs-4 ms-4" style={{ color: '#f4c42f' }}></i>,
        youtubeicon: <i className="fa-brands fa-youtube fs-4 ms-4" style={{ color: '#f4c42f' }}></i>,
        callicon: <i className="fa-solid fa-phone fs-4 ms-4" style={{ color: '#f4c42f' }}></i>
    },
    {
        img: "./img/smiling-pretty-female-doctor-with-hands-pockets_1262-10611.jpg",
        heading: "Latin Angel",
        para: "ACiXXfugiatYMP",
        fbicon: <i className="fa-brands fa-facebook fs-4 ms-4" style={{ color: '#f4c42f' }}></i>,
        instaicon: <i className="fa-brands fa-instagram fs-4 ms-4" style={{ color: '#f4c42f' }}></i>,
        youtubeicon: <i className="fa-brands fa-youtube fs-4 ms-4" style={{ color: '#f4c42f' }}></i>,
        callicon: <i className="fa-solid fa-phone fs-4 ms-4" style={{ color: '#f4c42f' }}></i>
    },
    {
        img: "./img/veiled-female-doctor-white-uniform-smiling-while-making-phone-call_8595-25970.jpg",
        heading: "Latin Angel",
        para: "VEiXXfugiatYMPs",
        fbicon: <i className="fa-brands fa-facebook fs-4 ms-4" style={{ color: '#f4c42f' }}></i>,
        instaicon: <i className="fa-brands fa-instagram fs-4 ms-4" style={{ color: '#f4c42f' }}></i>,
        youtubeicon: <i className="fa-brands fa-youtube fs-4 ms-4" style={{ color: '#f4c42f' }}></i>,
        callicon: <i className="fa-solid fa-phone fs-4 ms-4" style={{ color: '#f4c42f' }}></i>
    }
];

const Docter = () => {
    return (
        <div className='container py-5'>
            <div className='row justify-content-center g-4'>
                {items.map((item, index) => (
                    <div key={index} className='col-12 col-md-6 col-lg-4' data-aos="flip-right"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <div className='card p-3 h-100'>
                            <div className='d-flex justify-content-center'>
                                <img src={item.img} className='img-fluid' alt="Doctor" />
                            </div>
                            <h2 className='text-center mt-3'>{item.heading}</h2>
                            <p className='text-center'>{item.para}</p>
                            <div className='d-flex justify-content-center'>
                                {item.fbicon}{item.instaicon}{item.youtubeicon}{item.callicon}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Docter;
