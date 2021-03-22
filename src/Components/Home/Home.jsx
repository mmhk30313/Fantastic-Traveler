import React from 'react';
import bike from '../../Images/bike.png';
import car from '../../Images/car.png';
import bus from '../../Images/bus.png';
import train from '../../Images/train.png';
import "./Home.css";
import { Link } from 'react-router-dom';
import NavBar from '../Shared/NavBar/NavBar';
const Home = () => {
    return (
        <div className="text-center w-100 home">
            <NavBar/>
            <div className="container vehicles">
                <div className="row w-100 mx-auto justify-content-center">
                     <Link to="/travelling_by/bike" className="col-md-2 card mx-auto my-1 p-2 text-dark text-decoration-none">
                        <img className="w-75 mx-auto my-3" src={bike} alt=""/>
                        <h5>BIKE</h5>
                     </Link>
                    <Link to="/travelling_by/car" className="col-md-2 card my-1 mx-auto p-2 text-dark text-decoration-none">
                        <img className="w-75 mx-auto my-3" src={car} alt=""/>
                        <h5>CAR</h5>
                    </Link>
                    <Link to="/travelling_by/bus" className="col-md-2 card my-1 mx-auto p-2 text-dark text-decoration-none">
                        <img className="w-75 mx-auto my-3" src={bus} alt=""/>
                        <h5>BUS</h5>
                    </Link>
                    <Link to="/travelling_by/train" className="col-md-2 mx-auto card my-1 
                     p-2 text-dark text-decoration-none">
                        <img className="w-75 mx-auto my-3" src={train} alt=""/>
                        <h5>TRAIN</h5>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;