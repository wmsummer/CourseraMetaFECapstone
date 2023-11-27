function Main() {
    return (
        <>
        <div className="grid" style={{backgroundColor: '#495E57'}}>
            <div className="span2"></div>
            <div className="span4" style={{marginBottom:"10px"}} >
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
                <p style={{color: 'white'}}>We are a family owned Mediterranean restaurant, focused on traditional recipies served with a modern twist.</p>
                <button style={{backgroundColor: '#F4CE14', color: 'black', border: 'none', padding: '10px', borderRadius: '5px'}} role="button">
                    Reserve a Table
                </button>
            </div>
            <div className="span4">
                <img src='mainHero.jpg' alt='mainHero' 
                style={{width: '20vw', height: '40vh',
                 borderRadius:"15px", position:"relative", top:"30px"}}/>
            </div>
        </div>
        </>
    );
  }
  
  export default Main;