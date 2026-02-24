import { useState } from "react";
import styles from "./ForgotPassword.module.css";
import axios from "axios";

const ForgotPassword = () => {
  const [formData, setFormData] = useState({
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:8000/api/auth/forgot-password",
        formData,
      );

      alert("Reset link sent!");
    } catch (error) {
      alert(error.response?.data?.message || "Error occurred");
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.container__formCard}>
        <h2>Forgot Password</h2>

        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={formData.email}
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ForgotPassword;
