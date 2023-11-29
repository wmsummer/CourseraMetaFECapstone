function About() {
    return (
        <>
        <div className="grid" style={{backgroundColor: '#495E57'}}>
                <div className="span2"></div>
                <div className="span3" style={{ marginBottom:"10px"}} >
                    <h1>About Us</h1>
                    <p style={{marginTop: "10px", padding: "0px", color:"white"}}>
                        Chef Mario and Chef Adrian have been cooking together since they met in culinary school. After graduation, 
                        they both traveled to Greece to learn the secrets of Greek cooking. After returning to Chicago, they decided to take 
                        what they learned and open a restaurant. Little Lemon is the result of their hard work and dedication to their craft.
                    </p>
                    
                </div>
                <div className="span2" style={{ marginBottom:"10px"}} ></div>
                <div className="span4" style={{alignContent: 'center', textAlign: 'center', marginBottom:"10px"}} >
                    <img src='Mario and Adrian A.jpg' alt='Mario and Adrian A'
                    style={{height: '40vh', position:"relative", top:"30px", right:"200px"}}></img>
                    <img src='Mario and Adrian B.jpg' alt='Mario and Adrian B'
                    style={{height: '40vh', position:"relative", bottom:"90px", right:"140px"}}
                     ></img>
                </div>

            </div>

        </>
    );
  }
  
  export default About;