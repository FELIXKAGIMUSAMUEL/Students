import React, { Fragment } from 'react'

function Signup(){
    return(
        <Fragment>
            <div className="container">
            <div className="form-box">
                <h1 id="title">
                    Sign Up
                </h1>
                <form>
                    <div className="input-group">
                        <div className="input-field" id="nameField">
                            <i className="fi fi-sr-user"></i>
                            <input type="text" placeholder="Student Name"/>
                        </div>

                        <div className="input-field">
                            <i className="fi fi-sr-id-badge"></i>
                            <input type="number" placeholder="Student Number"/>
                        </div>

                        <div className="input-field">
                            <i className="fi fi-sr-lock"></i>
                            <input type="password" placeholder="Password"/>
                        </div>
                        <p>
                            Forgotten Password <a href="#">Click Here.</a>
                        </p>
                    </div>
                    <div className="btn-field">
                        <button type="button" id="signupBtn">Sign Up</button>
                        <button type="button" id="signinBtn" className="disable">Sign In</button>
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

export default Signup;