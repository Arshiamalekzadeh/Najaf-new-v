import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { jwtDecode } from "jwt-decode";
import { signIn } from "../api/signInApi";
import useAuthStore from "../store/useAuthStore";

const useLogin = () => {
  const setAuth = useAuthStore((state) => state.update);

  const goSigIn = useMutation({
    mutationFn: signIn,
    onSuccess: (data) => {
      if (data.result && data.result.token) {
        const { token, refreshToken, expiredAt } = data.result;

        const decoded = jwtDecode(token);
        const role = decoded.role || "User"; 

        sessionStorage.setItem("token", token);
        sessionStorage.setItem("refreshToken", refreshToken);
        sessionStorage.setItem("RoleUser", JSON.stringify(role));

        setAuth(token, refreshToken, role);

        toast.success("ورود موفق", {
          position: "top-center",
          theme: "colored",
        });

        window.location.href = "/app/dashboard";
      } else {
        toast.error("ورود ناموفق. لطفاً دوباره تلاش کنید.");
      }
    },
    onError: (error) => {
      console.log(error);
      const errorMessage =
        error?.response?.data?.message?.[0] ;
    
      toast.error(errorMessage, {
        position: "top-center",
        theme: "colored",
      });
    }
    
  });

  return {
    LogIn: goSigIn.mutate,
  };
};

export default useLogin;
