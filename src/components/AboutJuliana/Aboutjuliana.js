import React, { Fragment } from 'react'
import "./Aboutjuliana.css"
import hostel from "./image/juliana2.jpg"
import { Link } from 'react-router-dom'

function Aboutjuliana(){
    return(
        <Fragment>
           <div className="heading">
            <h1>
                Lady Juliana Hostel
            </h1>
            <p>
            This is Lady Juliana Hostel, and youre Most welcome. <br/>
		    This is a hostel that only accomodtaes female students.<br/> 
            We have a shuttle that is used transport students to and from campus.<br/> 	
     		We have very tight security that allows your child to have a safe stay here.<br/> 	
     		
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

export default Aboutjuliana;