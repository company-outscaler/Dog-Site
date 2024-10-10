import React from 'react';

const Blogs = () => {
    return (
        <div className="container px-5">
            <div className="col-md-12" data-aos="fade-right" data-aos-duration="2000">
                <h1 className="text-center fw-bold mb-5">Recent Posts</h1>

                <div className="row d-flex" style={{ marginTop: '5rem' }}>
                    <div className="col-md-8 d-flex align-items-stretch" data-aos="fade-right" data-aos-duration="2000">
                        <div className="bg-secondary-subtle p-3 h-100">
                            <img src="./img/playful-golden-retriever-closeup_999859-5353.avif" alt="" height="500vh" width="100%" />
                            <h1 style={{ color: 'navy' }}>How Long After a Dog Bite Can You Claim Injury?</h1>
                            <p className="p-2">
                                Most of the time, claimants ask how long after a dog bite you can claim injury. Different states have different procedures that decide on personal injury and dog bite claim insurance. Usually, you can claim a dog bite injury within two to five years, depending on the statute of limitations of your state. There are various other factors involved, so let’s .
                            </p>
                        </div>
                    </div>

                    <div className="col-md-4 d-flex align-items-stretch" data-aos="fade-left" data-aos-duration="2000">
                        <div className="bg-secondary-subtle p-3 h-100">
                            <img src="./img/veterinary-examining-dog-operating-room-with-medical-equipment-veterinary-clinic_1306868-3873.jpg" alt="" height="250vh" width="100%" />
                            <p>8 Aug 2024</p>
                            <h3 style={{ color: 'navy' }} className="fs-3">Regular checkups are essential for your dog's health.</h3>
                            <p className="p-3">
                                Puppies and senior dogs should see the vet more frequently, while adult dogs should have annual checkups. Ensure your dog is up-to-date with vaccinations to protect against diseases. Regular screenings and preventive dietary recommendations. Discuss any treatments for fleas, ticks, and worms, and any behavioral concerns. Routine dental exams and cleanings help prevent dental disease. The vet will monitor your dog's weight.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
