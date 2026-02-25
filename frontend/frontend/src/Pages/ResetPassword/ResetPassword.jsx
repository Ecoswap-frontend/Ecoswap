import { useState } from "react";
import styles from "./ResetPassword.module.css"

import axios from "axios";
import { useParams } from "react-router";

const ResetPassword = ()=> {
  const { token } = useParams();

  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
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

    if (formData.password !== formData.confirmPassword) {
      return alert("Passwords do not match");
    }

    

    try {
      await axios.put(
        `http://localhost:8000/api/auth/reset-password/${token}`, 
        { password: formData.password },
      );

      alert("Password updated successfully!");
    } catch (error) {
      alert(error.response?.data?.message || "Error occurred");
    }
  };

  return (
    <div className={styles.parent}>
      <form onSubmit={handleSubmit} className={styles.parent__form}>
        <h2>Reset Password</h2>

        <div className={styles.form__input}>
          <input
            type="password"
            name="password"
            placeholder="New password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <div className={styles.form__input}>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
};

export default ResetPassword;
