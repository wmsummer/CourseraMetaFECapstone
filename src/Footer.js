
function Footer() {
  return (
    <footer className="grid" style={{marginTop: '30px', marginBottom: '10px'}}>
        <div className="span2"></div>
        <div className="span2" >
            <img src="FooterLogo.png" alt="logo" style={{height: '75px'}}/>
        </div>
        <div className="span2">
            <p className="footerLinks">Home</p>
            <p className="footerLinks">About</p>
            <p className="footerLinks">Reservations</p>
            <p className="footerLinks">Order Online</p>
        </div>
        <div className="span2">
            <p className="footerLinks">Phone: 123-456-7890</p>
            <p className="footerLinks">Email: info@littlelemon.com</p>
            <p className="footerLinks">Address: 1234 Main St, Chicago, IL 60601</p>
            </div>
        <div className="span2">
            <p className="footerLinks">Facebook</p>
            <p className="footerLinks">Twitter (X)</p>
            <p className="footerLinks">Instagram</p>

            </div>
        
    </footer>
  );
}

export default Footer;