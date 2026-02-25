import { Navigate, Route, Routes } from "react-router";
import "./assets/css/global.css";
import SignUpLogin from "./Pages/SignUpLogin/SignUpLogin";
import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword";
import ResetPassword from "./Pages/ResetPassword/ResetPassword";
import Mainlayout from "./Mainlayout.jsx";
import Dashboard from "./Dashboard.jsx";
import Listing from "./Listing.jsx";
import Orders from "./Orders.jsx";
import Messages from "./Messages.jsx";
import Notifications from "./Notifications.jsx";
import Settings from "./Settings.jsx"
import React, { useState } from 'react';
import Landing from './pages/Landing';
import './Theme/global.css'


const App = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<SignUpLogin />}></Route>
          <Route path="/forgotPassword" element={<ForgotPassword />}></Route>
          <Route
            path="/reset-password/:token"
            element={<ResetPassword />}
          ></Route>

          <Route element={<Mainlayout />}>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/listing" element={<Listing />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
        </Routes>
      </div>
    </>
  );
};

export default App;

