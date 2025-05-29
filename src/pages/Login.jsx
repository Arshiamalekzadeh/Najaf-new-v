import {
  CircularProgress,
  createTheme
} from "@mui/material";
import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";
import { default as image1, default as image2, default as image3 } from "../assets/bg.png";
import boxes from "../assets/fav.png";

import { useEffect } from "react";
import useLogin from "../hooks/useLogin";


const Login = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const images = [image1, image2, image3];
  const [currentImage, setCurrentImage] = useState(0);

  const defaultTheme = createTheme({
    direction: "rtl",
  });



  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;



  const { LogIn, isSuccess, data, isPending } = useLogin();
  console.log(data);

  // useEffect(() => {
  //   if (isSuccess && data) {
  //     sessionStorage.setItem("AccountTokenID", data.result[0].AccountTokenID);
  //     sessionStorage.setItem("LoginTokenID", data.result[0].LoginTokenID);
  //     sessionStorage.setItem("RoleUser", JSON.stringify(data.result[0].RoleUser));
  //     window.location.href = "/app/dashboard";
  //   }
  // }, [isSuccess, data]);


  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Grid className="flex h-[100vh] bg-gray-100">
          <div
            className="relative flex flex-col justify-between items-center w-full  md:w-1/3 bg-white p-4 shadow-lg overflow-hidden "
            style={{ height: "100vh" }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
                flex: 1,
              }}
            >
              <Box sx={{ mt: 1 }} style={{ maxWidth: "300px" }}>
                <img
                  src={boxes}
                  alt="boxes"
                  width={150}
                  className="m-auto mb-8"
                />

                <Formik
                  initialValues={{
                    UserName: "",
                    Password: "",
                  }}
                  validationSchema={Yup.object({
                    UserName: Yup.string().required(
                      "نام کاربری خود را وارد ننموده‌اید"
                    ),
                    Password: Yup.string().required(
                      "کلمه عبور خود را وارد ننموده‌اید"
                    ),
                  })}
                  onSubmit={(values, { setFieldValue, setSubmitting }) => {
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
                    <Form>
                      <Field
                        as={TextField}
                        margin="normal"
                        fullWidth
                        id="UserName"
                        size="small"
                        label="نام کاربری"
                        autocomplete="off"
                        autoFocus
                        name="UserName"
                        value={formik.values.UserName}
                        InputLabelProps={{ shrink: true }}
                        error={
                          formik.touched.UserName && formik.errors.UserName
                        }
                        helperText={
                          formik.touched.UserName && formik.errors.UserName
                        }
                      />

                      <Field
                        as={TextField}
                        margin="normal"
                        fullWidth
                        name="Password"
                        label="کلمه عبور"
                        type="Password"
                        size="small"
                        value={formik.values.Password}
                        id="Password"
                        autocomplete="off"
                        InputLabelProps={{ shrink: true }}
                        error={
                          formik.touched.Password && formik.errors.Password
                        }
                        helperText={
                          formik.touched.Password && formik.errors.Password
                        }
                      />

                      <Button
                        type="submit"
                        fullWidth
                        size="large"
                        variant="contained"
                        className="mt-2"
                        disabled={isPending}
                      >
                        {isPending ? (
                          <CircularProgress
                            size={20}
                            style={{ color: "#fff" }}
                          />
                        ) : (
                          "ورود"
                        )}
                      </Button>
                    </Form>
                  )}
                </Formik>
              </Box>
            </Box>
          </div>
          <div className="relative hidden md:flex w-2/3 bg-cover bg-center">
            <Grid
              item
              sx={{
                position: "relative",
                backgroundImage: `url(${images[currentImage]})`,
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100%",
                transition: "background-image 5s ease-in-out",
              }}
              className="hidden md:flex w-full"
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: "rgba(0, 0, 0, 0.4)",
                }}
              ></div>
            </Grid>
          </div>
        </Grid>
      </ThemeProvider>
    </>
  );
};

export default Login;
