import { create } from "zustand";

const useAuthStore = create((set) => ({
  token: sessionStorage.getItem("token") || null,
  refreshToken: sessionStorage.getItem("refreshToken") || null,
  role: sessionStorage.getItem("userRoles") || null, // Initialize as string, not array
  // userName: sessionStorage.getItem("userName") || "", // Add userName for Layout

  update: (token, refreshToken, userRoles, userName) => {
    set({ token, refreshToken, userRoles, userName });
    sessionStorage.setItem("token", token);
    sessionStorage.setItem("refreshToken", refreshToken);
    sessionStorage.setItem("userRoles", userRoles); // Store as string, not JSON.stringify
    // sessionStorage.setItem("userName", userName || "");
  },
  clear: () => {
    set({ token: null, refreshToken: null, role: null, userName: "" });
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("refreshToken");
    sessionStorage.removeItem("userRoles");
    // sessionStorage.removeItem("userName");
  },
}));

export default useAuthStore;