import React from "react";
import './Hero.css'
import heroImage from'.././assets/hero-image.png';

function Hero() {
    return (
        <section className="heroSection bgGradient">
            <div className="container heroContainer">
                <div className="col textWrap">
                    <h1 className="headingTxt">UX & UI Designer</h1>
                    <p className="subTxt">
                        I'm Julija, a UX Designer specialised in creating engaging and
                        user-friendly digital experiences for websites, mobile 
                        applications, B2B and SaaS digital products.
                    </p>
                    <button className="button primary">Schedule a call</button>
                    
                </div>
                <div className="col imageWrap">
                    <img className="heroImage" src={heroImage}></img>
                </div>
            </div>
        </section>

    );
  }
  
  export default Hero;