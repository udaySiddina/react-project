import React from "react";
import { NavLink } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";
import Navbar from "./Navbar";

const Home = () => {
    return (
        <div>
            <Navbar />
             <section id="home">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 mt-5">
                            <h1 className="display-4 fw-bolder mb-4 text-center">Welcome to Heath and Life Insurance System</h1>
                            
                            <div className="buttons d-flex justify-content-center">
                                
                            </div>
                        </div>
                    </div>
                </div>
             </section>
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
            <section id="service">
                <div className="container my-5 py-5">
                    <div className="row">
                        <div className="col-12">
                
                            <h1 className="display-6 text-center mb-4">Our Providers </h1>
                            <hr className="w-25 mx-auto" />
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-4">
                            <div class="card p-3" >
                                <div class="card-body text-center">
                                    <i className="fa fa-cogs fa-4x mb-4 text-primary"></i>
                                    <h5 class="card-title mb-3 fs-4 fw-bold">TataLifeInsurance</h5>
                                    <p class="card-text lead"><b>The trust of India </b></p>
                                    <a href="https://www.tataaia.com/">Click Me</a> 
                                    
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="card p-3" >
                                <div class="card-body text-center">
                                    <i className="fa fa-cogs fa-4x mb-4 text-primary"></i>
                                    <h5 class="card-title mb-3 fs-4 fw-bold">Bajajallianzlife</h5>
                                    <p class="card-text lead"><b>Life goals done</b></p>
                                    <a href="https://www.bajajallianzlife.com/sindia">Click Me</a> 
                                
                                </div>
                            </div>
                        </div>
                
                        <div className="col-md-4">
                            <div class="card p-3" >
                                <div class="card-body text-center">
                                    <i className="fa fa-cogs fa-4x mb-4 text-primary"></i>
                                    <h5 class="card-title mb-3 fs-4 fw-bold">LIC</h5>
                                    <p class="card-text lead"><b>Yogakshemam Vahamyaham</b></p>
                                    <a href="https://licindia.in/Home/buypoliciesonline">Click Me</a> 
                            
                                    
                                </div>
                            </div>
                        </div>
                        <br></br>
                        <div className="col-md-4">
                            <div class="card p-3" >
                                <div class="card-body text-center">
                                    <i className="fa fa-cogs fa-4x mb-4 text-primary"></i>
                                    <h5 class="card-title mb-3 fs-4 fw-bold">PolicyBazaar</h5>
                                    <p class="card-text lead"><b>Har Family hogi insured</b></p>
                                    <a href="https://www.policybazaar.com/life-insurance/term-insurance/">Click Me</a> 
                            
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div class="card p-3" >
                                <div class="card-body text-center">
                                    <i className="fa fa-cogs fa-4x mb-4 text-primary"></i>
                                    <h5 class="card-title mb-3 fs-4 fw-bold">iciciprulife</h5>
                                    <p class="card-text lead"><b>Prudential life insurance</b></p>
                                    <a href="https://www.iciciprulife.com/">Click Me</a> 
                        
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
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
export default Home;