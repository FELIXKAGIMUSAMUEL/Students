import React, { Fragment } from 'react'
import "./Aboutnalikka.css"
import hostel from "./image/nalikka.jpg"
import { Link } from 'react-router-dom'

function Aboutnalikka(){
    return(
        <Fragment>
           <div className="heading">
            <h1>
                Nalikka Hostel
            </h1>
            <p>
            This is Nalikka Hostel, and you're Most welcome. <br/>
		    This is a mixed hostel so all genders are accomodated here.<br/> 
            We have a restaurant that residents use at their convinient time for meals. <br/> 	
     		
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
		
                </p>
                <Link to={"/Booking"}><button className="book-now-btn">Book Now</button></Link>
            </div>
        </section>
        </Fragment>
    )
}

export default Aboutnalikka;