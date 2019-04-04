import React from 'react';
//import axios from 'axios'
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


//import React, { Component } from 'react';
//import {
    //Collapse,
    //Navbar,
    //NavbarToggler,
    //NavbarBrand,
    //Nav,
    //NavItem,
    //NavLink,
    //Container
   //from 'reactstrap';


//class NavBar extends Component {
    //state = {
        //isOpen: false
    //}

    //toggle = () => {
        //this.setState({
            //isOpen: !this.state.isOpen
        //});
    //};
 

    //render() {
        //return(
            //<div>
                //<Navbar  expand="sm" className="mb-5">
                    //<Container>
                        //<NavbarBrand href="/">Fashion House</NavbarBrand>
                        //<NavbarToggler onClick={this.toggle} />
                        //<Collapse is Open={this.state.isOpen} navbar>
                            //<Nav className="ml-auto" navbar>
                                //<NavItem>
                                    //<NavLink href="/Home">Home</NavLink>
                                    //<NavLink href="/Shop">Shop</NavLink>
                                    //<NavLink hfref="/signup">Signup</NavLink>
                                    //<NavLink hfref="/login">Log in</NavLink>

                                //</NavItem>
                        
                            //</Nav>
                        //</Collapse>    
                    //</Container>
                //</Navbar>
            //</div>
        //);
        
    //}


//}

//export default Navbar;







