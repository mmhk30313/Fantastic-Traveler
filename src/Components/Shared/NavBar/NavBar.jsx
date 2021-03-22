import React, { useContext } from 'react';
import './NavBar.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';
const NavBar = () => {
    const [user, setUser,loggedInUser, setLoggedInUser, places, setPlaces, vehicle, setVehicle] = useContext(UserContext);
    if(false){
        console.log( user, places, vehicle ,setUser, setLoggedInUser, setPlaces, setVehicle);
    }
    const history = useHistory();
    function handleLogout(){
        // console.log(404);
        setUser({});
        setLoggedInUser({});
        setPlaces({});
        setVehicle({});
        // window.location.reload();
        history.push("/");
    }
    // console.log(loggedInUser);
    return (
        <div className="position-sticky w-100 pt-3">
            <div className="container mt-0">
            <Navbar collapseOnSelect expand="lg" bg="transparent" variant={`light`}>
                <Link to="/home" className={`text-decoration-none font-weight-bold special-text`}>Fantastic Traveller</Link>
                <Navbar.Toggle className="custom-toggler mt-1" aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    
                    <Nav className="ml-auto">
                        <Link className={`link-btn mr-auto text-decoration-none `} to="/home">Home</Link>
                        <Link className={`link-btn mr-auto text-decoration-none `} to="/traveller_details">Destination</Link>
                        <Link className={`link-btn mr-auto text-decoration-none `} to="/blog">Blog</Link>
                        <Link className={`link-btn mr-auto text-decoration-none `} to="/contact">Contact</Link>
                        {
                            loggedInUser.emailVerified
                            ? <>
                                <Link to="/" className={`link-btn text-decoration-none mr-auto `}>
                                    <img style={{height: "30px"}} className="rounded-circle ml-2" src={loggedInUser.imgUrl} alt=""/> <small className="ml-1 mr-2 font-weight-bold">{loggedInUser.name.match(/\b\w/g).join('')}</small>
                                </Link>
                                <span onClick={handleLogout} className={`link-btn text-decoration-none mr-auto`} >Logout</span>
                            </>
                            : <Link className={`link-btn mr-auto text-decoration-none mr-auto`} to="/login">Login</Link>
                        }
                        
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
        </div>
    );
};

export default NavBar;