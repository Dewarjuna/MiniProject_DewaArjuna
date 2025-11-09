import React from "react";
import { screen } from "@testing-library/react";
import { Route, Routes } from "react-router-dom";
import { renderWithProviders } from "../test_utils";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Dashboard from "../pages/Dashboard/Dashboard";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";

test("renders Home at /", async () => {
  renderWithProviders(
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>,
    { 
      route: "/",
      authValue: {
        user: null,
        isAuthenticated: false,
        loading: false,
        login: jest.fn(),
        logout: jest.fn(),
        checkAuth: jest.fn(),
      }
    }
  );
  
  const homeElements = await screen.findAllByText(/home/i);
  expect(homeElements.length).toBeGreaterThan(0);
});

test("renders Login at /login", async () => {
  const mockLogin = jest.fn();
  
  renderWithProviders(
    <Routes>
      <Route path="/login" element={<Login />} />
    </Routes>,
    { 
      route: "/login",
      authValue: {
        user: null,
        isAuthenticated: false,
        loading: false,
        login: mockLogin,
        logout: jest.fn(),
        checkAuth: jest.fn(),
      }
    }
  );
  
  expect(await screen.findByRole("heading", { name: /login/i })).toBeInTheDocument();
});

test("redirects unauthenticated /dashboard to login", async () => {
  renderWithProviders(
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route 
        path="/dashboard" 
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } 
      />
    </Routes>,
    { 
      route: "/dashboard",
      authValue: {
        user: null,
        isAuthenticated: false,
        loading: false,
        login: jest.fn(),
        logout: jest.fn(),
        checkAuth: jest.fn(),
      }
    }
  );
  
  expect(await screen.findByRole("heading", { name: /login/i })).toBeInTheDocument();
});

test("shows Dashboard when authenticated", async () => {
  renderWithProviders(
    <Routes>
      <Route 
        path="/dashboard" 
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } 
      />
    </Routes>,
    { 
      route: "/dashboard",
      authValue: {
        user: { id: 1, name: "Dewa" },
        isAuthenticated: true,
        loading: false,
        login: jest.fn(),
        logout: jest.fn(),
        checkAuth: jest.fn(),
      }
    }
  );
  
  expect(await screen.findByRole("heading", { name: /user dashboard/i })).toBeInTheDocument();
});