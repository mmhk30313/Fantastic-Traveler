import React, { useContext, useState } from 'react';
import './Login.css';
import facebook from '../../Images/social-icons/fb.png';
import google from '../../Images/social-icons/google.png';
import LoginForm from './LoginForm';
import NewAccountForm from './NewAccountForm';
import firebase from "firebase/app";
// import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../App';
firebase.initializeApp(firebaseConfig);

const Login = () => {
    const [error, setError] = useState("");
    const [user, setUser,loggedInUser, setLoggedInUser] = useContext(UserContext);
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const facebookProvider = new firebase.auth.FacebookAuthProvider();
    const [loggedIn, setLoggedIn] = useState(true);
    let history = useHistory();
    let location = useLocation();
    let {from} = location.state || { from: { pathname: "/" }};
    const handleFBLogin = ()=>{
        firebase.auth().signInWithPopup(facebookProvider)
        .then((result) => {
            // The signed-in user info.
            const user = result.user;
            // console.log(user);
            const {displayName, email, photoURL} = user;
            // console.log(displayName, "&", email, "&", photoURL);
            let newUser = {...loggedInUser};
            newUser["name"] = displayName;
            newUser["email"] = email ? email : "mehedihasan30313@gmail.com";
            newUser["imgUrl"] = photoURL;
            newUser["emailVerified"] = true;
            // console.log(newUser);
            setLoggedInUser(newUser);
            history.replace(from);
            // ...
        })
        .catch((error) => {
            // Handle Errors here.
            const errorMessage = error.message;
            console.log(errorMessage);
            setError(errorMessage);
            // ...
        });

    }
    const handleGoogleSignIn = ()=>{
        firebase.auth().signInWithPopup(googleProvider)
        .then((result) => {
            // The signed-in user info.
            const user = result.user;
            // console.log(user);
            const {displayName, email, photoURL, emailVerified} = user;
            // console.log(displayName, "&", email, "&", photoURL);
            let newUser = {...loggedInUser};
            newUser["name"] = displayName;
            newUser["email"] = email;
            newUser["imgUrl"] = photoURL;
            newUser["emailVerified"] = emailVerified;
            // console.log(newUser);
            setLoggedInUser(newUser);
            history.replace(from); // Redirect Hoye Jabe Ekhane...
        })
        .catch((error) => {
            // Handle Errors here.
            const errorMessage = error.message;
            console.log(errorMessage);
            setError(errorMessage);
        });
    }
    const handleEmailSignIn = (evt) =>{
        // console.log(evt.target.email.value, evt.target.password.value);
        const email = evt.target.email.value;
        const password = evt.target.password.value;
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            let myUser = userCredential.user;
            // console.log(myUser);
            // Just checking for any email (which may not be a google verified email/gmail)
            myUser["imgUrl"] = "https://w7.pngwing.com/pngs/410/105/png-transparent-gmail-logo-g-suite-gmail-computer-icons-google-email-e-mail-angle-text-rectangle.png";
            const {email, displayName, imgUrl} = myUser;
            const newUser = {
                name: displayName,
                email,
                imgUrl,
                emailVerified: true
            }
            setLoggedInUser(newUser);
            history.replace(from);
            // ...
        })
        .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
            setError(errorMessage);
        });

        evt.preventDefault();
    }
    const handleCreateAccount = (evt) =>{
        // console.log(evt.target.email.value, evt.target.password.value);
        // console.log(user);
        const { password, isValidUser, email, name } = user;
        if(isValidUser){
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((res) => {
                // Signed in 
                const myUser = firebase.auth().currentUser;
                myUser.updateProfile({
                    displayName: name
                });
                // console.log(myUser);
                user["imgUrl"] = "https://w7.pngwing.com/pngs/410/105/png-transparent-gmail-logo-g-suite-gmail-computer-icons-google-email-e-mail-angle-text-rectangle.png";
                user["emailVerified"] = true;
                setLoggedInUser(user);
                history.replace(from);
                // ...
            })
            .catch((error) => {
                // var errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage, setUser);
                setError(errorMessage);
                // ..
            });
        }
        else{
            setError("The account is invalid for the mismatching password or other queries");
        }
        evt.preventDefault();

    }
    return (
        <div className="container user-form">
            
            {
                loggedIn 
                ? <form onSubmit={handleEmailSignIn} action="" className="border border-dark card p-4 mx-auto w-50">
                    <LoginForm setLoggedIn={setLoggedIn}/>
                    {
                        error && <p className="text-center text-warning">{error}</p>
                    }
                </form>
                : <form onSubmit={handleCreateAccount} action="" className="border border-dark card p-4 mx-auto w-50">
                     <NewAccountForm setLoggedIn={setLoggedIn}/>
                    {
                        error && <p className="text-center text-success">{error}</p>
                    }
                </form>
            }

            <div className="container sign-in-or">
                <div className="or">
                    <p></p>
                    <em> Or </em>
                    <p></p>
                </div>
                <button onClick={() => handleFBLogin()} className='btn btn-outline-info sign-in-btn'><img className='facebook-img' src={facebook} alt=""/>   Continue with Facebook</button><br/>
                
                <button onClick={ () => handleGoogleSignIn()} className='btn btn-outline-warning sign-in-btn'><img className='google-img' src={google} alt=""/> Continue with Google</button>
            </div>
        </div>
    );
};

export default Login;