import React, { useState } from 'react';
import { collection, addDoc } from "firebase/firestore";
import { db } from "../config/firebase";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleCreateUser = async (e) => {
        e.preventDefault();
        try {
            // Add form data to Firebase "Users" collection
            await addDoc(collection(db, "Users"), {
                name: formData.name,
                email: formData.email,
                password: formData.password
            });
            alert("User added successfully!");

            // Clear form after successful submission
            setFormData({
                name: '',
                email: '',
                password: ''
            });
        } catch (error) {
            console.error("Error adding user: ", error);
        }
    };

    return (
        <section>
            <div className="container">
                <div className="col-md-12">
                    <div className="row py-5">
                        <div className="col-md-5">
                            <img className='mt-5' src="./img/serious-woman-talking-mobile-phone-outdoor-cafe_1262-19033.jpg" alt=""
                                width="430" height="390" />
                        </div>
                        <div className="col-md-7">
                            <div className="col-md-12 py-4">
                                <h1>Quick Contact</h1>
                            </div>
                            <form onSubmit={handleCreateUser}>
                                <div className="mb-3">
                                    <label htmlFor="nameInput" className="form-label">Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="nameInput"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="emailInput" className="form-label">Email address</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="emailInput"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="passwordInput" className="form-label">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="passwordInput"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                                </div>
                                <button type="submit" className="btn btn-danger">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactForm;
