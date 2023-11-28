import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Nana from "./images/nana.jpg"
import Oly from "./images/olympia.jpg"
import JJ from "./images/jj.jpg"

function Viewallhostels() {
  return (
    <Fragment>
      <section class="package" id="package">
        <div class="container">
          <p class="section-subtitle">Hostel Prices</p>

          <h2 class="h2 section-title">
            Have a clear view of all the hostels available.
          </h2>

          <p class="section-text"></p>

          <ul class="package-list">
            <li>
              <div className="package-card">
                <figure className="card-banner">
                  <img
                    src={Oly}
                    alt="Olympia Hostel"
                    loading="lazy"
                  />
                </figure>

                <div className="card-content">
                  <h3 className="h3 card-title">Olympia Hostel</h3>

                  <p className="card-text">
                    Olympia Hostel is located in Makerere-Kikoni. It is one of
                    the best hostels availabe in Kikoni.
                  </p>
                  <p className="card-text"></p>

                  <ul className="card-meta-list">
                    <li className="card-meta-item">
                      <div className="meta-box">
                        <ion-icon name="time"></ion-icon>

                        <p className="text">
                          <b>PERIOD OF STAY:</b>

                          <span>
                            The Makerere University timetable is followed
                            strictly. Students are evacuated at the end of the
                            semester.
                          </span>
                        </p>
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

                  <p className="price"></p>
                  <p className="price"></p>

                  <Link to={"/display"}>
                    <button className="btn btn-secondary">Check it Out</button>
                  </Link>
                </div>
              </div>
            </li>

            <li>
              <div className="package-card">
                <figure className="card-banner">
                  <img
                    src={Nana}
                    alt="New Nana Hostel"
                    loading="lazy"
                  />
                </figure>

                <div className="card-content">
                  <h3 className="h3 card-title">New Nana Hostel</h3>

                  <p className="card-text">Shs. 1.8m - A single room</p>
                  <p className="card-text">
                    New Nana Hostel is located in Makerere-Kagugube. It is a
                    very affordable and unique hostel.
                  </p>
                  <p className="card-text"></p>

                  <ul className="card-meta-list">
                    <li className="card-meta-item">
                      <div className="meta-box">
                        <ion-icon name="time"></ion-icon>

                        <p className="text">
                          <b>PERIOD OF STAY:</b>

                          <span>
                            The period of stay is strictly 4 months. Students
                            are evacuated after 4 months of stay.
                          </span>
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="card-price">
                  <div className="wrapper">
                    <p className="reviews">
                      Experience your best, away from home.
                    </p>

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

                  <Link to={"/display"}>
                    <button className="btn btn-secondary">Check it Out</button>
                  </Link>
                </div>
              </div>
            </li>

            <li>
              <div className="package-card">
                <figure className="card-banner">
                  <img
                    src="assets/images/packege-3.jpg"
                    alt="Aryan Hostel"
                    loading="lazy"
                  />
                </figure>

                <div className="card-content">
                  <h3 className="h3 card-title">Aryan Hostel</h3>

                  <p className="card-text">
                    Aryan Hostel is located in Wandegey-Katanga. It is one of
                    the best hostels in the area with afforda prices.
                  </p>
                  <p className="card-text"></p>

                  <ul className="card-meta-list">
                    <li className="card-meta-item">
                      <div className="meta-box">
                        <ion-icon name="time"></ion-icon>

                        <p className="text">
                          <b>PERIOD OF STAY:</b>

                          <span>
                            The period of stay is based on the University
                            Timetable. Students are evacuated at the end of the
                            semester.
                          </span>
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="card-price">
                  <div className="wrapper">
                    <p className="reviews">
                      Secure your booking today to have the best experience.{" "}
                    </p>

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

                  <Link to={"/display"}>
                    <button className="btn btn-secondary">Check it Out</button>
                  </Link>
                </div>
              </div>
            </li>

            <li>
              <div className="package-card">
                <figure className="card-banner">
                  <img
                    src={JJ}
                    alt="JJ Hostel"
                    loading="lazy"
                  />
                </figure>

                <div className="card-content">
                  <h3 className="h3 card-title">JJ Hostel</h3>

                  <p className="card-text">
                    JJ Hostel is located in Kikoni, next to Nakiyinji Hostel. It
                    has a very nice view of the Kikoni area.
                  </p>
                  <p className="card-text"></p>

                  <ul className="card-meta-list">
                    <li className="card-meta-item">
                      <div className="meta-box">
                        <ion-icon name="time"></ion-icon>

                        <p className="text">
                          <b>PERIOD OF STAY:</b>

                          <span>
                            The Makerere University timetable is followed
                            strictly. Students are evacuated at the end of the
                            semester.
                          </span>
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="card-price">
                  <div className="wrapper">
                    <p className="reviews">You are welcome.</p>

                    <div className="card-rating">
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                    </div>
                  </div>

                  <p className="price"></p>
                  <p className="price"></p>

                  <Link to={"/display"}>
                    <button className="btn btn-secondary">Check it Out</button>
                  </Link>
                </div>
              </div>
            </li>

            <li>
              <div className="package-card">
                <figure className="card-banner">
                  <img
                    src="assets/images/packege-1.jpg"
                    alt="Lady Juliana Hostel"
                    loading="lazy"
                  />
                </figure>

                <div className="card-content">
                  <h3 className="h3 card-title">Lady Juliana Hostel</h3>

                  <p className="card-text">
                    Lady Juliana Hostel is located in Makerere-Kikoni, opposite
                    Olympia Hostel. It is a hostel for females only.
                  </p>
                  <p className="card-text"></p>

                  <ul className="card-meta-list">
                    <li className="card-meta-item">
                      <div className="meta-box">
                        <ion-icon name="time"></ion-icon>

                        <p className="text">
                          <b>PERIOD OF STAY:</b>

                          <span>
                            The Makerere University timetable is followed
                            strictly. Students are evacuated at the end of the
                            semester.
                          </span>
                        </p>
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

                  <p className="price"></p>
                  <p className="price"></p>

                  <button className="btn btn-secondary">Check it out.</button>
                </div>
              </div>
            </li>

            <li>
              <div className="package-card">
                <figure className="card-banner">
                  <img
                    src="assets/images/packege-2.jpg"
                    alt="Nakiyinji Hostel"
                    loading="lazy"
                  />
                </figure>

                <div className="card-content">
                  <h3 className="h3 card-title">Nakiyinji Hostel</h3>

                  <p className="card-text">
                    Nakiyinji Hostel is located in Kikoni, next to JJ Hostel. It
                    has a very nice view of the Kikoni area.
                  </p>
                  <p className="card-text"></p>
                  <p className="card-text"></p>

                  <ul className="card-meta-list">
                    <li className="card-meta-item">
                      <div className="meta-box">
                        <ion-icon name="time"></ion-icon>

                        <p className="text">
                          <b>PERIOD OF STAY:</b>

                          <span>
                            The period of stay is strictly 4 months. Students
                            are evacuated after 4 months of stay.
                          </span>
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="card-price">
                  <div className="wrapper">
                    <p className="reviews">
                      Experience your best, away from home.
                    </p>

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

                  <Link to={"/display"}>
                    <button className="btn btn-secondary">Check it Out</button>
                  </Link>
                </div>
              </div>
            </li>

            <li>
              <div className="package-card">
                <figure className="card-banner">
                  <img
                    src="assets/images/packege-3.jpg"
                    alt="Braetd Hostel"
                    loading="lazy"
                  />
                </figure>

                <div className="card-content">
                  <h3 className="h3 card-title"> Braetd Hostel</h3>

                  <p className="card-text">
                    Braetd Hostel is located in Wandegeya-Katanga, opposite
                    Aryan Hostel. It is a hostel for females only.
                  </p>
                  <p className="card-text"></p>

                  <ul className="card-meta-list">
                    <li className="card-meta-item">
                      <div className="meta-box">
                        <ion-icon name="time"></ion-icon>

                        <p className="text">
                          <b>PERIOD OF STAY:</b>

                          <span>
                            The period of stay is based on the University
                            Timetable. Students are evacuated at the end of the
                            semester.
                          </span>
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="card-price">
                  <div className="wrapper">
                    <p className="reviews">
                      Secure your booking today to have the best experience.{" "}
                    </p>

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

                  <Link to={"/display"}>
                    <button className="btn btn-secondary">Check it Out</button>
                  </Link>
                </div>
              </div>
            </li>

            <li>
              <div className="package-card">
                <figure className="card-banner">
                  <img
                    src="assets/images/packege-1.jpg"
                    alt="Kasamba Hostel"
                    loading="lazy"
                  />
                </figure>

                <div className="card-content">
                  <h3 className="h3 card-title">Kasamba Hostel</h3>

                  <p className="card-text">
                    Kasamba Hostel is located in Kikumi-kikumi area in Makerere.
                    It is very affordable and one of te closest to campus.
                  </p>
                  <p className="card-text"></p>

                  <ul className="card-meta-list">
                    <li className="card-meta-item">
                      <div className="meta-box">
                        <ion-icon name="time"></ion-icon>

                        <p className="text">
                          <b>PERIOD OF STAY:</b>

                          <span>
                            The Makerere University timetable is followed
                            strictly. Students are evacuated at the end of the
                            semester.
                          </span>
                        </p>
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

                  <p className="price"></p>
                  <p className="price"></p>

                  <Link to={"/display"}>
                    <button className="btn btn-secondary">Check it Out</button>
                  </Link>
                </div>
              </div>
            </li>

            <li>
              <div className="package-card">
                <figure className="card-banner">
                  <img
                    src="assets/images/packege-1.jpg"
                    alt="Helican Hostel"
                    loading="lazy"
                  />
                </figure>

                <div className="card-content">
                  <h3 className="h3 card-title">Helican Hostel</h3>

                  <p className="card-text">
                    Kasamba Hostel is located in Kikumi-kikumi area in Makerere.
                    It is very affordable and one of te closest to campus.
                  </p>
                  <p className="card-text"></p>

                  <ul className="card-meta-list">
                    <li className="card-meta-item">
                      <div className="meta-box">
                        <ion-icon name="time"></ion-icon>

                        <p className="text">
                          <b>PERIOD OF STAY:</b>

                          <span>
                            The Makerere University timetable is followed
                            strictly. Students are evacuated at the end of the
                            semester.
                          </span>
                        </p>
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

                  <p className="price"></p>
                  <p className="price"></p>

                  <Link to={"/display"}>
                    <button className="btn btn-secondary">Check it Out</button>
                  </Link>
                </div>
              </div>
            </li>

            <li>
              <div className="package-card">
                <figure className="card-banner">
                  <img
                    src="assets/images/packege-2.jpg"
                    alt="JB Hostel"
                    loading="lazy"
                  />
                </figure>

                <div className="card-content">
                  <h3 className="h3 card-title">JB Hostel</h3>

                  <p className="card-text">
                    JB Hostel is located in Wandegeya-Katanga area, next to
                    Aryan Hostel. This hostel is mostly occupied by Medical
                    students.
                  </p>
                  <p className="card-text"></p>
                  <p className="card-text"></p>

                  <ul className="card-meta-list">
                    <li className="card-meta-item">
                      <div className="meta-box">
                        <ion-icon name="time"></ion-icon>

                        <p className="text">
                          <b>PERIOD OF STAY:</b>

                          <span>
                            The period of stay is strictly 4 months. Students
                            are evacuated after 4 months of stay.
                          </span>
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="card-price">
                  <div className="wrapper">
                    <p className="reviews">
                      Experience your best, away from home.
                    </p>

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

                  <Link to={"/display"}>
                    <button className="btn btn-secondary">Check it Out</button>
                  </Link>
                </div>
              </div>
            </li>

            <li>
              <div className="package-card">
                <figure className="card-banner">
                  <img
                    src="assets/images/packege-3.jpg"
                    alt="Maimood Hostel"
                    loading="lazy"
                  />
                </figure>

                <div className="card-content">
                  <h3 className="h3 card-title">Maimood Hostel</h3>

                  <p className="card-text">
                    Maimood Hostel is located in Wandegeya-Katanga area, next to
                    JB Hostel. This hostel is very affordable and popular for
                    hosting medical students.
                  </p>
                  <p className="card-text"></p>

                  <ul className="card-meta-list">
                    <li className="card-meta-item">
                      <div className="meta-box">
                        <ion-icon name="time"></ion-icon>

                        <p className="text">
                          <b>PERIOD OF STAY:</b>

                          <span>
                            The period of stay is based on the University
                            Timetable. Students are evacuated at the end of the
                            semester.
                          </span>
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="card-price">
                  <div className="wrapper">
                    <p className="reviews">
                      Secure your booking today to have the best experience.{" "}
                    </p>

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

                  <Link to={"/display"}>
                    <button className="btn btn-secondary">Check it Out</button>
                  </Link>
                </div>
              </div>
            </li>

            <li>
              <div className="package-card">
                <figure className="card-banner">
                  <img
                    src="assets/images/packege-1.jpg"
                    alt="God is Able"
                    loading="lazy"
                  />
                </figure>

                <div className="card-content">
                  <h3 className="h3 card-title">God is Able Hostel.</h3>

                  <p className="card-text">
                    God is Able is located in Makerere-Kikoni area. This hostel
                    is nice and has affordable prices.
                  </p>
                  <p className="card-text"></p>

                  <ul className="card-meta-list">
                    <li className="card-meta-item">
                      <div className="meta-box">
                        <ion-icon name="time"></ion-icon>

                        <p className="text">
                          <b>PERIOD OF STAY:</b>

                          <span>
                            The Makerere University timetable is followed
                            strictly. Students are evacuated at the end of the
                            semester.
                          </span>
                        </p>
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

                  <p className="price"></p>
                  <p className="price"></p>

                  <Link to={"/display"}>
                    <button className="btn btn-secondary">Check it Out</button>
                  </Link>
                </div>
              </div>
            </li>

            <li>
              <div className="package-card">
                <figure className="card-banner">
                  <img
                    src="assets/images/packege-1.jpg"
                    alt="MISH"
                    loading="lazy"
                  />
                </figure>

                <div className="card-content">
                  <h3 className="h3 card-title">
                    Makerere International Students Hostel
                  </h3>

                  <p className="card-text">
                    Makerere International Students Hostel is located in
                    Makerere-Kikoni, close to Lady Juliana Hostel. This hostel
                    welcomes all kinds of International students.
                  </p>
                  <p className="card-text"></p>

                  <ul className="card-meta-list">
                    <li className="card-meta-item">
                      <div className="meta-box">
                        <ion-icon name="time"></ion-icon>

                        <p className="text">
                          <b>PERIOD OF STAY:</b>

                          <span>
                            The Makerere University timetable is followed
                            strictly. Students are evacuated at the end of the
                            semester.
                          </span>
                        </p>
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

                  <p className="price"></p>
                  <p className="price"></p>

                  <Link to={"/display"}>
                    <button className="btn btn-secondary">Check it Out</button>
                  </Link>
                </div>
              </div>
            </li>

            <li>
              <div className="package-card">
                <figure className="card-banner">
                  <img
                    src="assets/images/packege-2.jpg"
                    alt="Nalikka Hostel"
                    loading="lazy"
                  />
                </figure>

                <div className="card-content">
                  <h3 className="h3 card-title">Nalikka Hostel</h3>

                  <p className="card-text">
                    Nalikka Hostel is located in Makerere-Kikoni. This is one of
                    the commonest and closest hostels to campus from Kikoni area
                  </p>
                  <p className="card-text"></p>
                  <p className="card-text"></p>

                  <ul className="card-meta-list">
                    <li className="card-meta-item">
                      <div className="meta-box">
                        <ion-icon name="time"></ion-icon>

                        <p className="text">
                          <b>PERIOD OF STAY:</b>

                          <span>
                            The period of stay is strictly 4 months. Students
                            are evacuated after 4 months of stay.
                          </span>
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="card-price">
                  <div className="wrapper">
                    <p className="reviews">
                      Experience your best, away from home.
                    </p>

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

                  <Link to={"/display"}>
                    <button className="btn btn-secondary">Check it Out</button>
                  </Link>
                </div>
              </div>
            </li>

            <li>
              <div className="package-card">
                <figure className="card-banner">
                  <img
                    src="assets/images/packege-3.jpg"
                    alt="Dreamworld Hostel"
                    loading="lazy"
                  />
                </figure>

                <div className="card-content">
                  <h3 className="h3 card-title">Dreamworld Hostel</h3>

                  <p className="card-text">
                    Dreamword Hostel is located in Makerere-Kikoni. Dreamword
                    Hostel is one of the mos comfortable hostels around with
                    very affordable prices.
                  </p>
                  <p className="card-text"></p>

                  <ul className="card-meta-list">
                    <li className="card-meta-item">
                      <div className="meta-box">
                        <ion-icon name="time"></ion-icon>

                        <p className="text">
                          <b>PERIOD OF STAY:</b>

                          <span>
                            The period of stay is based on the University
                            Timetable. Students are evacuated at the end of the
                            semester.
                          </span>
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="card-price">
                  <div className="wrapper">
                    <p className="reviews">
                      Secure your booking today to have the best experience.{" "}
                    </p>

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

                  <Link to={"/display"}>
                    <button className="btn btn-secondary">Check it Out</button>
                  </Link>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-top">
          <div className="container">
            <div className="footer-brand">
              <a href="#" className="logo">
                <img src="assets/images/logo.svg" alt="Tourly logo" />
              </a>

              <p className="footer-text">
                HostelEase | Makerere University is run by the Office of the
                Dean of Students, Makerere University. This platform has been
                set up and updated by the Directorate of ICT Support (DICTS).
                For more information, contact us via
                <a href="hostelease@mak.ac.ug" className="contact-link">
                  hostelease@mak.ac.ug
                </a>
              </p>
            </div>

            <div className="footer-contact">
              <h4 className="contact-title">
                HostelEase | Makerere University
              </h4>

              <p className="contact-text">Wandegeya, Makerere</p>

              <ul>
                <li className="contact-item">
                  <ion-icon name="call-outline"></ion-icon>

                  <a href="tel:+0414542804" className="contact-link">
                    Tel: +0414542804
                  </a>
                </li>

                <li className="contact-item">
                  <ion-icon name="mail-outline"></ion-icon>

                  <a href="mailto:info.tourly.com" className="contact-link">
                    P.O Box 7062
                  </a>
                </li>

                <li className="contact-item">
                  <ion-icon name="location-outline"></ion-icon>

                  <address>Kampala, Uganda</address>
                </li>
              </ul>
            </div>

            <div className="footer-form">
              <p className="form-text">
                Subscribe here for any updates & information about HostelEase |
                Makerere University!
              </p>

              <form action="" className="form-wrapper">
                <input
                  type="email"
                  name="email"
                  className="input-field"
                  placeholder="Enter Your Email"
                  required
                />

                <button type="submit" className="btn btn-secondary">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container">
            <p className="copyright">
              &copy; 2022 <a href="">Makerere University</a>. All rights
              reserved
            </p>

            <ul className="footer-bottom-list">
              <li>
                <a href="#" className="footer-bottom-link">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="#" className="footer-bottom-link">
                  Terms & Condition
                </a>
              </li>

              <li>
                <a href="#" className="footer-bottom-link">
                  FAQ
                </a>
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
      <script
        type="module"
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
      ></script>
      <script
        nomodule
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
      ></script>
    </Fragment>
  );
}

export default Viewallhostels;
