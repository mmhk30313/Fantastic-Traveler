import React, { useContext } from 'react';
import './NavBar.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';
const NavBar = () => {
    const [user,setUser, loggedInUser] = useContext(UserContext);
    if(false){
        console.log(user, setUser);
    }
    const history = useHistory();
    function handleLogout(){
        // console.log(404);
        window.location.reload();
        history.push("/");
    }
    // console.log(loggedInUser);
    return (
        <div className="position-absolute w-100">
            <div className="container mt-3">
            <Navbar collapseOnSelect expand="lg" bg="transparent" variant={`light`}>
                <Link to="/home" className={`text-decoration-none font-weight-bold special-text`}>Fantastic Traveller</Link>
                <Navbar.Toggle className="custom-toggler" aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    
                    <Nav className="ml-auto">
                        <Link className={`link-btn mr-3 text-decoration-none `} to="/home">Home</Link>
                        <Link className={`link-btn mr-3 text-decoration-none `} to="/traveller_details">Destination</Link>
                        <Link className={`link-btn mr-3 text-decoration-none `} to="/blog">Blog</Link>
                        <Link className={`link-btn mr-3 text-decoration-none `} to="/contact">Contact</Link>
                        {
                            loggedInUser.emailVerified
                            ? <>
                                <Link to="/" style={{marginTop: "8px"}} className={`text-dark text-decoration-none mr-3`}>
                                    <img style={{height: "30px"}} className="rounded-circle" src={loggedInUser.imgUrl} alt=""/> <small className="ml-1 text-info font-weight-bold">{loggedInUser.name.match(/\b\w/g).join('')}</small>
                                </Link>
                                <span onClick={handleLogout} className={`link-btn text-decoration-none `} >Logout</span>
                            </>
                            : <Link className={`link-btn text-decoration-none `} to="/login">Login</Link>
                        }
                        
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
        </div>
    );
};

export default NavBar;