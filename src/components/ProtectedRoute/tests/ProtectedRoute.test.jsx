import React from "react";
import { screen } from "@testing-library/react";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute";
import { renderWithProviders } from "../../../test_utils";

function Secret() { return <h1>Secret Page</h1>; }

test("blocks unauthenticated access", async () => {
  renderWithProviders(
    <Routes>
      <Route path="/secret" element={<ProtectedRoute><Secret /></ProtectedRoute>} />
    </Routes>,
    { 
      route: "/secret",
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
  
  expect(screen.queryByText(/secret page/i)).not.toBeInTheDocument();
});

test("renders when authenticated", async () => {
  renderWithProviders(
    <Routes>
      <Route path="/secret" element={<ProtectedRoute><Secret /></ProtectedRoute>} />
    </Routes>,
    { 
      route: "/secret",
      authValue: {
        user: { id: 1 },
        isAuthenticated: true,
        loading: false,
        login: jest.fn(),
        logout: jest.fn(),
        checkAuth: jest.fn(),
      }
    }
  );
  
  expect(await screen.findByText(/secret page/i)).toBeInTheDocument();
});