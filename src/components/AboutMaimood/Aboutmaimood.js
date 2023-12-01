import React, { Fragment } from 'react'
import "./Aboutmaimood.css"
import hostel from "./image/maimood.jpg"
import { Link } from 'react-router-dom'

function Aboutmaimood(){
    return(
        <Fragment>
           <div className="heading">
            <h1>
                Maimood Hostel
            </h1>
            <p>
            This is Maimood Hostel, and you're Most welcome. <br/>
		    This is a mixed hostel so all genders are accomodated here.<br/> 
            We have a restaurant that residents use at their convenient time for meals.<br/> 	
     		 
            </p>
        </div>

        <section className="about-us">
            <img src={hostel}/>
            <div className="content">
                <h2>
                    Prices.
                </h2>
                <p>
                1. Single room: 1,300,000/=<br/>
		2. Double room: 900,000/=<br/>
		3. Triple room: 600,000/=
                </p>
                <Link to={"/Booking"}><button className="book-now-btn">Book Now</button></Link>
            </div>
        </section>
        </Fragment>
    )
}

export default Aboutmaimood;