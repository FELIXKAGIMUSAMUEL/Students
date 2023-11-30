import React, { Fragment } from 'react'
import "./AboutGOD.css"
import hostel from "./image/GOD.jpg"


function AboutGOD(){
    return(
        <Fragment>
           <div className="heading">
            <h1>
                GOD-is-Able Hostel
            </h1>
            <p>
            This is God is Able Hostel, and youre Most welcome. <br/>
		    This is a mixed hostel so all genders are accomodated here.<br/> 
            We have a restaurant that residents use at their convinient time for meals, and a gym for physical fitness.<br/> 	
     		 
            </p>
        </div>

        <section className="about-us">
            <img src={hostel}/>
            <div className="content">
                <h2>
                    Prices.
                </h2>
                <p>
                1. Single room: 1,400,000/=<br/>
		2. Double room: 900,000/=<br/>
		3. Triple room: 750,000/=
                </p>
                <button className="book-now-btn">Book Now</button>
            </div>
        </section>
        </Fragment>
    )
}

export default AboutGOD;