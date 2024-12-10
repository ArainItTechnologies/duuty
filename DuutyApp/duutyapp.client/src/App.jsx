import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Components/Home";
import Layout from "./Layout/Layout";
import PublicRoute from "./PublicRoute";
import UserDashboard from "./Components/UserDashboard";
import SuperAdminDashboard from "./Components/SuperAdminDashboard";
import AdminDashboard from "./Components/AdminDashboard";
import UnauthorizedPage from "./Components/UnauthorizedPage";
import RoleProtectedRoute from "./RoleProtectedRoute";
import AuthComponent from "./Components/AuthComponent";
import Guest from "./Components/Guest";
import AboutUs from "./Components/AboutUs";
import UserList from "./Components/UserList";
import FindJobsByCategory from "./Components/FindJobsByCategory";
import { useTranslation } from "./translations/TranslationHook";

const App = () => {
  const [isAuthenticated] = useState(() => {
    return localStorage.getItem("token") !== null;
  });

  const { languageLoading } = useTranslation();

  if (languageLoading) {
    return <div>Loading translations...</div>;
  }

  return (
    <Router>
      <Layout>
        <Routes>
          {/* Public Routes */}
          <Route
            path="/"
            element={
              <PublicRoute isAuthenticated={isAuthenticated}>
                <Home />
              </PublicRoute>
            }
          />
          <Route
            path="/about-us"
            element={
              <PublicRoute isAuthenticated={isAuthenticated}>
                <AboutUs />
              </PublicRoute>
            }
          />
          <Route
            path="/auth"
            element={
              <PublicRoute isAuthenticated={isAuthenticated}>
                <AuthComponent route="auth" />
              </PublicRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute isAuthenticated={isAuthenticated}>
                <AuthComponent route="register" />
              </PublicRoute>
            }
          />
          <Route
            path="/guest"
            element={
              <PublicRoute isAuthenticated={isAuthenticated}>
                <Guest />
              </PublicRoute>
            }
          />
          <Route
            path="/Employee/find-jobs-by-category"
            element={
              <PublicRoute isAuthenticated={isAuthenticated}>
                <FindJobsByCategory />
              </PublicRoute>
            }
          />
          {/* Protected Routes */}
          <Route
            path="/admin-dashboard"
            element={
              <RoleProtectedRoute allowedRoles={["Admin"]}>
                <AdminDashboard />
              </RoleProtectedRoute>
            }
          />
          <Route
            path="/super-admin-dashboard"
            element={
              <RoleProtectedRoute allowedRoles={["SuperAdmin"]}>
                <SuperAdminDashboard />
              </RoleProtectedRoute>
            }
          />
          <Route
            path="/user-list"
            element={
              <RoleProtectedRoute allowedRoles={["SuperAdmin"]}>
                <UserList />
              </RoleProtectedRoute>
            }
          />
          <Route
            path="/user-dashboard"
            element={
              <RoleProtectedRoute allowedRoles={["User"]}>
                <UserDashboard />
              </RoleProtectedRoute>
            }
          />
          <Route path="/unauthorized" element={<UnauthorizedPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
