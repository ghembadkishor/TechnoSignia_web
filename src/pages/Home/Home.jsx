import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { getHomeData } from "../../services/homeService";
import "./home.css";


const Home = () => {
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getHomeData().then(setData);
  }, []);

  if (!data) return <div className="loading">Loading...</div>;

  return (
    <div className="home-root">
      <section className="hero">
        <div className="container">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>

        <div className="hero-overlay" />

        <div className="hero-content">
          {/* TEXT */}
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            India’s Placement-Focused Software Training Institute
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Learn in-demand technologies, work on real projects,
            and get placed in IT companies with structured placement support.
          </motion.p>

          <p className="hero-audience">
            For Freshers • Non-CS Graduates • Working Professionals
          </p>

          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="hero-btn"
            onClick={() => navigate("/placement")}
          >
            Find the Right Course for You
          </motion.button>

          {/* COUNTERS INSIDE HERO */}
             <div className="hero-counters">
                <Counter label="Placement Success Rate" value={data?.counters?.placementRate ?? 0}suffix="%"/>
                <Counter label="Students Placed" value={data.counters.studentsPlaced} />
                <Counter label="Hiring Partners" value={data.counters.hiringPartners} />
                <Counter label="Industry Experts" value={data.counters.industryExperts} />
            </div>

        </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

/* ================= COUNTER ================= */

const Counter = ({ value, label, suffix = "+" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;
    const duration = 2600;
    const step = 30;
    const increment = value / (duration / step);

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, step);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="counter-card">
      <h2>
        {count}
        {suffix}
      </h2>
      <p>{label}</p>
    </div>
  );
};

