import './App.css';
import {Link} from 'react-router-dom';

function Nav() {
    return (
    <nav className="grid nav">
        <div className="span2"></div>
            <div className="span2" >
                <Link to="/" className="navbarlogo">
                <img src="Logo.svg" alt="logo" />
                </Link>
            </div>
            <div className="span6">
                <ul style={{display: 'flex', listStyleType: 'none'}}>
                    <li><Link to="/" className='navbarlink'>Home</Link></li>
                    <li><Link to="/reservations"  className='navbarlink'>Reservations</Link></li>
                    <li><Link to="/orderonline"  className='navbarlink'>Order Online</Link></li>
                    <li><Link to="/about"  className='navbarlink'>About</Link></li>
                    <li><Link to="/login"  className='navbarlink'>Login</Link></li>
                </ul>
            </div>


        </nav>
    );
  }
  
  export default Nav;