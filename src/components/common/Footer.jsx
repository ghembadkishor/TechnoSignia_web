import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
      <div className="footer-inner">

        {/* BRAND */}
        <div className="footer-col brand">
          <h2 className="brand-name">
            <span className="brand-techno">Techno</span>
            <span className="brand-signia">Signia</span>
          </h2>
          <p className="brand-tagline">
            Building careers, not just courses.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/courses">Courses</a></li>
            <li><a href="/placement">Placement</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* COURSES */}
        <div className="footer-col">
          <h4>Top Courses</h4>
          <ul>
            <li><a href="/courses">Java Full Stack</a></li>
            <li><a href="/courses">MERN Stack</a></li>
            <li><a href="/courses">Software Testing</a></li>
            <li><a href="/courses">Python Full Stack</a></li>
            <li><a href="/courses">Cyber Security</a></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-col">
          <h4>Contact</h4>
          <p>📍 21 Squre Gujjar nagar laxman nagar pune , maharasta , India</p>
          <p>📞 +91 9XXXXXXXXX</p>
          <p>📧 admin@technosignia.com</p>
          <p className="iso">ISO Certified Institute</p>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} TechnoSignia. All Rights Reserved.
      </div>
      </div>
    </footer>
  );
};

export default Footer;
