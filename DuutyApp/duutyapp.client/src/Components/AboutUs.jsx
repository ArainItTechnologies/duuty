const AboutUs = () => {
  return (
    <div className="container py-5 about-us-bg">
      <h1 className="text-center mb-4">About Us</h1>
      <div className="section-container">
        {/* Our Mission Section */}
        <div className="section">
          <h2>Our Mission</h2>
          <p className="text-justify">
            Our mission is to provide high-quality products and services that enhance the lives of our customers. We strive to continuously innovate and exceed expectations.
          </p>
        </div>
        {/* Our Values Section */}
        <div className="section">
          <h2>Our Values</h2>
          <ul>
            <li>Integrity</li>
            <li>Innovation</li>
            <li>Customer Satisfaction</li>
            <li>Excellence</li>
          </ul>
        </div>
        {/* What We Do Section */}
        <div className="section">
          <h2>What We Do</h2>
          <p className="text-justify">
            We offer a wide range of products, including state-of-the-art software solutions, advanced tools, and dedicated customer support. Our team is passionate about making technology accessible and useful.
          </p>
        </div>
        {/* Contact Us Section */}
        <div className="section">
          <h2>Contact Us</h2>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" className="form-control" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" className="form-control" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" className="form-control" rows="4" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
        {/* Join Our Team Section */}
        <div className="section">
          <h2>Join Our Team</h2>
          <p className="text-justify">
            We are always looking for talented individuals to join our team. If you are passionate about technology and want to make a difference, we would love to hear from you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;