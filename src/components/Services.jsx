import React from "react";
import Navbar from "./Navbar1";

const Services = () => {
    return (
        <div>
            <Navbar />
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
        </div>
    );
}
export default Services;