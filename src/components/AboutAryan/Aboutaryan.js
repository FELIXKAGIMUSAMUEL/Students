import React, { Fragment } from 'react'
import "./Aboutaryan.css"
import hostel from "./image/aryan2.png"
import { Link } from 'react-router-dom'


function Aboutaryan(){
    return(
        <Fragment>
           <div className="heading">
            <h1>
                Aryan Hostel
            </h1>
            <p>
            This is Aryan Hostel, and you're Most welcome. <br/>
		    This is a mixed hostel so all genders are accomodated here.<br/> 
            We have a gym and a common room where residents can go to cool off and exercise.<br/> 	
     		This hostel is mostly occupied by Medical students, since its closer to Mulago, CHS. 
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
		
                </p>
                <Link to={"/Booking"}><button className="book-now-btn">Book Now</button></Link>
            </div>
        </section>
        </Fragment>
    )
}

export default Aboutaryan;