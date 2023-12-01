import React, { Fragment } from 'react'
import "./Abouthelican.css"
import hostel from "./image/helican2.jpg"
import { Link } from 'react-router-dom'

function Abouthelican(){
    return(
        <Fragment>
           <div className="heading">
            <h1>
                Helican Hostel
            </h1>
            <p>
            This is Helican Hostel, and you're Most welcome. <br/>
		    This is a mixed hostel so all genders are accomodated here.<br/> 
            We have a restaurant that residents use at their convinient time for meals.<br/> 	
     		
            </p>
        </div>

        <section className="about-us">
            <img src={hostel}/>
            <div className="content">
                <h2>
                    Prices.
                </h2>
                <p>
                1. Single room: 1,550,000/=<br/>
		2. Double room: 1,200,000/=<br/>
        3. Triple room: 900,000/=<br/>
		
                </p>
                <Link to={"/Booking"}><button className="book-now-btn">Book Now</button></Link>
            </div>
        </section>
        </Fragment>
    )
}

export default Abouthelican;