import { create } from "zustand";

const useAuthStore = create((set) => ({
  AccountTokenID: sessionStorage.getItem("AccountTokenID") || null,
  LoginTokenID: sessionStorage.getItem("LoginTokenID") || null,
  RoleUser: JSON.parse(sessionStorage.getItem("RoleUser")) || [],

  update: (AccountTokenID, LoginTokenID, RoleUser) => {
    set({ AccountTokenID, LoginTokenID, RoleUser });
    sessionStorage.setItem("AccountTokenID", AccountTokenID);
    sessionStorage.setItem("LoginTokenID", LoginTokenID);
    sessionStorage.setItem("RoleUser", JSON.stringify(RoleUser));
  },
  clear: () => {
    set({ AccountTokenID: null, LoginTokenID: null, RoleUser: [] });
    sessionStorage.removeItem("AccountTokenID");
    sessionStorage.removeItem("LoginTokenID");
    sessionStorage.removeItem("RoleUser");
  },
}));

export default useAuthStore;
