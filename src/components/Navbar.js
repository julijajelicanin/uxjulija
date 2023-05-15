import './Navbar.css'

export default function Navbar(){
        return(
            <div className='navbar'>
                <nav id='logo'>
                    <h2>Julija Jelicanin</h2>
                </nav>
                <div id='subnav'>
                    <div id='small-nav'>
                <nav>
                    <h3>Home</h3>
                </nav>
                <nav>
                    <h3>Work</h3>
                </nav>
                <nav>
                    <h3>About me</h3>
                </nav>
                <nav>
                    <h3>Contact</h3>
                </nav>
                </div>
                <nav>
                    <button>Schedule a call</button>
                </nav>
                </div>
            </div>
        )
}
