import React, { useContext } from 'react';
import { useHistory, useParams } from 'react-router';
import { UserContext } from '../../App';
// import map from '../../Images/Map.png';
import Maps from '../Maps/Maps';

import './PlaceSelection.css';
const PlaceSelection = () => {
    const [places, setPlaces] = useContext(UserContext);
    const {vehicle} = useParams();
    const history = useHistory();
    const handleSubmit = (e)=>{
        // console.log(e.target.initial.value, " & ", e.target.final.value);
        let newPlaces = {...places};
        newPlaces["from"] = e.target.initial.value;
        newPlaces["to"] = e.target.final.value;
        newPlaces["vehicle"] = vehicle;
        newPlaces["isValidPlace"] = true;
        setPlaces(newPlaces);
        history.replace(`/traveller_details`);
        e.preventDefault();
    }
    // console.log(places);
    // console.log(vehicle);
    return (
        <div className="container all-bottom">
            <hr/>
            <div className="row w-100 mx-auto justify-content-center">
                <form onSubmit={handleSubmit} style={{height: "fit-content"}} className="col-md-3 col-sm-10 mr-2 bg-special rounded py-3 px-4">
                    <p>Pick From</p>
                    <div className="form-group">
                        <input className="form-control" name='initial' type="text" required/>
                    </div>
                    <p>Pick To</p>
                    <div className="form-group">
                        <input className="form-control" name="final" type="text" required/>
                    </div>
                    <input type="submit" className='btn btn-danger w-100'  value="Search"/>
                </form>
                <div className="col-md-7 col-sm-10">
                    <div className="bg-special rounded">
                        <Maps/>
                        {/* <img className="w-100" src={map} alt=""/> */}
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default PlaceSelection;