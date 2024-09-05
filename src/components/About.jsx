import React from "react";
import Navbar from "./Navbar1";
 const About =() => {
    return (
        <div>
            <Navbar />
            <section id="about">
                <div className="container my-5 py-5">
                    <div className="row">
                        <div className="col-md-6">
                            <img src="/assests/about1.webp" alt="about" className="w-75 mt-5"/>
                        </div>
                        <div className="col-md-6">
                            <h3 className="fs-5 mb-0">About us</h3>
                            <h1 className="display-6 mb-2">Who <b>We</b> Are</h1>
                            <hr className="w-50"/>
                            <p className="lead mb-4">Life insurance is mainly protecting your family/beneficiary/nominee financially in the eventuality of the insured's demise. Health insurance is the protection cover for self as well as the family, in order to avoid any unfortunate eventuality such as loss of life due to financial constraints.
                            Health insurance is a type of insurance that covers medical expenses that arise due to an illness. These expenses could be related to hospitalisation costs, cost of medicines or doctor consultation fees.</p>
                           
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
 }
 export default About;