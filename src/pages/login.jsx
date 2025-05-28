// src/components/LoginForm.jsx
import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
// import LOGI from "../../public/LogoSiah.png";

export const LoginForm = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallPrompt(true);
    };

    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const result = await deferredPrompt.userChoice;
    console.log("User choice:", result.outcome);
    setDeferredPrompt(null);
    setShowInstallPrompt(false);
  };

  const { login, isLoading } = useAuth();
  const [credentials, setCredentials] = useState({ username: "", password: "",isPersistent: true });

  const handleSubmit = (e) => {
    e.preventDefault();
    login(credentials);
  };

  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="flex justify-center h-screen">
        <div className="flex items-center px-20 mx-auto w-[480px]">
          <div className="flex-1">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-center text-gray-700 dark:text-white mb-14">
                {/* <img
                  src={LOGI}
                  alt="logo"
                  className="m-auto invert-0 hue-rotate-0 dark:invert dark:hue-rotate-180"
                /> */}
                <p className="mt-3 text-sm font-bold text-center text-gray-500 dark:text-gray-300">
                  شرکت پارس تکنولوژی سداد
                </p>
              </h2>
            </div>

            <div className="mt-8">
              <form>
                <div>
                  <label
                    htmlFor="username"
                    className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                  >
                    نام کاربری
                  </label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                    value={credentials.username}
                    onChange={(e) =>
                      setCredentials((prev) => ({
                        ...prev,
                        username: e.target.value,
                      }))
                    }
                  />
                </div>

                <div className="mt-6">
                  <div className="flex justify-between mb-2">
                    <label
                      htmlFor="password"
                      className="text-sm text-gray-600 dark:text-gray-200"
                    >
                      کلمه عبـور
                    </label>
                  </div>
                  <input
                    type="password"
                    value={credentials.password}
                    onChange={(e) =>
                      setCredentials((prev) => ({
                        ...prev,
                        password: e.target.value,
                      }))
                    }
                    placeholder="کلمه عبور را وارد نمایید"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>

                <div className="mt-6">
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    disabled={isLoading}
                    className="w-full px-4 py-2 text-center tracking-wide text-white transition-colors duration-200 transform bg-teal-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                  >
                    {isLoading ? "درحال ورود..." : "ورود"}
                  </button>
                </div>

                {showInstallPrompt && (
                  <div className="mt-6 text-center">
                    <button
                      onClick={handleInstallClick}
                      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500"
                    >
                      نصب اپلیکیشن
                    </button>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* حذف بخش پس‌زمینه سمت راست */}
      </div>
    </div>
  );
};
