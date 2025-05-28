import { create } from "zustand";

const useAuthStore = create((set) => ({
  token: localStorage.getItem("token") || null,
  role: JSON.parse(localStorage.getItem("role") || "[]"),
  username: "",
  userId: null,
  name: "",

  update: (token, role, username, userId, name) => {
    set({ token, role, username, userId, name });
    localStorage.setItem("token", token);
    localStorage.setItem("role", JSON.stringify(role));
  },

  clear: () => {
    set({
      token: null,
      role: [],
      username: "",
      userId: null,
      name: "",
    });
    localStorage.removeItem("token");
    localStorage.removeItem("role");
  },
}));

export default useAuthStore;
