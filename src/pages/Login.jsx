import { CircularProgress, createTheme } from "@mui/material";
import { Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { ThemeProvider } from "@mui/material/styles";
import image1 from "../assets/bg.png"; // تصویر نجف
import boxes from "../assets/fav.png"; // لوگو

import useLogin from "../hooks/useLogin";

const Login = () => {
  const defaultTheme = createTheme({ direction: "rtl" });
  const { LogIn, isLoading } = useLogin();

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid
        container
        className="min-h-screen w-screen bg-cover bg-center relative overflow-hidden"
        style={{ backgroundImage: `url(${image1})` }}
      >
        {/* لایه مشکی با بلر */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-0" />

        {/* فرم مرکزی */}
        <Grid
          item
          xs={12}
          className="z-10 flex justify-center items-center w-full"
        >
          <Box className="w-[90%] sm:w-[400px] bg-white/20 backdrop-blur-md rounded-3xl p-6 shadow-xl border border-white/30">
            {/* لوگو */}
            <div className="flex justify-center mb-4">
              <img src={boxes} alt="لوگو" className="w-24 h-24" />
            </div>

            {/* تیتر مذهبی */}
            <h2 className="text-center text-white text-lg mb-6 font-bold">
              السَّلامُ عَلَیْکَ یَا أَمِیرَالمُؤمِنین
            </h2>

            {/* فرم */}
            <Formik
              initialValues={{ UserName: "", Password: "" }}
              validationSchema={Yup.object({
                UserName: Yup.string().required(
                  "نام کاربری خود را وارد ننموده‌اید"
                ),
                Password: Yup.string().required(
                  "کلمه عبور خود را وارد ننموده‌اید"
                ),
              })}
              onSubmit={(values, { setSubmitting, setFieldValue }) => {
                LogIn(
                  { ...values, isPersistent: true },
                  {
                    onError: () => {
                      setFieldValue("UserName", "");
                      setFieldValue("Password", "");
                      setSubmitting(false);
                    },
                  }
                );
              }}
            >
              {(formik) => (
                <Form className="flex flex-col gap-4">
                  <Field
                    as={TextField}
                    name="UserName"
                    label="نام کاربری"
                    fullWidth
                    size="small"
                    variant="outlined"
                    InputLabelProps={{ shrink: true }}
                    inputProps={{ style: { color: "white" } }}
                    InputProps={{
                      style: { color: "white" },
                    }}
                    error={
                      formik.touched.UserName && Boolean(formik.errors.UserName)
                    }
                    helperText={
                      formik.touched.UserName && formik.errors.UserName
                    }
                  />

                  <Field
                    as={TextField}
                    name="Password"
                    label="کلمه عبور"
                    type="password"
                    fullWidth
                    size="small"
                    variant="outlined"
                    InputLabelProps={{ shrink: true }}
                    inputProps={{ style: { color: "white" } }}
                    InputProps={{
                      style: { color: "white" },
                    }}
                    error={
                      formik.touched.Password && Boolean(formik.errors.Password)
                    }
                    helperText={
                      formik.touched.Password && formik.errors.Password
                    }
                  />

                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    size="large"
                    sx={{ bgcolor: "#2563eb" }}
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <CircularProgress size={20} sx={{ color: "#fff" }} />
                    ) : (
                      "ورود به حساب کاربری"
                    )}
                  </Button>
                </Form>
              )}
            </Formik>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Login;
