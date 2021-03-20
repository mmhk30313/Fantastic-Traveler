import React from 'react';

const LoginForm = ({setLoggedIn}) => {
    const handleNewAccountForm = (flag)=>{
        setLoggedIn(flag);
    }
    return (
        <>
            <h6>Login</h6><br/>
            <input className="form-control" type="text" name="email" placeholder="Email" required/><br/>
            <input className="form-control" name="password" type="password" placeholder="Password" required/><br/>
            <div className="input-group d-flex justify-content-between">
                <div className="remember">
                    <input type="checkbox"/> <small>Remember Me</small>
                </div>
                <div>
                    <small className="special-line">Forgot Password</small>
                </div>
            </div>
            <button type="submit" className="btn btn-danger my-3">Login</button>
            <div className="d-flex justify-content-center">
                <p><small>Don't have an account?</small><small onClick={() =>handleNewAccountForm(false)} className="special-line"> Create an account</small></p>
            </div>
        </>
    );
};

export default LoginForm;