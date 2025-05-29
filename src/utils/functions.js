import useAuthStore from "../store/useAuthStore";

export function logout() {
  useAuthStore.getState().update({ authToken: "" });
  sessionStorage.clear();
  window.location.href = "/";
}

export function getUrlParam(param) {
  const queryString = window.location.search;

  // Create an instance of URLSearchParams
  const urlParams = new URLSearchParams(queryString);

  // Get specific parameters
  const result = urlParams.get(param);
  return result;
}
