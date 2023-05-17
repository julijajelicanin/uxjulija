import './footer.css'
import instagram from '../assets/icons/skill-icons_instagram.svg'


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
                                        <i></i>
                                        <p>uxjulija@.gmailcom</p>
                                    </div>
                                    <div className='row'>
                                        <i></i>
                                        <p>julijajelicanin</p>
                                    </div>
                                    <div className='row'>
                                        <i></i>
                                        <p>uxjulija</p>
                                    </div>
                                </div>
                                <div className='col rightCol'>
                                    <div className='row'>
                                        <img className='iconPic' src={instagram} alt='instagram icon'></img>
                                        <p >uxjulija</p>
                                    </div>
                                    <div className='row'>
                                        <i></i>
                                        <p>julijajelicanin</p>
                                    </div>
                                    <div className='row'>
                                        <i></i>
                                        <p>julijajelicanin</p>
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