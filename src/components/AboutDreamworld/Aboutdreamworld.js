import React, { Fragment } from 'react'
import "./Aboutdreamworld.css"
import hostel from "./image/dreamworld2.jpeg"


function Aboutdreamworld(){
    return(
        <Fragment>
           <div className="heading">
            <h1>
                Dreamworld Hostel
            </h1>
            <p>
            This is Dreammowrld Hostel, and you're Most welcome. <br/>
		    This is a mixed hostel so all genders are accomodated here.<br/> 
            We have a restaurant that residents use at their convinient time for meals..<br/> 	
     		 
            </p>
        </div>

        <section className="about-us">
            <img src={hostel}/>
            <div className="content">
                <h2>
                    Prices.
                </h2>
                <p>
                1. Single room: 1,500,000/=<br/>
		2. Double room: 1,200,000/=<br/>
		3. Triple room: 900,000/=
                </p>
                <button className="book-now-btn">Book Now</button>
            </div>
        </section>
        </Fragment>
    )
}

export default Aboutdreamworld;