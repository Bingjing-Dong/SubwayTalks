import React from 'react'; 


function Header(){

    function handleSignIn(){
        console.log("Sign in"); 
    }

    function handleLogIn(){
        console.log("Log in"); 
    }
    
    return (
        <header className='header-home'>
            <img src = {require("../images/logo2.png")} alt = 'logo' className='nav-logo-home' />
            
            <h1 className='header-home-title'> SubwayTalks Web Page</h1>

            <div className='header-home-buttons'>
                
                <button onClick={handleSignIn}
                        className={'header-home-button-sign'}
                >  Sign In </button>

                <div> 
                        <button onClick={handleLogIn}
                                className='header-home-button-log'
                        > Log In </button>
                </div>          
            </div>
        </header>
    );
}


export default Header;