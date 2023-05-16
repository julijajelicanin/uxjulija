import React, { Component } from 'react'
import './header.css'

class Header extends Component {
    state={open:false}
    handleClick=()=>{
        this.setState({open:!this.state.open})
    }
    render() {
        return (
            
            <header className="siteHeader">
                <section className="container headerContainer">
                    <a className="headerLogo">Julija Jelicanin</a>
                        <nav className={this.state.open ? 'headerNav open' : 'headerNav'}>
                            <a className="navLink">Home</a>
                            <a className="navLink">Work</a>
                            <a className="navLink">About me</a>
                            <a className="navLink">Contact</a>
                            <button className="button primary">Schedule a call</button>
                        </nav>
                        <div class='mobileToggle open' onClick={this.handleClick}>
                            <i id='bar' className={this.state.open ? 'fas fa-times' : 'fas fa-bars'}></i>
                            {/* <i id='bar' className='fas fa-bars'></i> */}
                        </div>
                </section>
            </header>
    
        );
    }
  }
  
  export default Header;

