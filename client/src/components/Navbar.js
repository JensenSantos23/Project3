import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {

    return (
        <nav className="nav-wrapper">
                      

            <div className="container">

            <img className="teamMatePic" src={require("../images/1.jpg")} width="4.4%"></img>
                <Link to="/" className="brand-logo" >Fashion House</Link>


                <ul className="right">
            
    
  
                <li><Link to="/Home">Home</Link></li>
                    <li><Link to="/">Shop</Link></li>
                    <li><Link to="/signup">Signup</Link></li>
                    <li><Link to="/login">Log in</Link></li>
                    
                    
                    <li><Link to="/cart">My cart</Link></li>

                    <li><Link to="/cart"><i className="material-icons">shopping_cart</i></Link></li>
                    
                </ul>
            </div>
        </nav>


 
    )
}

export default Navbar;
