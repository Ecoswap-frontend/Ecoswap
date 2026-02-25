import { createContext, useState, useEffect } from "react";

import {endpoints,fetchJson} from "../config/api.js"

import DetailsStep from "../listing/DetailsStep.jsx";
import LogisticsStep from "../listing/LogisticsStep.jsx";
import ReviewStep from "../listing/ReviewStep.jsx";
import InfoStep from "../listing/InfoStep.jsx";

export const userContext = createContext();

const Context = ({ children }) => {
  const [profile, setProfile] = useState(null);
  const [dashboardData, setDashboardData] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [orders, setOrders] = useState([]);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [step, setStep] = useState(1);

  const renderStep = () => {
    switch (step) {
      case 1:
        return <InfoStep formData={formData} setFormData={setFormData} />;
      case 2:
        return <DetailsStep formData={formData} setFormData={setFormData} />;
      case 3:
        return <LogisticsStep formData={formData} setFormData={setFormData} />;
      case 4:
        return <ReviewStep formData={formData} />;
      default:
        return null;
    }
  };

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    grade: "",
    quantity: "",
    location: "",
    images: [],
  });

  const updateForm = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const addImages = (files) => {
    setFormData((prev) => ({
      ...prev,
      images: [...prev.images, ...files],
    }));
  };

  const createListForm = async () => {
    // try {
    //   setLoading(true);

    //   const payload = new FormData();

    //   Object.entries(formData).forEach(([key, value])=>{
    //     payload.append("images",file);
    //   })
    //   const response = await axios.post("",
    //   payload,
    //   {
    //     headers: {
    //       "Content-Type": "multipart/form-data",
    //     },
    //   }
    // );
    //   console.log("list created Successfully:", response.data);
    // } catch (error) {
    //   console.error("creation error:", error);

    // }finally{
    //   setLoading(false);
    // }

    console.log(formData);
    alert("list created successfully");
  };

  useEffect(() => {
    setLoading(true);
    Promise.all([
      fetchJson(endpoints.profile).catch(() => null),
      fetchJson(endpoints.dashboard).catch(() => ({ products: [] })),
      fetchJson(endpoints.notifications).catch(() => ({ comments: [] })),
      fetchJson(endpoints.orders).catch(() => ({ carts: [] })),
      fetchJson(endpoints.messages).catch(() => ({ posts: [] })),
    ])
      .then(([p, d, n, o, m]) => {
        setProfile(p);
        setDashboardData(d.products || []);
        setNotifications(n.comments || []);
        setOrders(o.carts || []);
        setMessages(m.posts || []);
      })
      .catch((e) => setError(e.message || "Error"))
      .finally(() => setLoading(false));
  }, []);

  const [page, setPage] = useState("Login");

  const handleSignUpToggle = () => {
    setPage("Sign Up");
  };

  const handleLoginToggle = () => {
    setPage("Login");
  };

  return (
    <userContext.Provider
      value={{
        page,
        handleLoginToggle,
        handleSignUpToggle,
        profile,
        dashboardData,
        notifications,
        orders,
        messages,
        loading,
        error,
        renderStep,
        step,
        setStep,
        formData,
        updateForm,
        createListForm,
        loading,
        addImages,
      }}
    >
      {children}
    </userContext.Provider>
  );
};

export default Context;
