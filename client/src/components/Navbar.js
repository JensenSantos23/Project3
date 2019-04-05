import React from 'react';
// import axios from 'axios'
import { Link } from 'react-router-dom';
import { slide as Menu }  from 'react-burger-menu';
import '.style.css'

const Navbar = () => {

    return (
        
        <nav className="nav-wrapper">
        {/* burger-menu */}
<div>
				<Menu>
					<a className="menu-item" href="/Home">Home</a>
                    <a className="menu-item" href="/">Shop</a>
                    <a className="menu-item" href="/signup">Sign Up</a>
					<a className="menu-item" href="/login">Login</a>
                    <a className="menu-item" href="/cart">My cart</a>
					
				</Menu>
			</div>

            <div className="container">

                <img className="teamMatePic" src={require("../images/1.jpg")} alt="logo" width="6.9%"></img>
                <Link to="/" className="brand-logo" >Fashion House</Link>


                <ul className="right">

                    <li><Link to="/Home">Home</Link></li>
                    <li><Link to="/">Shop</Link></li>
                    <li><Link to="/signup">Signup</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    {/* <li><Link to="/login">About Us</Link></li> */}
                    <li><Link to="/comment">comment</Link></li>
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







