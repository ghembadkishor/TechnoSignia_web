import { useState } from "react";
import "./CounsellorModal.css";

const CounsellorModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    course: ""
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({
    type: "", // loading | success
    message: ""
  });

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim())
      newErrors.name = "Full name is required";
    else if (!/^[A-Za-z ]{3,}$/.test(form.name))
      newErrors.name = "Only letters allowed (min 3 characters)";

    if (!form.email.trim())
      newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email))
      newErrors.email = "Enter a valid email address";

    if (!/^[0-9]{10}$/.test(form.phone))
      newErrors.phone = "Mobile number must be 10 digits";

    if (!form.city.trim())
      newErrors.city = "City is required";
    else if (!/^[A-Za-z ]{2,}$/.test(form.city))
      newErrors.city = "City must contain only letters";

    if (!form.course)
      newErrors.course = "Please select a course";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) {
      return;
    }

    // show form status only on submit
    setStatus({ type: "loading", message: "Submitting your request..." });

    setTimeout(() => {
      setStatus({
        type: "success",
        message: "Your request has been submitted successfully!"
      });

      setTimeout(() => {
        onClose();
      }, 1400);
    }, 1200);
  };

  return (
    <div className="modal-overlay">
      <div className="modal">

        {/* FORM STATUS – ONLY ON SUBMIT */}
        {status.message && (
          <div className={`form-status ${status.type}`}>
            {status.message}
          </div>
        )}

        <h2>Talk to a Career Counsellor</h2>

        {/* NAME */}
        {errors.name && <p className="field-error">{errors.name}</p>}
        <input
          placeholder="Full Name"
          value={form.name}
          onChange={e =>
            setForm({ ...form, name: e.target.value })
          }
        />

        {/* EMAIL */}
        {errors.email && <p className="field-error">{errors.email}</p>}
        <input
          placeholder="Email Address"
          value={form.email}
          onChange={e =>
            setForm({ ...form, email: e.target.value })
          }
        />

        {/* PHONE */}
        {errors.phone && <p className="field-error">{errors.phone}</p>}
        <input
          placeholder="Mobile Number"
          maxLength="10"
          value={form.phone}
          onChange={e =>
            setForm({
              ...form,
              phone: e.target.value.replace(/\D/g, "")
            })
          }
        />

        {/* CITY */}
        {errors.city && <p className="field-error">{errors.city}</p>}
        <input
          placeholder="City"
          value={form.city}
          onChange={e =>
            setForm({ ...form, city: e.target.value })
          }
        />

        {/* COURSE */}
        {errors.course && <p className="field-error">{errors.course}</p>}
        <select
          value={form.course}
          onChange={e =>
            setForm({ ...form, course: e.target.value })
          }
        >
          <option value="">Select Interested Course</option>
          <option>Java Full Stack</option>
          <option>MERN Stack</option>
          <option>Software Testing</option>
          <option>Python Full Stack</option>
          <option>Cyber Security</option>
        </select>

        <button
          className="submit-btn"
          onClick={handleSubmit}
          disabled={status.type === "loading"}
        >
          {status.type === "loading" ? "Submitting..." : "Submit"}
        </button>

        <span className="close" onClick={onClose}>✕</span>
      </div>
    </div>
  );
};

export default CounsellorModal;
