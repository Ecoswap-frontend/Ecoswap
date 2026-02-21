import { Route, Routes } from "react-router";
import "./assets/css/global.css";
import SignUpLogin from "./Pages/SignUpLogin/SignUpLogin";
import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword";
import ResetPassword from "./Pages/ResetPassword/ResetPassword";

const App = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<SignUpLogin />}></Route>
          <Route path="/forgotPassword" element={<ForgotPassword/>}></Route>
          <Route path="/reset-password/:token" element={<ResetPassword/>}></Route>
        </Routes>
      </div>
    </>
  );
};

export default App;
