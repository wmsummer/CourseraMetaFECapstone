import {Link} from 'react-router-dom';

function Testimonials() {
    return (
        <div> 
        <div className="grid" style={{paddingTop: '10px'}}></div>
            <div className="grid">
                <div className="span12" style={{alignContent: 'center', textAlign: 'center', marginBottom:"10px"}} >
                    <h1 style={{margin: "0px", padding: "0px", color:"#495E57"}}>Testimonials</h1>
                </div>

            </div>
            <div className="grid" style={{margin: '30px'}}>
            <div className="span2"></div>
            <TestimonialCard img="reviewer1.png" alt="Testimonial1" reviewerName="Sara D" rating="****" reviewText='"I love this place!"'/>
            <TestimonialCard img="reviewer2.png" alt="Testimonial2" reviewerName="Tim S" rating="*****" reviewText='"Best Greek food in Chicago!!"'/>
            <TestimonialCard img="reviewer3.png" alt="Testimonial3" reviewerName="Olivia G" rating="****" reviewText='"The Baklava is to die for."'/>
            <TestimonialCard img="reviewer4.png" alt="Testimonial4" reviewerName="Kerin P" rating="****" reviewText='"Hands down the best Greek Salad I have ever had"'/>
            </div>
        </div>
    );
    }

function AboutUs() {
    return (
        <>
        <div className="grid" style={{paddingTop: '60px'}}></div>
            <div className="grid">
                <div className="span2"></div>
                <div className="span3" style={{ marginBottom:"10px"}} >
                    <h1 style={{margin: "0px", padding: "0px", color:"#495E57"}}>About Us</h1>
                    <p style={{marginTop: "10px", padding: "0px", color:"black"}}>
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

function Specials() {
    return (
        <>
        <div className="grid" style={{paddingTop: '60px'}}>
            <div className="span2"></div>
            <div className="span4" style={{marginBottom:"10px"}} >
                <h1 style={{margin: "0px", padding: "0px", color:"#495E57"}}>Specials</h1>
            </div>
            <div className="span2">
            </div>
            <div className="span2">
                <Link to="/reservations" style={{backgroundColor: '#F4CE14', color: 'black', border: 'none', padding: '10px', borderRadius: '5px'}}>
                    Online Menu
                </Link>

            </div>
        </div>
        <div className="grid" style={{margin: '30px'}}>
            <div className="span2"></div>
            <SpecialCard img="Greek Salad.jpg" alt="Special1" title="Greek Salad" 
                description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with garlic and rosemary croutons." 
                price="$9.99"/>
            <SpecialCard img="bruchetta.svg" alt="Special2" title="Bruchetta" 
                description="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
                price="$5.99"/>
            <SpecialCard img="Lemon Dessert.jpg" alt="Special3" title="Lemon Dessert" 
                description="This comes straight from grandma's recipe book. Every last ingredient has been sourced and is authentic as can be imagined."
                price="$5.00"/>
            <div className="span2"></div>
        </div>
        </> 
    );
  }

function SpecialCard(props) {
    return (
        <div className="span2" style={{marginBottom:"10px"}} >
            <img src={props.img} alt={props.alt} style={{width: '200px', height: '125px', borderRadius:"15px", top:"30px"}}/>
            <div className="grid">
                <div className="span8">
                    <h3 style={{ padding: "0px", color:"black"}}>{props.title}</h3>
                </div>
                <div className="span4">
                    <p style={{margin: "0px", padding: "0px", color: 'black'}}>{props.price}</p>
                </div>
            </div>
            <p style={{color: 'black'}}>{props.description}</p>
            <h3 style={{color: '#F4CE14'}}>Order a delivery
            </h3>
        </div>
    );
  }  

  function TestimonialCard(props) {
    return (
        <div className="span2" style={{marginBottom:"10px"}} >
            <h1>{props.rating}</h1>
            <img src={props.img} alt={props.alt} style={{width: '200px', borderRadius:"15px", top:"30px"}}/>
            <div className="grid">
                <div className="span8">
                    <h3 style={{ padding: "0px", color:"black"}}>{props.reviewerName}</h3>
                </div>
            </div>
            <p style={{color: 'black', marginTop:'0px'}}>{props.reviewText}</p>
        </div>
    );
  }  

function Main() {

    return (
        <>
        <div className="grid" style={{backgroundColor: '#495E57'}}>
            <div className="span2"></div>
            <div className="span4" style={{marginBottom:"10px"}} >
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
                <p style={{color: 'white'}}>We are a family owned Mediterranean restaurant, focused on traditional recipies served with a modern twist.</p>
                <Link to="/reservations" style={{backgroundColor: '#F4CE14', color: 'black', border: 'none', padding: '10px', borderRadius: '5px'}} aria-label="On Click">
                    Reserve a Table
                </Link>
            </div>
            <div className="span4">
                <img src='mainHero.jpg' alt='mainHero' 
                style={{width: '350px', height: '400px',
                 borderRadius:"15px", position:"relative", top:"30px", left: "40px"
                 }}/>
            </div>
        </div>
        <Specials />
        <Testimonials />
        <AboutUs />
        </>
    );
  }
  
  export default Main;