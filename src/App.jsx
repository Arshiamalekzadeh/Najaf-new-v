import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { LoginForm } from "./pages/login";
import { PrivateRoute } from "./routes/PrivateRoute";
// import Layout from "./ui/layout";

function App() {
  return (
    <AuthProvider>
        <Routes>
          <Route path="/app" element={<PrivateRoute />}>
            {/* <Route element={<Layout />}>

            </Route> */}
          </Route>
          <Route path="/" element={<LoginForm />} />
        </Routes>
    </AuthProvider>
  );
}

export default App;
