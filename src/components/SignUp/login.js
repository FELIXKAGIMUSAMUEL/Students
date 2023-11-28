import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import './signup.css'

function Signin(){
    return(
        <Fragment>
            <div className="container1">
            <div className="form-box1">
                <h1 id="title">
                    Sign In
                </h1>
                <form className='putty'>
                    <div className="input-group1">
                        <div className="input-field1" id="nameField">
                            <i className="fi fi-sr-user"></i>
                            <input className="enter" type="text" placeholder="Student Name"/>
                        </div>

                        <div className="input-field1">
                            <i className="fi fi-sr-id-badge"></i>
                            <input className="enter" type="number" placeholder="Student Number"/>
                        </div>

                        <div className="input-field1">
                            <i className="fi fi-sr-lock"></i>
                            <input className="enter" type="password" placeholder="Password"/>
                        </div>
                        <p>
                            Forgotten Password <a href="#">Click Here.</a>
                        </p>
                    </div>
                    <div className="btn-field1">
                        <Link to={'/Signup'}><button  className="button" type="button" id="signupBtn">Sign Up</button></Link>
                        <button type="button" id="signinBtn" className="button">Sign In</button>
                    </div>
                </form>

            </div>

        </div>

        <script>
            let signupBtn = document.getElementById("signupBtn");
            let signinBtn = document.getElementById("signinBtn");
            let nameField = document.getElementById("nameField");
            let title = document.getElementById("title");

            {/* signinBtn.onclick = function()
            {
                nameField.style.maxHeight = "0";
                title.innerHTML = "Sign In";
                signupBtn.classList.add("disable");
                signinBtn.classList.remove("disable");
            }

            signupBtn.onclick = function()
            {
                nameField.style.maxHeight = "60px";
                title.innerHTML = "Sign Up";
                signupBtn.classList.remove("disable");
                signinBtn.classList.add("disable");
            } */}
        </script>
        </Fragment>
    )
}

export default Signin;