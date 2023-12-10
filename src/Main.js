import {Link} from 'react-router-dom';

function Testimonials() {
    return (
        <div> 
        <div className="grid" style={{paddingTop: '10px'}}></div>
            <div className="grid">
                <div className="span12" style={{alignContent: 'center', textAlign: 'center', marginBottom:"10px"}} >
                    <h1 style={{margin: "0px", padding: "0px", color:"#495E57"}}>Customer Testimonials</h1>
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
                    style={{height: '40vh', position:"relative", top:"30px", right:"200px", borderRadius:"15px"}}></img>
                    <img src='Mario and Adrian B.jpg' alt='Mario and Adrian B'
                    style={{height: '40vh', position:"relative", bottom:"90px", right:"140px", borderRadius:"15px"}}
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
                <h1 style={{margin: "0px", padding: "0px", color:"#495E57"}}>Current Specials</h1>
            </div>
            <div className="span3">
            </div>
            <div className="span2">
                <Link to="/orderonline" style={{backgroundColor: '#F4CE14', color: '#495E57', border: 'none', padding: '10px', borderRadius: '5px'}}
               onMouseOver = {e => {e.target.style.backgroundColor = '#495E57'; e.target.style.color = '#F4CE14';}} onMouseOut = {e => {e.target.style.backgroundColor = '#F4CE14'; e.target.style.color = '#495E57';}} aria-label="On Click"
                >
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
                description="Our Bruschetta is made from grilled bread that has been smeared with crushed garlic and seasoned with sea salt and olive oil."
                price="$5.99"/>
            <SpecialCard img="Lemon Dessert.jpg" alt="Special3" title="Lemon Dessert" 
                description="This comes straight from grandma's recipe book. Every last ingredient has been sourced locally and is authentic as can be imagined."
                price="$5.00"/>
            <div className="span2"></div>
        </div>
        </> 
    );
  }

function SpecialCard(props) {
    return (
        <div className="span3" style={{marginBottom:"10px"}} >
            <img src={props.img} alt={props.alt} style={{width: '75%', height: 'auto', borderRadius:"15px", top:"30px"}}/>
            <div className="grid">
                <div className="span8">
                    <h3 style={{ padding: "0px", color:"black"}}>{props.title}</h3>
                </div>
                <div className="span4">
                    <p style={{marginTop: "0px", padding: "0px", color: 'black'}}>{props.price}</p>
                </div>
            </div>
            <p style={{color: 'black', marginRight: '80px'}}>{props.description}</p>
            <h3 style={{color: '#F4CE14'}}>Order a delivery
            <svg xmlns="http://www.w3.org/2000/svg" height="16" width="20" viewBox="0 0 640 512" style={{ marginLeft: '10px' }}>
             <path d="M312 32c-13.3 0-24 10.7-24 24s10.7 24 24 24h25.7l34.6 64H222.9l-27.4-38C191 99.7 183.7 96 176 96H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h43.7l22.1 30.7-26.6 53.1c-10-2.5-20.5-3.8-31.2-3.8C57.3 224 0 281.3 0 352s57.3 128 128 128c65.3 0 119.1-48.9 127-112h49c8.5 0 16.3-4.5 20.7-11.8l84.8-143.5 21.7 40.1C402.4 276.3 384 312 384 352c0 70.7 57.3 128 128 128s128-57.3 128-128s-57.3-128-128-128c-13.5 0-26.5 2.1-38.7 6L375.4 48.8C369.8 38.4 359 32 347.2 32H312zM458.6 303.7l32.3 59.7c6.3 11.7 20.9 16 32.5 9.7s16-20.9 9.7-32.5l-32.3-59.7c3.6-.6 7.4-.9 11.2-.9c39.8 0 72 32.2 72 72s-32.2 72-72 72s-72-32.2-72-72c0-18.6 7-35.5 18.6-48.3zM133.2 368h65c-7.3 32.1-36 56-70.2 56c-39.8 0-72-32.2-72-72s32.2-72 72-72c1.7 0 3.4 .1 5.1 .2l-24.2 48.5c-9 18.1 4.1 39.4 24.3 39.4zm33.7-48l50.7-101.3 72.9 101.2-.1 .1H166.8zm90.6-128H365.9L317 274.8 257.4 192z" fill="#495E57" />
            </svg>
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
                <p style={{color: 'white', marginBottom:'20px'}}>We are a family owned Mediterranean restaurant, focused on traditional recipies served with a modern twist.</p>
                <Link to="/reservations" style={{backgroundColor: '#F4CE14', color: '#495E57', border: 'none', padding: '10px', borderRadius: '5px'}} aria-label="On Click"
                 onMouseOver = {e => e.target.style.backgroundColor = 'white'} onMouseOut = {e => e.target.style.backgroundColor = '#F4CE14'}>
                    Reserve a Table
                </Link>
            </div>
            <div className="span4">
                <img src='mainHero.jpg' alt='mainHero' 
                style={{width: '450px', height: 'auto',
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