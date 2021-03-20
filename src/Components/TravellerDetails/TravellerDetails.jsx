import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { UserContext } from '../../App';
import fakeData from '../../FakeData/fakeData';
// import map from '../../Images/Map.png';
import Maps from '../Maps/Maps';

import CarDetails from './CarDetails';
const TravellerDetails = () => {
    const [places] = useContext(UserContext);
    // console.log(places);
    const history = useHistory();
    if(!places.isValidPlace){
        history.push('/');
        return "";
    }
    // console.log(places);
    const travellerData = fakeData;
    let travellerDetails = {...places};
    const vehiclesInfo = travellerData.find(td => td.id === places.vehicle);
    travellerDetails["vehicles"] = vehiclesInfo.vehicles;
    // console.log(travellerDetails);
    const {from, to, vehicle, vehicles} = travellerDetails;
    return (
        <div className="container all-bottom">
            <hr/>
            <div className="row w-100 mx-auto justify-content-center">
                <div style={{height: "fit-content"}} className="col-md-3 mr-2 bg-special rounded col-md-3 mr-2 bg-special rounded py-3 px-4">
                    <ul className="card bg-danger text-light">
                        <li className="p-1"><b>{from}</b></li>
                        <li className="p-1"><b>{to}</b></li>
                    </ul>
                    {
                        vehicles && vehicles.map((v, idx) => <CarDetails key={idx} vehicle={vehicle} vehicleDetails={v} />)
                    }
                </div>
                <div className="col-md-7">
                    <div className="bg-special rounded">
                        <Maps/>
                        {/* <img className="w-100" src={map} alt=""/> */}
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default TravellerDetails;