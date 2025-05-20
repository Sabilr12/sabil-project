import React, { Suspense } from "react";
import "./assets/tailwind.css";
import { Routes, Route } from "react-router-dom";


// Layout dan Halaman
const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"));
const MainLayout = React.lazy(() => import("./layouts/MainLayout"));
const GuestLayout = React.lazy(() => import("./layouts/GuestLayout"));
const ErrorPage = React.lazy(() => import("./pages/ErrorPage"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

// Halaman Auth
const Login = React.lazy(() => import("./pages/auth/Logins"));
const Register = React.lazy(() => import("./pages/auth/Register"));
const Forgot = React.lazy(() => import("./pages/auth/Forgot"));

// Halaman lainnya
const LandingPage = React.lazy(() => import("./components/guest/LandingPage"));
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Order = React.lazy(() => import("./pages/Order"));
const Customers = React.lazy(() => import("./pages/Customer"));
const Users = React.lazy(() => import("./pages/Users"));
const Loading = React.lazy(() => import("./components/Loading"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        Halaman Guest
        <Route element={<GuestLayout />}>
          <Route path="/" element={<LandingPage />} />
        </Route>
        {/* Halaman Auth */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>
        {/* Routing untuk Main Layout */}
        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/orders" element={<Order />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/users" element={<Users />} />
        </Route>
        {/* Error Handling */}
        <Route path="/error/:code" element={<ErrorPage />} />
        {/* Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default App;
