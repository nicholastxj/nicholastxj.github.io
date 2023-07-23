import React from "react";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Contact from "../../pages/Contact";
import SignUp from "../../pages/Authentication/SignUp";
import Login from "../../pages/Authentication/Login";
import ForgotPassword from "../../pages/Authentication/ForgotPassword";
import Dashboard from "../../pages/Dashboard/Dashboard";
import TaskManager from "../../pages/TaskManager";
import PomodoroTimer from "../../pages/PomodoroTimer";
import Community from "../../pages/Community";
import Profile from "../../pages/Profile/Profile";
import ProfileUpdate from "../../pages/ProfileUpdate/ProfileUpdate";
import NotFound from "../../pages/NotFound/NotFound";

function AppRoutes() {
  return (
    <div className="app-routes">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/task-manager"
          element={
            <PrivateRoute>
              <TaskManager />
            </PrivateRoute>
          }
        />
        <Route
          path="/pomodoro-timer"
          element={
            <PrivateRoute>
              <PomodoroTimer />
            </PrivateRoute>
          }
        />
        <Route
          path="/community"
          element={
            <PrivateRoute>
              <Community />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
          path="/update-profile"
          element={
            <PrivateRoute>
              <ProfileUpdate />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default AppRoutes;
