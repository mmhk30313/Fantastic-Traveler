import React, { useContext, useState } from 'react';
import { UserContext } from '../../App';

const NewAccountForm = ({setLoggedIn}) => {
    const [user, setUser] = useContext(UserContext);
    const [validUser, setValidUser] = useState(false);
    if(false){
        console.log(validUser);
    }
    const handleBlur = (evt) => {
        const name = evt.target.name;
        const value = evt.target.value;
        let isValidField = false;
        if(name === 'name'){
            const re = /[A-Z]/i;
            const isValidName = re.test(value);
            if(isValidName){
              isValidField = true;
              settingUser("name", value);
            }
        }
        else if(name === 'email'){
            const email = value;
            const re = /\S+@\S+\.\S+/;
            const isValidEmail = re.test(email);
            
            if(isValidEmail){
                isValidField = true;
                settingUser("email", value);
            
            }else{
                isValidField = false;
                settingUser("email", value);
            }
        }
        else if(name === 'password'){
            const password = value;
            const re = /\d{1}/;
            const isValidPassword = re.test(password) && password.length > 5;
            isValidField = isValidPassword; 
            settingUser("password", value);
            
        }
        else if(name === 'confirm_password'){
            const password = value;
            const re = /\d{1}/;
            const isValidPassword = re.test(password) && password.length > 5;
            isValidField = isValidPassword; 
            settingUser("confirm_password", value);
        }
        // console.log(isValidField);
        setValidUser(isValidField);
        evt.preventDefault();
    } 
    //Eitake onno component e rakha jay...
    function settingUser(key, value){
        const newUserInfo = {...user};
        newUserInfo[key] = value;
        newUserInfo["isValidUser"] = newUserInfo.password === newUserInfo.confirm_password ;
        setUser(newUserInfo);
    }
    const handleLoggedInForm = (flag)=>{
        setLoggedIn(flag);
    }
    return (
        <>
            <h6>Create an account</h6><br/>
            <input onBlur={handleBlur} className="form-control" type="text" name="name" placeholder="Name" required /><br/>
            <input onBlur={handleBlur} className="form-control" type="text" name="email" placeholder="Username Or Email" required /><br/>
            <input onBlur={handleBlur} className="form-control" type="password" name="password" placeholder="Password" required /><br/>
            <input onBlur={handleBlur} className="form-control" type="password" name="confirm_password" placeholder="Confirm Password" required /><br/>
            
            <button type="submit" className="btn btn-danger my-3">Create an account</button>
            <div className="d-flex justify-content-center">
                <p><small>Already have an account?</small><small onClick={()=>handleLoggedInForm(true)} className="special-line"> Login</small></p>
            </div>
        </>
    );
};

export default NewAccountForm;