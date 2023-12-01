import React, { Fragment } from 'react'
import "./Aboutnakiyinji.css"
import hostel from "./image/nakiyinji.jpg"
import { Link } from 'react-router-dom'

function Aboutnakiyinji(){
    return(
        <Fragment>
           <div className="heading">
            <h1>
                Nakiyinji Hostel
            </h1>
            <p>
            This is Nakiyinji Hostel, and you're Most welcome. <br/>
		    This is a mixed hostel so all genders are accomodated here.<br/> 
            We have pool and other games that residents play to cool off and have fun.<br/> 	
     		 
            </p>
        </div>

        <section className="about-us">
            <img src={hostel}/>
            <div className="content">
                <h2>
                    Prices.
                </h2>
                <p>
                1. Single room: 1,800,000/=<br/>
		2. Double room: 1,300,000/=<br/>
		3. Triple room: 1,000,000/=
                </p>
                <Link to={"/Booking"}><button className="book-now-btn">Book Now</button></Link>
            </div>
        </section>
        </Fragment>
    )
}

export default Aboutnakiyinji;