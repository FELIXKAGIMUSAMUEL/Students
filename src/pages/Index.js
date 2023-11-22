import React, { Fragment } from 'react'

function Index(){
    return(
        <Fragment>
            
  {/* <!-- 
    - #HEADER
  --> */}

  <header className="header" data-header>

    <div className="overlay" data-overlay></div>

    <div className="header-top">
      <div className="container">

        <a href="tel:+0414542804" className="helpline-box">

          <div className="icon-box">
            <ion-icon name="call-outline"></ion-icon>
          </div>

          <div className="wrapper">
            <p className="helpline-title">For Further Inquires :</p>

            <p className="helpline-number">+0414542804</p>
          </div>

        </a>

        <a href="#" className="logo"> 
          {/* <img src="assets/images/maklogo.png" alt="Mak logo"/> */}
        </a>

        <div className="header-btn-group">

          <button className="search-btn" aria-label="Search">
            <ion-icon name="search"></ion-icon>
          </button>

          <button className="nav-open-btn" aria-label="Open Menu" data-nav-open-btn>
            <ion-icon name="menu-outline"></ion-icon>
          </button>

        </div>

      </div>
    </div>

    <div className="header-bottom">
      <div className="container">

        <ul className="social-list">

          <li>
            <a href="#" className="social-link">
            <i className="fi fi-brands-facebook"></i>
            </a>
          </li>

          <li>
            <a href="#" className="social-link">
            <i className="fi fi-brands-twitter-alt"></i>
            </a>
          </li>

          <li>
            <a href="#" className="social-link">
            <i className="fi fi-brands-instagram"></i>
            </a>
          </li>

        </ul>

        <nav className="navbar" data-navbar>

          <div className="navbar-top">

            <a href="#" className="logo">
              <img src="assets/images/logo-blue.svg" alt="Mak log"/>
            </a>

            <button className="nav-close-btn" aria-label="Close Menu" data-nav-close-btn>
              <ion-icon name="close-outline"></ion-icon>
            </button>

          </div>

          <ul className="navbar-list">

            <li>
              <a href="#home" className="navbar-link" data-nav-link>home</a>
            </li>

            <li>
              <a href="#location" className="navbar-link" data-nav-link>location</a>
            </li>

            <li>
              <a href="#hostels" className="navbar-link" data-nav-link>hostels</a>
            </li>

            <li>
              <a href="#gallery" className="navbar-link" data-nav-link>gallery</a>
            </li>

            <li>
              <a href="#contact" className="navbar-link" data-nav-link>contact us</a>
            </li>

          </ul>

        </nav>

        <button className="btn btn-primary">Sign In</button>

      </div>
    </div>

  </header>





  <main>
    <article>

      {/* <!-- 
        - #HERO
      --> */}

      <section className="hero" id="home">
        <div className="container">

          <h2 className="h1 hero-title">Explore your new home, away from home.</h2>

          <p className="hero-text">
          Discover and book the perfect hostel of your choice. 
          With our secure booking process, finding your ideal hostel has never been easier. 
          Start exploring.
          </p>

          <div className="btn-group">
            {/* <button className="btn btn-primary">Learn more</button> */}

            <button className="btn btn-secondary">Book now</button>
          </div>

        </div>
      </section>





      {/* <!-- 
        - #TOUR SEARCH
      --> */}

      {/* <section className="tour-search">
        <div className="container">

          <form action="" className="tour-search-form">

            <div className="input-wrapper">
              <label for="destination" className="input-label">Search Destination*</label>

              <input type="text" name="destination" id="destination" required placeholder="Enter Destination"
                className="input-field"/>
            </div>

            <div className="input-wrapper">
              <label for="people" className="input-label">Pax Number*</label>

              <input type="number" name="people" id="people" required placeholder="No.of People" className="input-field"/>
            </div>

            <div className="input-wrapper">
              <label for="checkin" className="input-label">Checkin Date**</label>

              <input type="date" name="checkin" id="checkin" required className="input-field"/>
            </div>

            <div className="input-wrapper">
              <label for="checkout" className="input-label">Checkout Date*</label>

              <input type="date" name="checkout" id="checkout" required className="input-field"/>
            </div>

            <button type="submit" className="btn btn-secondary">Inquire now</button>

          </form>

        </div>
      </section> */}





      {/* <!-- 
        - #POPULAR
      --> */}

      <section className="location" id="location">
        <div className="container">

          <p className="section-subtitle">Uncover places</p>

          <h2 className="h2 section-title">Popular Locations</h2>

          <p className="section-text">
            These are the common places that are around Makerere University, where most students reside.
          </p>

          <ul className="popular-list">

            <li>
              <div className="popular-card">

                <figure className="card-img">
                  <img src="assets/images/kikoni.jpeg" alt="Makerere Kikoni" loading="lazy"/>
                </figure>

                <div className="card-content">

                  <div className="card-rating">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                  </div>

                  <p className="card-subtitle">
                    <a href="#">Kikoni</a>
                  </p>

                  <h3 className="h3 card-title">
                    <a href="#">Makerere-Kikoni</a>
                  </h3>

                  <p className="card-text">
                    Located at the Western Wing of Makerere University. 
                    The simplest route is through the Western gate of Makerere University.
                  </p>

                </div>

              </div>
            </li>

            <li>
              <div className="popular-card">

                <figure className="card-img">
                  <img src="assets/images/kagugube.jpeg" alt="Makerere Kagugube" loading="lazy"/>
                </figure>

                <div className="card-content">

                  <div className="card-rating">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                  </div>

                  <p className="card-subtitle">
                    <a href="#">Kagugube</a>
                  </p>

                  <h3 className="h3 card-title">
                    <a href="#">Makerere-Kagugube</a>
                  </h3>

                  <p className="card-text">
                  Located after Ham Shopping Mall, Makerere. 
                    The simplest route is through the Main gate of Makerere University.
                  </p>

                </div>

              </div>
            </li>

            <li>
              <div className="popular-card">

                <figure className="card-img">
                  <img src="assets/images/katanga.jpeg" alt="Makerere-Katanga" loading="lazy"/>
                </figure>

                <div className="card-content">

                  <div className="card-rating">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                  </div>

                  <p className="card-subtitle">
                    <a href="#">Katanga</a>
                  </p>

                  <h3 className="h3 card-title">
                    <a href="#">Wandegeya-Katanga</a>
                  </h3>

                  <p className="card-text">
                  Located at the Eastern WIng of Makerere University. 
                    The simplest route is through the Eastern gate of Makerere University.
                  </p>

                </div>
                </div>
            </li>

            <li>
                <div className="popular-card">

                <figure className="card-img">
                  <img src="assets/images/kikumikikumi.jpeg" alt="Makerere-Kikumi-kikumi" loading="lazy"/>
                </figure>

                <div className="card-content">

                  <div className="card-rating">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                  </div>

                  <p className="card-subtitle">
                    <a href="#">Kikumi-Kikumi</a>
                  </p>

                  <h3 className="h3 card-title">
                    <a href="#">Kikumi-Kikumi</a>
                  </h3>

                  <p className="card-text">
                  Located at the Southern Wing of Makerere University. 
                    The simplest route is through the Kikumi-Kikumi small gate of Makerere University.
                  </p>

                </div>

              </div>
            </li>

            <li>
                <div className="popular-card">

                <figure className="card-img">
                  <img src="assets/images/mulago.jpeg" alt="Mulago" loading="lazy"/>
                </figure>

                <div className="card-content">

                  <div className="card-rating">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                  </div>

                  <p className="card-subtitle">
                    <a href="#">Mulago</a>
                  </p>

                  <h3 className="h3 card-title">
                    <a href="#">Mulago</a>
                  </h3>

                  <p className="card-text">
                  Located in Mulago, near the College of Health Sciences, Makerere University. 
                    The simplest route is through the Eastern gate of Makerere University.
                  </p>

                </div>

              </div>
            </li>

            <li>
                <div className="popular-card">

                <figure className="card-img">
                  <img src="assets/images/kavule.jpeg" alt="Makerere-Kavule" loading="lazy"/>
                </figure>

                <div className="card-content">

                  <div className="card-rating">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                  </div>

                  <p className="card-subtitle">
                    <a href="#">Kavule</a>
                  </p>

                  <h3 className="h3 card-title">
                    <a href="#">Makerere-Kavule</a>
                  </h3>

                  <p className="card-text">
                  Located in Kavule, Makerere area.
                  The simplest route is through the Eastern gate of Makerere University.
                  </p>

                </div>

              </div>
            </li>

          </ul>

          {/* <button className="btn btn-primary">More Locations</button> */}

        </div>
      </section>





      {/* <!-- 
        - #PACKAGE
      --> */}

      <section className="hostels" id="hostels">
        <div className="container">

          <p className="section-subtitle">Hostel Prices</p>

          <h2 className="h2 section-title">Checkout the different prices for each hostel. </h2>

          <p className="section-text">
            There prices may vary given the types of hostel, the capacity of the rooms, and the period of stay at the hostels.
          </p>

          <ul className="package-list">

            <li>
              <div className="package-card">

                <figure className="card-banner">
                  <img src="assets/images/olympia.jpg" alt="Olympia Hostel" loading="lazy"/>
                </figure>

                <div className="card-content">

                  <h3 className="h3 card-title">Olympia Hostel</h3>

                  <p className="card-text">
                  Olympia Hostel is located in Makerere-Kikoni. It is one of the best hostels availabe in Kikoni. 


                  </p>
                  <p className="card-text">
                  
                  
                  </p>

                  <ul className="card-meta-list">

                    <li className="card-meta-item">
                      <div className="meta-box">
                        <ion-icon name="time"></ion-icon>

                        <p className="text"><b>PERIOD OF STAY:</b>
                        
                        <span>The Makerere University timetable is followed strictly. Students are evacuated at the end of the semester.</span></p>
                      </div>
                    </li>                 
                  </ul>
                </div>

                <div className="card-price">

                  <div className="wrapper">

                    <p className="reviews">We warmly welcome you.</p>

                    <div className="card-rating">
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                    </div>

                  </div>

                  <p className="price">
                    </p>
                  <p className="price">
                    </p>

                  <button className="btn btn-secondary">Check it Out</button>

                </div>

              </div>
            </li>

            <li>
              <div className="package-card">

                <figure className="card-banner">
                  <img src="assets/images/juliana.jpg" alt="St. Juliana Hostel" loading="lazy"/>
                </figure>

                <div className="card-content">

                  <h3 className="h3 card-title">St. Juliana Hostel</h3>

                  <p className="card-text">
                  Lady Juliana Hostel is located in Makerere-Kikoni, opposite Olympia Hostel. It is a hostel for females only.

                  </p>
                  <p className="card-text">
                  
                  
                  </p>

                  <ul className="card-meta-list">

                    <li className="card-meta-item">
                      <div className="meta-box">
                        <ion-icon name="time"></ion-icon>

                        <p className="text"><b>PERIOD OF STAY:</b>
                        
                        <span>The Makerere University timetable is followed strictly. Students are evacuated at the end of the semester.</span></p>
                      </div>
                    </li>                 
                  </ul>
                </div>

                <div className="card-price">

                  <div className="wrapper">

                    <p className="reviews">Thank you for choosing us.</p>

                    <div className="card-rating">
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                    </div>

                  </div>

                  <p className="price">
                    </p>
                  <p className="price">
                    </p>

                  <button className="btn btn-secondary">Check it Out</button>

                </div>

              </div>
            </li>

            <li>
              <div className="package-card">

                <figure className="card-banner">
                  <img src="assets/images/nana.jpg" alt="New Nana Hostel" loading="lazy"/>
                </figure>

                <div className="card-content">

                  <h3 className="h3 card-title">New Nana Hostel</h3>

                  <p className="card-text">
                  New Nana Hostel is located in Makerere-Kagugube. It is a very affordable and unique hostel.

                  </p>
                  <p className="card-text">
                 
                  
                  </p>
                  <p className="card-text">
                 

                  </p>

                  <ul className="card-meta-list">

                  <li className="card-meta-item">
                      <div className="meta-box">
                        <ion-icon name="time"></ion-icon>

                        <p className="text"><b>PERIOD OF STAY:</b>
                        
                        <span>The period of stay is strictly 4 months. Students are evacuated after 4 months of stay.</span></p>
                      </div>
                    </li>

                   

                  </ul>

                </div>

                <div className="card-price">

                  <div className="wrapper">

                    <p className="reviews">Experience your best, away from home.</p>

                    <div className="card-rating">
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                    </div>

                  </div>

                  <p className="price">
                    
                    <span></span>
                  </p>

                  <button className="btn btn-secondary">Check it Out</button>

                </div>

              </div>
            </li>

            <li>
              <div className="package-card">

                <figure className="card-banner">
                  <img src="assets/images/aryan.jpg" alt="Aryan Hostel" loading="lazy"/>
                </figure>

                <div className="card-content">

                  <h3 className="h3 card-title">Aryan Hostel</h3>

                  <p className="card-text">
                  Aryan Hostel is located in Wandegey-Katanga. It is one of the best hostels in the area with afforda prices.

                  </p>
                  <p className="card-text">
                  
                  
                  </p>

                  <ul className="card-meta-list">

                  <li className="card-meta-item">
                      <div className="meta-box">
                        <ion-icon name="time"></ion-icon>

                        <p className="text"><b>PERIOD OF STAY:</b>
                        
                        <span>The period of stay is based on the University Timetable. Students are evacuated at the end of the semester.</span></p>
                      </div>
                    </li>

                  </ul>

                </div>

                <div className="card-price">

                  <div className="wrapper">

                    <p className="reviews">Secure your booking today to have the best experience. </p>

                    <div className="card-rating">
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                    </div>

                  </div>

                  <p className="price">
    
                    <span></span>
                  </p>

                  <button className="btn btn-secondary">Check it Out</button>

                </div>

              </div>
            </li>

          </ul>

          <button className="btn btn-primary">View All Hostels</button>

        </div>
      </section>





      {/* <!-- 
        - #GALLERY
      --> */}

      <section className="gallery" id="gallery">
        <div className="container">

          <p className="section-subtitle">Hostel Gallery</p>

          <h2 className="h2 section-title">A view of some of the hostels.</h2>

          <p className="section-text">
            You can take look at the view of some of the hostels around, and make your choice.
          </p>

          <ul className="gallery-list">

            <li className="gallery-item">
              <figure className="gallery-image">
                <img src="assets/images/gallery-1.jpg" alt="Gallery image"/>
              </figure>
            </li>

            <li className="gallery-item">
              <figure className="gallery-image">
                <img src="assets/images/gallery-2.jpg" alt="Gallery image"/>
              </figure>
            </li>

            <li className="gallery-item">
              <figure className="gallery-image">
                <img src="assets/images/gallery-3.jpg" alt="Gallery image"/>
              </figure>
            </li>

            <li className="gallery-item">
              <figure className="gallery-image">
                <img src="assets/images/gallery-4.jpg" alt="Gallery image"/>
              </figure>
            </li>

            <li className="gallery-item">
              <figure className="gallery-image">
                <img src="assets/images/gallery-5.jpg" alt="Gallery image"/>
              </figure>
            </li>

          </ul>

          

        </div>
      </section>





      {/* <!-- 
        - #CTA
      --> */}

      <section className="cta" id="contact">
        <div className="container">

          <div className="cta-content">
            <p className="section-subtitle">Call To Action</p>

            <h2 className="h2 section-title">Ready For an Unforgatable Stay with Makerere University!</h2>

            <p className="section-text">
              To access HosteEase | Makerere University, each university student needs to create an account on this platform. You need a University student number to complete the HostelEase | Makerere University account creation process. 
            </p>
          </div>

          <button className="btn btn-secondary">Sign Up !</button>

        </div>
      </section>

    </article>
  </main>





  {/* <!-- 
    - #FOOTER
  --> */}

  <footer className="footer">

    <div className="footer-top">
      <div className="container">

        <div className="footer-brand">

          {/* <a href="#" className="logo">
            <img src="assets/images/" alt="Mak logo"/>
          </a> */}

          <p className="footer-text">
            HostelEase | Makerere University is run by the Office of the Dean of Students, Makerere University. This platform has been set up and updated by the Directorate of ICT Support (DICTS). For more information, contact us via        
            <a href="hostelease@mak.ac.ug" className="contact-link">hostelease@mak.ac.ug</a>
        
          </p>

        </div>

        <div className="footer-contact">

          <h4 className="contact-title">HostelEase | Makerere University</h4>

          <p className="contact-text">
            Wandegeya, Makerere
          </p>

          <ul>

            <li className="contact-item">
              <ion-icon name="call-outline"></ion-icon>

              <a href="tel:+0414542804" className="contact-link">Tel: +0414542804</a>
            </li>

            <li className="contact-item">
              <ion-icon name="mail-outline"></ion-icon>

              <a href="mailto:info.tourly.com" className="contact-link">P.O Box 7062</a>
            </li>

            <li className="contact-item">
              <ion-icon name="location-outline"></ion-icon>

              <address>Kampala, Uganda</address>
            </li>

          </ul>

        </div>

        <div className="footer-form">

          <p className="form-text">
            Subscribe here for any updates & information about HostelEase | Makerere University!
          </p>

          <form action="" className="form-wrapper">
            <input type="email" name="email" className="input-field" placeholder="Enter Your Email" required/>

            <button type="submit" className="btn btn-secondary">Subscribe</button>
          </form>

        </div>

      </div>
    </div>

    <div className="footer-bottom">
      <div className="container">

        <p className="copyright">
          &copy; 2022 <a href="">Makerere University</a>. All rights reserved
        </p>

        <ul className="footer-bottom-list">

          <li>
            <a href="#" className="footer-bottom-link">Privacy Policy</a>
          </li>

          <li>
            <a href="#" className="footer-bottom-link">Terms & Condition</a>
          </li>

          <li>
            <a href="#" className="footer-bottom-link">FAQ</a>
          </li>

        </ul>

      </div>
    </div>

  </footer>





  {/* <!-- 
    - #GO TO TOP
  --> */}

  <a href="#top" className="go-top" data-go-top>
    <ion-icon name="chevron-up-outline"></ion-icon>
  </a>





  {/* <!-- 
    - custom js link
  --> */}
  <script src="assets/js/script.js"></script>

  {/* <!-- 
    - ionicon link
  --> */}
  <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
  <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>

        </Fragment>
    )
}

export default Index;