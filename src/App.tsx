import React from "react";
import {
  Route,
  Routes,
  BrowserRouter as Router,
  Navigate,
} from "react-router-dom";
import {
  CheckEmailPage,
  ForgotPasswordPage,
  ResetPasswordPage,
  SignInPage,
  SignUpPage,
  DashboardPage,
  UsernamePage,
  CraftingPage,
  DatesPage,
  TriggersPage,
} from "./pages";

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
          {/* Dashboard Routes */}
          <Route path="/" element={<Navigate to={"/dashboard"} />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/dashboard/dates" element={<DatesPage />} />
          <Route path="/dashboard/categories" element={<>categories</>} />
          <Route path="/dashboard/identities" element={<>identities</>} />
          <Route path="/dashboard/triggers" element={<TriggersPage />} />
          <Route path="/dashboard/predictions" element={<>predictions</>} />
          <Route path="/dashboard/packs" element={<>packs</>} />
          {/* Dashboard Routes */}
          <Route path="/craft" element={<CraftingPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
