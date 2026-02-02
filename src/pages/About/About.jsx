import { FaLinkedinIn, FaInstagram, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import { aboutData } from "../../data/aboutData";
import { reviewsData } from "../../data/reviewsData";
import { useNavigate } from "react-router-dom";

import "./about.css";
const About = ({ onOpenModal }) => {

  const navigate = useNavigate();   // ✅ MUST be inside component

  const { hero, whoWeAre, founder, timeline, whyUs, stats } = aboutData;

  return (
    <div className="about-page">

      {/* ================= HERO ================= */}
      <motion.section
        className="about-hero"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
      >

        {/* LEFT */}
        <div className="hero-left">

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false }}
          >
            Empowering Minds <br />
            <span>Igniting Careers 🚀</span>
          </motion.h1>

          <p className="hero-sub">
            We don’t just teach coding. We build industry-ready engineers
            with real placements.
          </p>

          {/* 🔥 BUTTONS FIXED */}
          <div className="hero-actions">

            <button
              className="talking-btn primary-btn"
              onClick={() => navigate("/courses")}
            >
              Explore Courses
            </button>

            <button
              className="talking-btn secondary-btn"
              onClick={onOpenModal}
            >
              Talk to Counsellor
            </button>

          </div>

          {/* STATS */}
          <div className="hero-stats">
            <div className="stat-item"><span>🎓</span><p>10,000+ Placed</p></div>
            <div className="stat-item"><span>💼</span><p>75% Placement</p></div>
            <div className="stat-item"><span>🏆</span><p>₹20 LPA Highest</p></div>
          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="hero-right">

          <motion.img
            src="/hero/institute.jpg"
            alt="Institute"
            className="hero-img"
            initial={{ opacity: 0, x: 80, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: false }}
          />

          <div className="glow glow1"></div>
          <div className="glow glow2"></div>
        </div>

      </motion.section>



      {/* WHO WE ARE */}
      <section className="about-section">
        <h2>Who We Are</h2>
        <p>{whoWeAre.text}</p>
      </section>

      {/* ================= FOUNDER ================= */}
      <section className="about-section founder">
        <h2>Founder & Vision</h2>

        <div className="founder-grid">
          {/* PHOTO */}
          <motion.div
  className="founder-photo"
  initial={{ opacity: 0, scale: 0.9 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: false }}
>
  <img
    src="/founder/mallinath-paratnale.jpg"
    alt="Mr. Mallinath Maruti Paratnale"
  />

  <span className="verified">✔ Industry Expert</span>

  {/* SOCIAL LINKS */}
  <div className="founder-socials">

  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/in/mallinath-paratnale-ba0030130/"
    target="_blank"
    rel="noopener noreferrer"
    title="LinkedIn"
  >
    <FaLinkedinIn />
  </a>

  {/* Instagram */}
  <a
    href="https://www.instagram.com/itsmallinath/"
    target="_blank"
    rel="noopener noreferrer"
    title="Instagram"
  >
    <FaInstagram />
  </a>

  {/* Email */}
  <a
    href="mailto:info@technosignia.in"
    title="Email"
  >
    <FaEnvelope />
  </a>

</div>

</motion.div>


          {/* INFO */}
          <motion.div
            className="founder-info"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
          >
            <h3>{founder.name}</h3>
            <p className="founder-tagline">
  “Building industry-ready developers, not just degree holders.”
</p>

            <span className="role">{founder.role}</span>

            <p className="bio">{founder.bio}</p>

            <ul className="credentials">
              <li>Senior Software Engineer – Visa</li>
              <li>Founder – Starcentauri Technologies</li>
              <li>Director – HumanCloud Technologies</li>
              <li>Ex: MasterCard, Avaya, Teradici</li>
            </ul>

            {founder.philosophy.map((q, i) => (
              <blockquote key={i}>{q}</blockquote>
            ))}
          </motion.div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="about-section">
        <h2>Our Growth Journey</h2>
        <div className="timeline">
          {timeline.map((item, i) => (
            <div key={i} className="timeline-item">
              <span className="year">{item.year}</span>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="about-section alt">
        <h2>Why Technosignia</h2>
        <div className="why-grid">
          {whyUs.map((item, i) => (
            <div key={i} className="why-card">{item}</div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="about-section stats">
        {stats.map((s, i) => (
          <div key={i} className="stat">
            <h3>{s.value}</h3>
            <p>{s.label}</p>
          </div>
        ))}
      </section>

      {/* ================= REVIEWS (FINAL) ================= */}
      <section className="about-section reviews">
        <h2>Student Reviews</h2>
        <p className="review-sub">
          ⭐⭐⭐⭐⭐ <strong>EXCELLENT</strong> — Based on {reviewsData.totalReviews}+ Google Reviews
        </p>

        <div className="marquee">
          <div className="marquee-track">
            {[...reviewsData.reviews, ...reviewsData.reviews].map((r, i) => (
              <ReviewCard key={i} name={r.name} text={r.text} />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

/* ================= REVIEW CARD ================= */

const ReviewCard = ({ name, text }) => {
  return (
    <motion.div
      className="review-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 20px 40px rgba(56,189,248,0.25)"
      }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
    >
      <div className="review-header">
        <div className="avatar">{name[0]}</div>
        <div>
          <h4>{name}</h4>
          <span className="source">
            <span className="google-icon">G</span> Google Review
          </span>
        </div>
      </div>

      <p className="review-text">“{text}”</p>
      <div className="review-footer">⭐⭐⭐⭐⭐</div>
    </motion.div>
  );
};

export default About;
