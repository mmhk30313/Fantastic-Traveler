import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
// import NavBar from './Components/Shared/NavBar/NavBar';
import Home from './Components/Home/Home';
// import NavBar from './Components/Shared/NavBar/NavBar';
import Login from './Components/Login/Login';
import PlaceSelection from './Components/PlaceSelection/PlaceSelection';

import TravellerDetails from './Components/TravellerDetails/TravellerDetails';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import NotFound from './Components/NotFound/NotFound';
// import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
export const UserContext = createContext();

function App() {
  const [user, setUser] = useState({});
  const [vehicle, setVehicle] = useState({});
  const [places, setPlaces] = useState({
    isValidPlace: false,
    from: "",
    to: ""
  });
  const [loggedInUser, setLoggedInUser] = useState({});
  // console.log(loggedInUser);
  return (
    <UserContext.Provider value={[user, setUser,loggedInUser, setLoggedInUser, places, setPlaces, vehicle, setVehicle]}>
      <Router>
        {/* <NavBar /> */}
        <Switch>
          <Route exact path="/">
            {/* <NavBar /> */}
            <Home/>
          </Route>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <PrivateRoute path="/traveller_details">
            <TravellerDetails/>
          </PrivateRoute>
          <PrivateRoute path="/travelling_by/:vehicle">
            <PlaceSelection/>
          </PrivateRoute> 
          <Route path="*/:page">
            <NotFound/>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
