import React from 'react';

const Blogs = () => {
    return (
        <div className="container px-5">
            <div className="col-md-12">
                <h1 className="text-center fw-bold mb-5">Recent Posts</h1>

                <div className="row" mt-5>
                    <div className="col-md-8">
                        <div className="bg-secondary-subtle p-3 ">
                            <img src="./img/playful-golden-retriever-closeup_999859-5353.avif" alt="" height="500vh" width="100%" />
                            <h1 style={{ color: 'navy' }}>How Long After a Dog Bite Can You Claim Injury?</h1>
                            <p className=" p-2">
                                Most of the time, claimants ask how long after a dog bite you can claim injury. Different states have different procedures that decide on personal injury and dog bite claim insurance. Usually, you can claim a dog bite injury within two to five years, depending on the statute of limitations of your state. There are various other factors involved, so let’s discuss them briefly.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-4 ">
                        <div className="bg-secondary-subtle p-3 text-center">
                            <img src="./img/veterinary-examining-dog-operating-room-with-medical-equipment-veterinary-clinic_1306868-3873.jpg" alt="" height="250vh" width="100%" />
                            <p>8 Aug 2024</p>
                            <h3 style={{ color: 'navy' }} className="fs-3">Regular checkups are essential for your dog's health.</h3>
                            <p class="p-3">Puppies and senior dogs should see the vet more frequently, while adult  dogs should have
                                annual checkups. Ensure your dog is up-to-date with vaccinations to protect against
                                diseases. Regular screenings and preventive dietary recommendations. Discuss any
                                treatments for fleas, ticks, and worms any behavioralconcer annual checkups are
                                vital.Routine dental exams and cleanings help prevent dental disease.The vet will
                                monitor your dog's weight Discuss anybehavioral monitor your dog's


                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row d-flex py-5 px-5">
                <div className="col-md-4">
                    <div className="card" style={{ width: '21rem' }}>
                        <img src="./img/girlimages-1.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="fw-bold text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <p className="text-start text-info fw-bold">Lorem, ipsum dolor.</p>
                            <p className="text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit dolor sit amet consectetur adipisicing.</p>
                            <p className="text-start text-info fw-bold">Lorem, ipsum.</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card" style={{ width: '21rem' }}>
                        <img src="./img/gettyimages-159615215-1024x1024.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="fw-bold text-start">1Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <p className="text-start text-info fw-bold">Lorem, ipsum dolor.</p>
                            <p className="text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit dolor sit amet consectetur adipisicing.</p>
                            <p className="text-start text-info fw-bold">Lorem, ipsum.</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card" style={{ width: '21rem' }}>
                        <img src="./img/gettyimages-925156722-1024x1024.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="fw-bold text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <p className="text-start text-info fw-bold">Lorem, ipsum dolor.</p>
                            <p className="text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit dolor sit amet consectetur adipisicing.</p>
                            <p className="text-start text-info fw-bold">Lorem, ipsum.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
