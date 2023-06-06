import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import {
  CheckEmailPage,
  ForgotPasswordPage,
  ResetPasswordPage,
  SignInPage,
  SignUpPage,
  UsernamePage,
} from "./pages/auth";

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Routes>
          {/* Auth Routes */}
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/check-email" element={<CheckEmailPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
          <Route path="/signup/username" element={<UsernamePage />} />
          {/* Auth Routes */}
        </Routes>
      </Router>
    </>
  );
};

export default App;
