import { NavLink } from "react-router-dom";
import {Input} from "reactstrap";
// import { useTranslation } from "../translations/TranslationHook";

import HeroCarousel1 from "../assets/img/hero-carousel/hero-carousel-1.jpg";
import HeroCarousel2 from "../assets/img/hero-carousel/hero-carousel-2.jpg";
import HeroCarousel3 from "../assets/img/hero-carousel/hero-carousel-3.jpg";
import CustomSwiper from "./CustomSwiper";

// Import images directly
import Gallery1 from "../assets/img/gallery/gallery-1.jpg";
import Gallery2 from "../assets/img/gallery/gallery-2.jpg";
import Gallery3 from "../assets/img/gallery/gallery-3.jpg";
import Gallery4 from "../assets/img/gallery/gallery-4.jpg";
import Gallery5 from "../assets/img/gallery/gallery-5.jpg";
import Gallery6 from "../assets/img/gallery/gallery-6.jpg";
import Gallery7 from "../assets/img/gallery/gallery-7.jpg";
import Gallery8 from "../assets/img/gallery/gallery-8.jpg";

const Home = () => {
  // const { t } = useTranslation();

  const galleryImages = [
    Gallery1,
    Gallery2,
    Gallery3,
    Gallery4,
    Gallery5,
    Gallery6,
    Gallery7,
    Gallery8,
  ];

  const testimonials = [
    "He is a good supplier",
    "He is a good provider",
    "the Job is very professional",
    "He is a good supplier",
    "He is a good provider",
    "the Job is very professional",
  ];

  return (
    <div>
      <main className="main">
        {/* <!-- Hero Section --> */}
        <section id="hero" className="hero section">
          <div
            id="hero-carousel"
            className="carousel slide carousel-fade"
            data-bs-ride="carousel"
            data-bs-interval="5000"
          >
            <div className="carousel-item active">
              <img src={HeroCarousel1} alt="" />
              <div className="container">
                <div className="job-search-form">
                  <form>
                    <div className="row">
                      <div className="col-lg-5 col-md-6 col-xs-12">
                        <div className="form-group">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Job Title or Company Name"
                          />
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6 col-xs-12">
                        <div className="form-group">
                          <div className="search-category-container">
                            <label className="styled-select">
                              <select>
                                <option value="none">Locations</option>
                                <option value="none">Chennai</option>
                                <option value="none">Hyderabad</option>
                                <option value="none">Mumbai</option>
                                <option value="none">Kolkata</option>
                                <option value="none">Jaipur</option>
                                <option value="none">Udaipur</option>
                              </select>
                            </label>
                          </div>
                          <i className="lni-map-marker"></i>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6 col-xs-12">
                        <div className="form-group">
                          <div className="search-category-container">
                            <label className="styled-select">
                              <select>
                                <option>All Categories</option>
                                <option>Sous chef</option>
                                <option>Busser</option>
                                <option>Cashier</option>
                                <option>Dishwasher</option>
                                <option>Chef de partie</option>
                                <option>Cook</option>
                                <option>Executive Chef</option>
                                <option>Fast food cook</option>
                              </select>
                            </label>
                          </div>
                          <i className="lni-layers"></i>
                        </div>
                      </div>
                      <div className="col-lg-1 col-md-6 col-xs-12">
                        <NavLink to="#about" className="btn-get-started">
                          Search
                        </NavLink>
                        {/* <!-- <button type="submit" className="button"><i className="lni-search"></i></button>--> */}
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/* <!-- End Carousel Item --> */}

            <div className="carousel-item">
              <img src={HeroCarousel2} alt="" />
              <div className="container">
                <div className="job-search-form">
                  <form>
                    <div className="row">
                      <div className="col-lg-5 col-md-6 col-xs-12">
                        <div className="form-group">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Job Title or Company Name"
                          />
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6 col-xs-12">
                        <div className="form-group">
                          <div className="search-category-container">
                            <label className="styled-select">
                              <select>
                                <option value="none">Locations</option>
                                <option value="none">Chennai</option>
                                <option value="none">Hyderabad</option>
                                <option value="none">Mumbai</option>
                                <option value="none">Kolkata</option>
                                <option value="none">Jaipur</option>
                                <option value="none">Udaipur</option>
                              </select>
                            </label>
                          </div>
                          <i className="lni-map-marker"></i>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6 col-xs-12">
                        <div className="form-group">
                          <div className="search-category-container">
                            <label className="styled-select">
                              <select>
                                <option>All Categories</option>
                                <option>Sous chef</option>
                                <option>Busser</option>
                                <option>Cashier</option>
                                <option>Dishwasher</option>
                                <option>Chef de partie</option>
                                <option>Cook</option>
                                <option>Executive Chef</option>
                                <option>Fast food cook</option>
                              </select>
                            </label>
                          </div>
                          <i className="lni-layers"></i>
                        </div>
                      </div>
                      <div className="col-lg-1 col-md-6 col-xs-12">
                        <NavLink to="#about" className="btn-get-started">
                          Search
                        </NavLink>
                        {/* <!-- <button type="submit" className="button"><i className="lni-search"></i></button>--> */}
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* <!-- End Carousel Item --> */}
          </div>
        </section>
        {/* <!-- /Hero Section --> */}

        <br />

        {/* <!-- Call To Action Section --> */}
        <section
          id="call-to-action"
          className="call-to-action section accent-background"
        >
          <div className="container">
            <div
              className="row justify-content-center"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div className="col-xl-10">
                <div className="text-center">
                  <h3>Join Our Team</h3>
                  <p>
                    We are always looking for talented individuals to join our
                    team. If you are passionate about technology and want to
                    make a difference, we would love to hear from you.
                  </p>
                  {/* <!-- <NavLink className="cta-btn" to="#appointment"></NavLink> --> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- /Call To Action Section --> */}

        {/* <!-- Appointment Section --> */}
        <section
          id="appointment"
          className="appointment section light-background"
        >
          {/* <!-- Section Title --> */}
          <div className="container section-title" data-aos="fade-up">
            <h2>MAKE AN APPOINTMENT</h2>
          </div>
          {/* <!-- End Section Title --> */}

          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <form
              className="php-email-form"
              onSubmit={() => alert("Form submitted")}
            >
              <div className="row">
                <div className="col-md-4 form-group">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                    required=""
                  />
                </div>
                <div className="col-md-4 form-group mt-3 mt-md-0">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    required=""
                  />
                </div>
                <div className="col-md-4 form-group mt-3 mt-md-0">
                  <input
                    type="tel"
                    className="form-control"
                    name="phone"
                    id="phone"
                    placeholder="Your Phone"
                    required=""
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 form-group mt-3">
                  <input
                    type="datetime-local"
                    name="date"
                    className="form-control datepicker"
                    id="date"
                    placeholder="Appointment Date"
                    required=""
                  />
                </div>
                <div className="col-md-4 form-group mt-3">
                  <select
                    name="department"
                    id="department"
                    className="form-select"
                    required=""
                  >
                    <option value="">Select Department</option>
                    <option value="Department 1">Department 1</option>
                    <option value="Department 2">Department 2</option>
                    <option value="Department 3">Department 3</option>
                  </select>
                </div>
                <div className="col-md-4 form-group mt-3">
                  <select
                    name="doctor"
                    id="doctor"
                    className="form-select"
                    required=""
                  >
                    <option value="">Select Restarent </option>
                    <option value="Doctor 1">Restarent 1</option>
                    <option value="Doctor 2">Restarent 2</option>
                    <option value="Doctor 3">Restarent 3</option>
                  </select>
                </div>
              </div>

              <div className="form-group mt-3">
                <textarea
                  className="form-control"
                  name="message"
                  rows="5"
                  placeholder="Message (Optional)"
                ></textarea>
              </div>
              <div className="mt-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">
                  Your appointment request has been sent successfully. Thank
                  you!
                </div>
                <div className="text-center">
                  <button type="submit">Make an Appointment</button>
                </div>
              </div>
            </form>
          </div>
        </section>
        {/* <!-- /Appointment Section --> */}

        {/* <!-- Testimonials Section --> */}
        <section id="testimonials" className="testimonials section">
          {/* <!-- Section Title --> */}
          <div className="container section-title" data-aos="fade-up">
            <h2>Testimonials</h2>
          </div>
          {/* <!-- End Section Title --> */}

          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <CustomSwiper
              data-speed="600"
              data-delay="5000"
              data-breakpoints='{ "320": { "slidesPerView": 1, "spaceBetween": 40 }, "1200": { "slidesPerView": 3, "spaceBetween": 40 } }'
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="testimonial-item">
                  <p>
                    <i className="bi bi-quote quote-icon-left"></i>
                    <span>{testimonial}</span>
                    <i className="bi bi-quote quote-icon-right"></i>
                  </p>
                </div>
              ))}
            </CustomSwiper>
            <div className="swiper-pagination"></div>
          </div>
        </section>
        {/* <!-- /Testimonials Section --> */}

        {/* <!-- Gallery Section --> */}
        <section id="gallery" className="gallery section">
          {/* <!-- Section Title --> */}
          <div className="container section-title" data-aos="fade-up">
            <h2>Our Clients</h2>
          </div>
          {/* <!-- End Section Title --> */}

          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <CustomSwiper
              data-speed="600"
              data-delay="5000"
              data-breakpoints='{ "320": { "slidesPerView": 1, "spaceBetween": 40 }, "1200": { "slidesPerView": 3, "spaceBetween": 40 } }'
            >
              {galleryImages.map((image, index) => (
                <div className="swiper-slide" key={index}>
                  <img
                    src={image}
                    className="img-fluid"
                    alt={`Gallery ${index + 1}`}
                  />
                </div>
              ))}
            </CustomSwiper>
          </div>
        </section>
        {/* <!-- /Gallery Section --> */}
      </main>
    </div>
  );
};

export default Home;
