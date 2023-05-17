import './footer.css'
import instagram from '../assets/icons/instagram.svg'
import behance from '../assets/icons/behance.svg'
import dribbble from '../assets/icons/dribbble.svg'
import linkedin from '../assets/icons/linkedin.svg'
import gmail from '../assets/icons/gmail.svg'
import github from '../assets/icons/github.svg'


function Footer() {
    return (
        <section className="siteFooter ">
            <div className="container footerContainer">
                <div className='container textWrap'>
                        <h1 className='headingText'>Contact Me</h1>
                </div>
                        <div className='container colsWrap'>
                            <div className='mainCol left'>
                                <h3 className='footerText'>Together we can take <br/>your ideas to next level</h3>
                            </div>
                            <div className='mainCol right'>
                                <div className='col leftCol'>
                                    <div className='row'>
                                        <img className='iconPic' src={gmail} alt='gmail icon'></img>
                                        <p className='textRow'>uxjulija@.gmailcom</p>
                                    </div>
                                    <div className='row'>
                                        <img className='iconPic' src={linkedin} alt='linkedin icon'></img>
                                        <p className='textRow'>julijajelicanin</p>
                                    </div>
                                    <div className='row'>
                                        <img className='iconPic' src={dribbble} alt='dribbble icon'></img>
                                        <p className='textRow'>uxjulija</p>
                                    </div>
                                </div>
                                <div className='col rightCol'>
                                    <div className='row'>
                                        <img className='iconPic' src={instagram} alt='instagram icon'></img>
                                        <p className='textRow'>uxjulija</p>
                                    </div>
                                    <div className='row'>
                                        <img className='iconPic' src={behance} alt='behance icon'></img>
                                        <p className='textRow'>julijajelicanin</p>
                                    </div>
                                    <div className='row'>
                                        <img className='iconPic' src={github} alt='github icon'></img>
                                        <p className='textRow'>julijajelicanin</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                <div className='container copyRightWrap'>
                        <p className='copyRight'>Copyright © Julija Jelicanin | All Rights Reserved</p>
                </div>
            </div>
        </section>

    );
  }
  
  export default Footer;