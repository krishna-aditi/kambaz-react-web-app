import Signin from "./Signin";
import Profile from "./Profile";
import Signup from "./Signup";
import AccountNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router";

export default function Account() {
  return (
    <div id="wd-account-screen d-none d-md-block">
        <h2>Account</h2>
        <div className="d-flex">
            <div className="d-none d-md-block pe-4">
                <AccountNavigation />
            </div>
            <div>
                <Routes>
                    <Route path="/" element={<Navigate to="/Kambaz/Account/Signin" />} />
                    <Route path="/Signin" element={<Signin />} />
                    <Route path="/Profile" element={<Profile />} />
                    <Route path="/Signup" element={<Signup />} />
                </Routes>
            </div>
        </div>
    </div>
);}
