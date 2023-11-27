import './App.css';


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
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Reservations</a></li>
                    <li><a href="#">Order Online</a></li>
                    <li><a href="#">Login</a></li>
                </ul>
            </div>


        </nav>
    );
  }
  
  export default Nav;