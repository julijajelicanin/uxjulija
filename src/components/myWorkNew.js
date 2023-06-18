import './myWorkNew.css'
import React, { Component } from 'react'
import imageOne from '../assets/work7.png'
import imageTwo from '../assets/work6.png'
import imageThree from '../assets/work4.png'
import imageFour from '../assets/work5.png'
import imageFive from '../assets/work1.png'
import imageSix from '../assets/work2.png'
import imageSeven from '../assets/work3.png'
import imageEight from '../assets/work9.png'
import imageNine from '../assets/worksection1.png'
import imageTen from '../assets/worksection6.png'
import imageEleven from '../assets/ws1.png'
import imageTwelve from '../assets/ws2.png'
import imageThirteen from '../assets/worksection4.jpg'
import imageFourteen from '../assets/worksection5.jpg'


class SeeWork extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
          showMoreWorkDiv: false,
        };
    }
    handleButtonClick = () => {
        this.setState(prevState => ({
          showMoreWorkDiv: !prevState.showMoreWorkDiv,
        }));
    };
    render(){
        const { showMoreWorkDiv } = this.state;
        return(
            <section className='workSection'>
                    <div className='container workContainer'>
                        <div className='container textWrap'>
                            <h1 className='headingText'>See My Work</h1>
                        </div>
                        <div className='container colsWrap'>
                            <div className='col left'>
                                {/* <img className='pic imageOne' src={imageOne}></img>
                                <img className='pic imageThree' src={imageThree}></img>
                                <img className='pic imageFive' src={imageFive}></img>
                                <img className='pic imageSeven' src={imageSeven}></img> */}

                                <img className='pic imageNine' src={imageNine}></img>
                                <img className='pic imageTwo' src={imageTwo}></img>
                                <img className='pic imageEleven' src={imageEleven}></img>
                                <img className='pic imageTwelve' src={imageTwelve}></img>
                            </div>
                            <div className='col right'>
                            {/* <img className='pic imageTwo' src={imageTwo}></img>
                            <img className='pic imageFour' src={imageFour}></img>
                            <img className='pic imageSix' src={imageSix}></img>
                            <img className='pic imageEinght' src={imageEight}></img> */}

                            <img className='pic imageTen' src={imageTen}></img>
                            <img className='pic imageFour' src={imageFour}></img>
                            <img className='pic imageFourteen' src={imageFourteen}></img>
                            <img className='pic imageThirteen' src={imageThirteen}></img>
                            </div>
                        </div>
                        
                        {showMoreWorkDiv && (<div className='container colsWrap seeWork'>
                            <div className='col left'>
                                    {/* <img className='pic imageNine' src={imageNine}></img>
                                    <img className='pic imageEleven' src={imageEleven}></img>
                                    <img className='pic imageThirteen' src={imageThirteen}></img>   
                                    
                                    */}
                                    <img className='pic imageThree' src={imageThree}></img>
                                    <img className='pic imageSix' src={imageSix}></img>
                                    <img className='pic imageEinght' src={imageEight}></img> 
                            </div>
                            <div className='col right'>
                                {/* <img className='pic imageTen' src={imageTen}></img>
                                <img className='pic imageTwelve' src={imageTwelve}></img>
                                <img className='pic imageFourteen' src={imageFourteen}></img> */}

                                <img className='pic imageSeven' src={imageSeven}></img>
                                <img className='pic imageOne' src={imageOne}></img>
                                <img className='pic imageFive' src={imageFive}></img>
                            </div>
                        </div>)}
                        <div className='container buttonWrap'>
                            <button onClick={this.handleButtonClick} className='button secondary'>{showMoreWorkDiv ? 'Hide Items' : 'See More'}</button>
                        </div>
                    </div>
            </section>
        );
    }
}
export default SeeWork;