import React from "react";

const Signin = () => {
    return(
<div className="signin-setup">
    <div className="form-container">
        <h1> Sign Up</h1>
        <div className="form-fields">
            <input type="text" placeholder="Your name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
        </div>
        <div className="signin-terms">
        <input type="checkbox" name="" id="" ></input>
        <p>By continuing, you agree to the use of terms & privacy policy.</p>
        </div>
        <button>Continue</button>
        <p className="login-ref">Already have an account? <span>Login here.</span></p>
    </div>
</div>


    );
}

export default Signin;