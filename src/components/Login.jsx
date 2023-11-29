function Login() {
    return (
        <div className="grid" style={{backgroundColor: '#495E57'}}>
            <div className="span2"></div>
            <div className="span4" style={{marginBottom:"10px"}} >
                <h1> Login</h1>
                <form style={{padding:"20px"}}> 
                    <label htmlFor="username" style={{color:'white'}}>Username:</label>
                    <input type="text" id="username" name="username" /><br /><br />
                    <label htmlFor="password" style={{color:'white'}}>Password: </label>
                    <input type="text" id="password" name="password" /><br /><br />
                    <button 
                    style={{backgroundColor: '#F4CE14', color: 'black', border: 'none', padding: '5px', borderRadius: '5px'}} 
                    type="submit" value="Submit">Submit</button>
                </form>
            </div>
        </div>
    );
  }
  
  export default Login;