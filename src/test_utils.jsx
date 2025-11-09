import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import { AuthContext } from "@/context/AuthContext";

export function renderWithProviders(
  ui,
  { 
    route = "/", 
    authValue = {
      user: null,
      isAuthenticated: false,
      loading: false,
      login: jest.fn(),
      logout: jest.fn(),
      checkAuth: jest.fn(),
    },
    ...options 
  } = {}
) {
  const TestAuthProvider = ({ children }) => {
    return (
      <AuthContext.Provider value={authValue}>
        {children}
      </AuthContext.Provider>
    );
  };

  return render(
    <MemoryRouter initialEntries={[route]}>
      <TestAuthProvider>
        {ui}
      </TestAuthProvider>
    </MemoryRouter>,
    options
  );
}