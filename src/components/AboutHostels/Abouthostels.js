import React, { Fragment } from 'react'

function Abouthostels(){
    return(
        <Fragment>
           <div class="heading">
            <h1>
                About Us
            </h1>
            <p>
            This is Olympia Hostel, and youre Most welcome. <br/>
		    This is a mixed hostel so all genders are accomodated here.<br/> 
            We have a swimming pool that residents use to cool off and have fun.<br/> 	
     		We have a restaurant that residents use at their convinient time for meals. 
            </p>
        </div>

        <section class="about-us">
            <img src="Hostel.jpg"/>
            <div class="content">
                <h2>
                    Prices.
                </h2>
                <p>
                1. Single room: 1,800,000/=<br/>
		2. Double room: 1,300,000/=<br/>
		3. Triple room: 1,000,000/=
                </p>
                <button class="book-now-btn">Book Now</button>
            </div>
        </section>
        </Fragment>
    )
}

export default Abouthostels;