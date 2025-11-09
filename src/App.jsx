import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/context/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute/ProtectedRoute";

const Login = lazy(() => import("@/pages/Login/Login"));
const Register = lazy(() => import("@/pages/Register/Register"));
const Home = lazy(() => import("@/pages/Home/Home"));
const Dashboard = lazy(() => import("@/pages/Dashboard/Dashboard"));
const UserDetail = lazy(() => import("@/pages/UserDetail/UserDetail"));
const EditUser = lazy(() => import("@/pages/EditUser/EditUser"));

const PageLoader = () => (
  <div className="flex items-center justify-center h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
  </div>
);

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route 
              path="/dashboard" 
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/dashboard/user/:id" 
              element={
                <ProtectedRoute>
                  <UserDetail />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/dashboard/user/:id/edit" 
              element={
                <ProtectedRoute>
                  <EditUser />
                </ProtectedRoute>
              } 
            />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;