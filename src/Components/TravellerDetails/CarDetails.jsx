import { faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const CarDetails = ({vehicle, vehicleDetails}) => {
    // console.log(vehicle, vehicleDetails);
    const {persons, img, cost} = vehicleDetails;
    return (
        <div className="card mb-2 p-2">
            <div className="d-flex justify-content-around align-items-center">
                <img src={img} className="w-25" alt=""/>
                <p className="text-capitalize mt-3"><small>{vehicle}</small></p>
                <FontAwesomeIcon icon={faUserFriends} />
                <p className="mt-3"><small>{persons}</small></p>
                <p className="mt-3"><small>${cost}</small></p>
            </div>
        </div>
    );
};

export default CarDetails;