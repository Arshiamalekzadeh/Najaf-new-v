import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { jwtDecode } from "jwt-decode";
import { signIn, signOut } from "../api/signInApi";
import useAuthStore from "../store/useAuthStore";

const useLogin = () => {
  const setAuth = useAuthStore((state) => state.update);

  const goSigIn = useMutation({
    mutationFn: signIn,
    onSuccess: (data) => {
      if (data.result && data.result.token) {
        const { token, refreshToken, userRoles } = data.result;

        const decoded = jwtDecode(token);
        const role = decoded.role || "User";
        console.log("User Role:", role); // برای دیباگ

        sessionStorage.setItem("token", token);
        sessionStorage.setItem("refreshToken", refreshToken);
        sessionStorage.setItem("userRoles", userRoles);

        setAuth(token, refreshToken, userRoles);

        toast.success("ورود موفق", {
          position: "top-center",
          theme: "colored",
        });

        window.location.href = role === "SuperAdmin" ? "/app/dashboard" : "/app/AdminDashbord";
      } else {
        toast.error("ورود ناموفق. لطفاً دوباره تلاش کنید.");
      }
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const goSignOut = useMutation({
    mutationFn: signOut,
    onSuccess: () => {
      toast.info("با موفقیت خارج شدید", {
        position: "top-center",
        theme: "colored",
      });
    },
    onError: () => {
      toast.error("مشکلی در خروج از حساب رخ داد", {
        position: "top-center",
        theme: "colored",
      });
    },
  });





  return {
    LogIn: goSigIn.mutate,
    isLoading: goSigIn.isPending,
    LogOut: goSignOut.mutate,
  };
};

export default useLogin;
