import React, { Fragment } from 'react'
import "./Aboutjb.css"
import hostel from "./image/jb2.jpg"

function Aboutjb(){
    return(
        <Fragment>
           <div className="heading">
            <h1>
                JB Hostel
            </h1>
            <p>
            This is JB Hostel, and you're Most welcome. <br/>
		    This is a mixed hostel so all genders are accomodated here.<br/> 
            We have a swimming pool that residents use to cool off and have fun.<br/> 	
     		We have a restaurant that residents use at their convinient time for meals. 
            </p>
        </div>

        <section className="about-us">
            <img src={hostel}/>
            <div className="content">
                <h2>
                    Prices.
                </h2>
                <p>
                1. Single room: 1,600,000/=<br/>
		2. Double room: 1,100,000/=<br/>
		3. Triple room: 800,000/=
                </p>
                <button className="book-now-btn">Book Now</button>
            </div>
        </section>
        </Fragment>
    )
}

export default Aboutjb;