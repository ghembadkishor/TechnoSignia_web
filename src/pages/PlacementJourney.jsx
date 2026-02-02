import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./PlacementJourney.css";

const PlacementJourney = () => {
  const navigate = useNavigate();
  return (
    <div className="pj-root">
      <div className="pj-glow" />

      <div className="pj-content">
        {/* HEADER */}
        <motion.h1
          className="pj-title"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Your Placement Journey
        </motion.h1>

        <motion.p
          className="pj-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          A clear, guided path from learning to getting placed in IT companies.
        </motion.p>

        {/* 4 STEP JOURNEY */}
        <div className="pj-journey">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className="pj-card"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.15 }}
              whileHover={{ y: -10 }}
            >
              <div className="pj-icon">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* TRUST STRIP */}
        <motion.div
          className="pj-trust"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <span>2899+ Students Placed</span>
          <span>12+ Industry Experts</span>
          <span>120+ Hiring Partners</span>
        </motion.div>

        {/* REASSURANCE */}
        <p className="pj-reassurance">
          No prior coding experience required.  
          We start from basics and personally guide you until placement.
        </p>

        {/* CTA */}
        <motion.button
         className="pj-btn"
         whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.92 }}
         transition={{ duration: 0.15 }}
         onClick={() => navigate("/courses")}  
        >
          Continue to Find My Best Path →
        </motion.button>
      </div>
    </div>
  );
};

export default PlacementJourney;

/* DATA */
const steps = [
  {
    icon: "🎓",
    title: "Learn from Experts",
    desc: "Beginner-friendly training by industry professionals.",
  },
  {
    icon: "💻",
    title: "Build Real Projects",
    desc: "Hands-on projects aligned with company expectations.",
  },
  {
    icon: "🎤",
    title: "Mock Interviews",
    desc: "Technical + HR interviews with real feedback.",
  },
  {
    icon: "🚀",
    title: "Placement Support",
    desc: "Referrals, drives, and company connections.",
  },
];
