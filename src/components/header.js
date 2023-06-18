import React, { Component } from 'react'
import './header.css'
import { PopupButton, PopupWidget} from "react-calendly"

class Header extends Component {
    
    state={open:false}
    handleClick=()=>{
        this.setState({open:!this.state.open})

    }

    PopupComponent = () => {
        return (
          <div className="popup-button">
            <PopupButton className="button primary headerButton"
              url="https://calendly.com/uxjulija/kickoff-meeting" 
              rootElement={document.getElementById('root')}
              text="Schedule a call"
            />
          </div>
        );
      };

    //making custom onScroll event
    constructor(props) {
        super(props);
    
        this.state = {
          scrolledPast150: false,
        };
      }
    // changeBackground=()=>{
    //     console.log(window.scrollY);
    // }
    // componentDidMount() {
    //     window.addEventListener('scroll', this.changeBackground, true);
    // }
    // componentWillUnmount() {
    //     window.removeEventListener('scroll', this.handleScroll);
    //   }
    handleScroll = () => {
        const { scrolledPast150 } = this.state;
    
        if (!scrolledPast150 && window.scrollY > 150) {
          this.setState({ scrolledPast150: true });
        } else if (scrolledPast150 && window.scrollY <= 150) {
          this.setState({ scrolledPast150: false });
        }
      };
    
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

//////making on scroll for header

    handleScrollHeader = (event, scrollValue) => {
        event.preventDefault();
        window.scrollTo({
        top: scrollValue,
        behavior: 'smooth',
        });
    };
    render() {
        const { scrolledPast150 } = this.state;

        const navbarBackgroundChange = {
            // backgroundColor: scrolledPast150 ? '#FFE7FB' : 'transparent',
            // backgrounColor: 'transparent'
            // filter: 'blur(60%)'
        };
        return (

            <header className={scrolledPast150 ? 'siteHeader active' : 'siteHeader'}>
                {/* <header className="siteHeader" style={navbarBackgroundChange}> */}
                <section className="container headerContainer">
                    <a href="#" className="headerLogo" onClick={(event) => this.handleScrollHeader(event, 0)}>Julija Jelicanin</a>
                        <nav className={this.state.open ? 'headerNav open' : 'headerNav'}>
                            <a href="#" className="navLink" onClick={(event) => this.handleScrollHeader(event, 0)}>Home</a>
                            <a href="#" className="navLink" onClick={(event) => this.handleScrollHeader(event, 760)}>Work</a>
                            {/* <a className="navLink">About me</a> */}
                            <a href="#" className="navLink" onClick={(event) => this.handleScrollHeader(event, 4000)}>Contact</a>
                            {/* <button className="button primary">Schedule a call</button> */}
                            <this.PopupComponent/>
                        </nav>
                        <div className='mobileToggle open' onClick={this.handleClick} >
                            <i id='bar' className={this.state.open ? 'fas fa-times' : 'fas fa-bars'}></i>
                            {/* <i id='bar' className='fas fa-bars'></i> */}
                        </div>
                </section>
            </header>
    
        );
    }
  }
  
  export default Header;

