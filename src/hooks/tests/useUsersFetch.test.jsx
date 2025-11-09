import React from "react";
import { renderHook, act } from "@testing-library/react";
import { useUsersFetch } from "../useUsersFetch";

const mockUsers = [
  { id: 1, first_name: "George", last_name: "Bluth", email: "george@reqres.in" },
  { id: 2, first_name: "Janet", last_name: "Weaver", email: "janet@reqres.in" },
];

beforeEach(() => {
  jest.restoreAllMocks();
});

test("fetches users successfully and updates state", async () => {
  jest.spyOn(global, "fetch").mockResolvedValueOnce({
    ok: true,
    json: async () => ({ data: mockUsers, total_pages: 3 }),
  });

  const { result } = renderHook(() => useUsersFetch());

  expect(result.current.loading).toBe(true);

  await act(async () => {
    await result.current.fetchUsers(1);
  });

  expect(result.current.loading).toBe(false);
  expect(result.current.error).toBeNull();
  expect(result.current.users).toEqual(mockUsers);
  expect(result.current.totalPages).toBe(3);
});

test("sets error when response not ok", async () => {
  jest.spyOn(global, "fetch").mockResolvedValueOnce({
    ok: false,
    json: async () => ({}),
  });

  const { result } = renderHook(() => useUsersFetch());

  await act(async () => {
    await result.current.fetchUsers(2);
  });

  expect(result.current.loading).toBe(false);
  expect(result.current.error).toMatch(/failed to fetch users/i);
  expect(result.current.users).toEqual([]);
});