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
                                <img className='pic imageOne' src={imageOne}></img>
                                <img className='pic imageThree' src={imageThree}></img>
                                <img className='pic imageFive' src={imageFive}></img>
                                <img className='pic imageSeven' src={imageSeven}></img>
                            </div>
                            <div className='col right'>
                            <img className='pic imageTwo' src={imageTwo}></img>
                            <img className='pic imageFour' src={imageFour}></img>
                            <img className='pic imageSix' src={imageSix}></img>
                            <img className='pic imageEinght' src={imageEight}></img>
                            </div>
                        </div>
                        
                        {showMoreWorkDiv && (<div className='container colsWrap seeWork'>
                            <div className='col left'>
                                    <img className='pic imageOne' src={imageOne}></img>
                                    <img className='pic imageThree' src={imageThree}></img>
                                    <img className='pic imageFive' src={imageFive}></img>
                                    <img className='pic imageSeven' src={imageSeven}></img>
                            </div>
                            <div className='col right'>
                                <img className='pic imageTwo' src={imageTwo}></img>
                                <img className='pic imageFour' src={imageFour}></img>
                                <img className='pic imageSix' src={imageSix}></img>
                                <img className='pic imageEinght' src={imageEight}></img>
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