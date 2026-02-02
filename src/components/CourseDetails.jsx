const CourseDetails = ({ course }) => {
  return (
    <div className="course-details">

      <h4>Course Overview</h4>
      <p>{course.overview}</p>

      <h4>6 Months Learning Journey</h4>
      <ul>
        {course.journey.map((item, i) => (
          <li key={i}>✔ {item}</li>
        ))}
      </ul>

      <h4>What You Will Learn</h4>
      <div className="tags">
        {course.skills.map((skill, i) => (
          <span key={i} className="tag">{skill}</span>
        ))}
      </div>

      <h4>Video Recordings</h4>
      <ul>
        {course.recordings.map((rec, i) => (
          <li key={i}>✔ {rec}</li>
        ))}
      </ul>

      <h4>Interactive Learning</h4>
      <ul>
        {course.interactive.map((item, i) => (
          <li key={i}>✔ {item}</li>
        ))}
      </ul>

      <h4>Certification</h4>
      <ul>
        {course.certification.map((item, i) => (
          <li key={i}>✔ {item}</li>
        ))}
      </ul>

      <button className="cta-btn">Talk to Counsellor</button>
    </div>
  );
};

export default CourseDetails;
