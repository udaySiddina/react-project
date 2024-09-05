import React from "react";
import Navbar from "./Navbar1";

const Contact = () => {
    return (
        <div>
            <Navbar />
            <section id="Feedback">
                <div className="container my-5 py-5">
                    <div className="row mb-5">
                        <div className="col-12">
                            <h3 className="fs-5 text-center mb-0">FEEDBACK</h3>
                            <h1 className="display-6 text-center mb-4">Health and Life Insurance</h1>
                            <hr className="w-25 mx-auto" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <img src="/assests/contact1.webp" alt="contact" className="w-75" />
                        </div>
                        <div className="col-md-6">
                            <form action="">
                            <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Your Name</label>
                                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Name " />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email" />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label">Enter your feedback</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                                
                                <button type="submit" className="btn btn-outline-primary rounded-pill px-4">Submit Feedback <i className="fa fa-paper-plane ms-2 "></i></button>
               
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default Contact;