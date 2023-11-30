import React, { Fragment } from 'react'
import "./Aboutnana.css"
import hostel from "./image/nana2.jpg"


function Aboutnana(){
    return(
        <Fragment>
           <div className="heading">
            <h1>
                New Nana Hostel
            </h1>
            <p>
            This is New Nana Hostel, and you're Most welcome. <br/>
		    This is a mixed hostel so all genders are accomodated here.<br/> 
            We have a pool table and games that residents use to cool off and have fun.<br/> 	
     		We have a restaurant that residents use at their convenient time for meals. 
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
                <button className="book-now-btn">Book Now</button>
            </div>
        </section>
        </Fragment>
    )
}

export default Aboutnana;