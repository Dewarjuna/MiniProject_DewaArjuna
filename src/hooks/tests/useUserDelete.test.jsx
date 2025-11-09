import React from "react";
import { renderHook, act } from "@testing-library/react";
import { useUserDelete } from "../useUserDelete";

beforeEach(() => {
  jest.restoreAllMocks();
});

test("returns true on successful delete", async () => {
  jest.spyOn(global, "fetch").mockResolvedValueOnce({ ok: true });

  const { result } = renderHook(() => useUserDelete());

  let success;
  await act(async () => {
    success = await result.current.deleteUser(1);
  });

  expect(success).toBe(true);
  expect(result.current.deleting).toBe(false);
  expect(result.current.deleteError).toBeNull();
});

test("sets error and returns false when delete fails", async () => {
  jest.spyOn(global, "fetch").mockResolvedValueOnce({ ok: false });

  const { result } = renderHook(() => useUserDelete());

  let success;
  await act(async () => {
    success = await result.current.deleteUser(999);
  });

  expect(success).toBe(false);
  expect(result.current.deleting).toBe(false);
  expect(result.current.deleteError).toMatch(/failed to delete user/i);
});