


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
                    <li style={{marginRight: '20px'}}><a href="#" style={{color: '#495E57', textDecoration: 'none'}}>Home</a></li>
                    <li style={{marginRight: '20px'}}><a href="#" style={{color: '#495E57', textDecoration: 'none'}}>About</a></li>
                    <li style={{marginRight: '20px'}}><a href="#" style={{color: '#495E57', textDecoration: 'none'}}>Menu</a></li>
                    <li style={{marginRight: '20px'}}><a href="#" style={{color: '#495E57', textDecoration: 'none'}}>Reservations</a></li>
                    <li style={{marginRight: '20px'}}><a href="#" style={{color: '#495E57', textDecoration: 'none'}}>Order Online</a></li>
                    <li style={{marginRight: '20px'}}><a href="#" style={{color: '#495E57', textDecoration: 'none'}}>Login</a></li>
                </ul>
            </div>


        </nav>
    );
  }
  
  export default Nav;