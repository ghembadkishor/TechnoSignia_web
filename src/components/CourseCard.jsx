import { useState } from "react";
import CourseDetails from "./CourseDetails";

const CourseCard = ({ course }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="course-card">
      <h3>{course.title}</h3>
      <p>{course.shortDesc}</p>

      <p><b>Duration:</b> {course.duration}</p>
      <p><b>Level:</b> {course.level}</p>

      <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? "Hide Details" : "View Full Course Details"}
      </button>

      {showDetails && <CourseDetails course={course} />}
    </div>
  );
};

export default CourseCard;
