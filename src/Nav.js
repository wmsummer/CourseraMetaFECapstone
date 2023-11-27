import './App.css';
import {Link} from 'react-router-dom';

function Nav() {
    return (
    //   <nav style={{backgroundColor: '#495E57'}}>
    <nav className="grid nav">
        <div className="span2"></div>
            <div className="span2" >
                <img src="Logo.svg" alt="logo" />
            </div>
            <div className="span6">
                <ul style={{display: 'flex', listStyleType: 'none'}}>
                    <li><Link to="/" style={{color: '#495E57', textDecoration: 'none'}}>Home</Link></li>
                    <li><Link to="/about" style={{color: '#495E57', textDecoration: 'none'}}>About</Link></li>
                    <li><Link to="/reservations" style={{color: '#495E57', textDecoration: 'none'}}>Reservations</Link></li>
                    <li><Link to="/orderonline" style={{color: '#495E57', textDecoration: 'none'}}>Order Online</Link></li>
                    <li><Link to="/login" style={{color: '#495E57', textDecoration: 'none'}}>Login</Link></li>
                </ul>
            </div>


        </nav>
    );
  }
  
  export default Nav;