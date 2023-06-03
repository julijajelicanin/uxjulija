import React from "react";
import './Hero.css'
import heroImage from'.././assets/hero-image.png';
import { useEffect } from 'react';
import { Link } from "react-router-dom";
import { PopupButton, PopupWidget} from "react-calendly"


function Hero() {
    // Popup Widget
    // const PopupComponent = () => {
    //     return (
    //       <div className="popup-widget">
    //         <PopupWidget
    //           url="https://calendly.com/uxjulija/kickoff-meeting" 
    //           rootElement={document.getElementById('root')}
    //           text="Schedule Time with me"
    //           textColor="#ffffff"
    //           color="#319795"
    //         />
    //       </div>
    //     );
    //   }
      const PopupComponent = () => {
        return (
          <div className="popup-button">
            <PopupButton className="button primary"
              url="https://calendly.com/uxjulija/kickoff-meeting" 
              rootElement={document.getElementById('root')}
              text="Schedule a call"
            />
          </div>
        );
      }
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
                    {/* <button className="button primary">Schedule a call</button> */}
                     <PopupComponent/>
                </div>
                <div className="col imageWrap">
                    <img className="heroImage" src={heroImage}></img>
                </div>
            </div>
        </section>

    );
  }
  
  export default Hero;