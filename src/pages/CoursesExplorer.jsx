import "../styles/courses.css";
import Footer from "../components/common/Footer";
import { courses } from "../data/courses";
import { useNavigate } from "react-router-dom";

const CoursesExplorer = () => {
  const navigate = useNavigate(); // ✅ HOOK INSIDE COMPONENT

  return (
    <main className="content">
      <p className="subtitle">
        Industry-oriented courses designed for real careers.
      </p>

      {/* COURSES SECTION */}
      <div className="grid-wrap" id="courses-section">
        <section className="courses-grid">
          {courses.map((course, index) => (
            <article
              key={course.id}
              className="course-card"
              tabIndex="0"
              aria-label={course.title}
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <img
                src={course.image}
                alt={course.title}
                className="course-image"
              />

              {course.badge && (
                <span className="badge">{course.badge}</span>
              )}

              <div className="card-body">
                <h3>{course.title}</h3>
                <p className="tagline">{course.tagline}</p>

                <div className="meta">
                  <span>{course.duration}</span>
                  <span>{course.level}</span>
                </div>
              </div>

              <button
                className="explore-btn"
                onClick={() => navigate("/courses/java-full-stack")}
              >
                Explore Course
              </button>
            </article>
          ))}
        </section>
      </div>

      <Footer />
    </main>
  );
};

export default CoursesExplorer;
