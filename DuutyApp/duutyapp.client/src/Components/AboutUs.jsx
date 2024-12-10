const AboutUs = () => {
  return (
    <div className="container py-5 about-us-bg">
      <h1 className="text-center mb-4">About Us</h1>
      <div className="row">
        {/* Our Mission Section */}
        <div className="col-12 col-md-6 mb-4">
          <h2>Our Mission</h2>
          <p className="text-justify">
            Our mission is to provide high-quality products and services that enhance the lives of our customers. We strive to continuously innovate and exceed expectations.
          </p>
        </div>
        {/* Our Values Section */}
        <div className="col-12 col-md-6 mb-4">
          <h2>Our Values</h2>
          <ul>
            <li>Integrity</li>
            <li>Innovation</li>
            <li>Customer Satisfaction</li>
            <li>Excellence</li>
          </ul>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-12">
          <h2>What We Do</h2>
          <p className="text-justify">
            We offer a wide range of products, including state-of-the-art software solutions, advanced tools, and dedicated customer support. Our team is passionate about making technology accessible and useful.
          </p>
        </div>
      </div>

      <div className="row mt-4">
        {/* Contact Us Section */}
        <div className="col-12 col-md-6 mb-4">
          <h3>Contact Us</h3>
          <p className="text-justify">
            Reach out to us via our support page or send us an email at support@company.com for any inquiries.
          </p>
        </div>
        {/* Join Our Team Section */}
        <div className="col-12 col-md-6 mb-4">
          <h3>Join Our Team</h3>
          <p className="text-justify">
            We are always looking for talented individuals to join our team. Check out our careers page for current openings.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
