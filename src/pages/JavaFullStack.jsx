import "../styles/course-detail.css";
import Footer from "../components/common/Footer";

const JavaFullStack = () => {
  return (
    <>
      <main className="course-page">

        {/* HERO */}
        <section className="hero">
          <div className="hero-content">
            <h1>Java Full Stack Development</h1>
            <p className="hero-sub">
              Become a job-ready full stack developer in 6 months
            </p>

            <div className="chips">
              <span>⏱ 6 Months</span>
              <span>🎓 Beginner → Advanced</span>
              <span>🧑‍💻 Online + Offline</span>
              <span>🏆 ISO Certified</span>
            </div>

            <div className="hero-actions">
              <button className="primary">Enroll Now</button>
              <button className="secondary">Talk to Counsellor</button>
            </div>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="section">
          <h2>Course Overview</h2>
          <p>
            Learn Java Full Stack development with real-world projects,
            industry tools and full placement support.
          </p>
        </section>

        {/* WHAT YOU WILL LEARN */}
        <section className="section alt">
          <h2>What You Will Learn</h2>

          <div className="learn-grid">
            <div>
              <h4>Backend</h4>
              <ul>
                <li>Core Java & OOPs</li>
                <li>Advanced Java & JDBC</li>
                <li>Spring & Spring Boot</li>
                <li>REST APIs</li>
              </ul>
            </div>

            <div>
              <h4>Frontend</h4>
              <ul>
                <li>HTML, CSS, JavaScript</li>
                <li>React & Hooks</li>
                <li>API Integration</li>
              </ul>
            </div>

            <div>
              <h4>Database & Tools</h4>
              <ul>
                <li>MySQL</li>
                <li>Hibernate / JPA</li>
                <li>Git & GitHub</li>
              </ul>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="section">
          <h2>Projects You Will Build</h2>

          <div className="cards">
            <div className="card">Student Management System</div>
            <div className="card">REST API Backend</div>
            <div className="card">Full Stack Web App</div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="section alt">
          <h2>Course Features</h2>

          <div className="features">
            <span>✔ Live Classes</span>
            <span>✔ Recordings</span>
            <span>✔ Assignments</span>
            <span>✔ Mock Interviews</span>
            <span>✔ Placement Support</span>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="cta">
          <h2>Ready to start your IT career?</h2>
          <button className="primary big">Enroll Now</button>
        </section>

        <Footer />
      </main>

      {/* FLOATING CTA */}
      <div className="floating-cta">
        <div className="cta-left">
          <span>Java Full Stack</span>
        </div>
        <div className="cta-right">
          <button className="primary">Enroll</button>
          <button className="secondary">Counsellor</button>
        </div>
      </div>
    </>
  );
};

export default JavaFullStack;
