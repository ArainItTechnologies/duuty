import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./Components/Login";
import Register from "./Components/Register";
import Home from "./Components/Home";
import Layout from "./Layout/Layout";
import PublicRoute from "./PublicRoute";
import UserDashboard from "./Components/UserDashboard"
import SuperAdminDashboard from "./Components/SuperAdminDashboard";
import AdminDashboard from "./Components/AdminDashboard";
import UnauthorizedPage from "./Components/UnauthorizedPage";
import RoleProtectedRoute from "./RoleProtectedRoute";

const App = () => {
    const [isAuthenticated] = useState(() => {
        return localStorage.getItem("token") !== null;
    });
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
                        path="/login"
                        element={
                            <PublicRoute isAuthenticated={isAuthenticated}>
                                <Login />
                            </PublicRoute>
                        }
                    />
                    <Route
                        path="/register"
                        element={
                            <PublicRoute isAuthenticated={isAuthenticated}>
                                <Register />
                            </PublicRoute>
                        }
                    />
                    {/* Protected Routes */}
                    <Route
                        path="/admin-dashboard"
                        element={
                            <RoleProtectedRoute allowedRoles={["Admin"]}>
                                <AdminDashboard/>
                            </RoleProtectedRoute>
                        }
                    />
                    <Route
                        path="/super-admin-dashboard"
                        element={
                            <RoleProtectedRoute allowedRoles={["User"]}>
                                <SuperAdminDashboard />
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
                    <Route
                        path="/unauthorized"
                        element={<UnauthorizedPage/>}
                    />
                </Routes>
            </Layout>
        </Router>
    );
};

export default App;
