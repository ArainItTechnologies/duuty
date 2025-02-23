import About from "../assets/img/about.jpg";
const AboutUs = () => {
    return (<section id="about" className="about section">

      <div className="container section-title" data-aos="fade-up">
        <h2>About Us<br/></h2>
        <p></p>
      </div>

      <div className="container">

        <div className="row gy-4">
          <div className="col-lg-6 position-relative align-self-start" data-aos="fade-up" data-aos-delay="100">
            <img src={About} className="img-fluid" alt=""/>
           
          </div>
          <div className="col-lg-6 content" data-aos="fade-up" data-aos-delay="200">
            <h3>Our Mission</h3>
          
            <ul>
              <li><i className="bi bi-check2-all"></i> <span>Our mission is to provide high-quality products and services that enhance the lives of our customers. We strive to continuously innovate and exceed expectations..</span></li>
             
            </ul>
            <h3>Our Mission</h3>
			  <ul>
				 <li><i className="bi bi-check2-all"></i> <span>Integrity</span></li>
              <li><i className="bi bi-check2-all"></i> <span>Innovation</span></li>
			   <li><i className="bi bi-check2-all"></i> <span>Customer Satisfaction</span></li>
			    <li><i className="bi bi-check2-all"></i> <span>Excellence</span></li>
				</ul>
			<h3>What We Do</h3>
          
            <ul>
              <li><i className="bi bi-check2-all"></i> <span>We offer a wide range of products, including state-of-the-art software solutions, advanced tools, and dedicated customer support.</span></li>
              <li><i className="bi bi-check2-all"></i> <span>Our team is passionate about making technology accessible and useful.</span></li>
              
            </ul>
          </div>
        </div>

      </div>

    </section>)
};

export default AboutUs;