import React, { useState } from "react";
import Layout from "../containers/layout";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
function signup() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (values) => {
      const { email, password } = values;
      axios
        .post("http://localhost:5000/api/user/signin")
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err?.response?.data?.message));
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      password: Yup.string()
        .required("Password is required")
        .min(8, "your password should be more than 8 characters"),
    }),
    validateOnMount: true,
  });
  return (
    <Layout>
      <div className="w-full h-[90vh] flex justify-center items-center">
        <form
          className="w-[40vw] h-[80vh] bg-purple-200 flex flex-col gap-16 py-5 px-10 rounded-xl shadow-md"
          onSubmit={formik.handleSubmit}
        >
          <div className="flex flex-col gap-2 text-slate-600">
            <label>Name</label>
            <input
              name="name"
              type="text"
              className="px-4 py-2 rounded-md outline-purple-500 shadow-md"
              {...formik.getFieldProps("name")}
            />
            {formik.errors.name && formik.touched.name && (
              <div className="text-xs text-rose-500">{formik.errors.name}</div>
            )}
          </div>
          <div className="flex flex-col gap-2 text-slate-600">
            <label>Email</label>
            <input
              name="email"
              type="text"
              className="px-4 py-2 rounded-md outline-purple-500 shadow-md"
              {...formik.getFieldProps("email")}
            />
            {formik.errors.email && formik.touched.email && (
              <div className="text-xs text-rose-500">{formik.errors.email}</div>
            )}
          </div>
          <div className="flex flex-col gap-2 text-slate-600">
            <label>Password</label>
            <input
              name="password"
              type="text"
              className="px-4 py-2 rounded-md outline-purple-500 shadow-md"
              {...formik.getFieldProps("password")}
            />
            {formik.errors.password && formik.touched.password && (
              <div className="text-xs text-rose-500">
                {formik.errors.password}
              </div>
            )}
          </div>
          <button
            className="w-60 h-16 rounded-lg shadow-md bg-purple-500 text-white text-xl"
            type="submit"
          >
            LogIn
          </button>
        </form>
      </div>
    </Layout>
  );
}

export default signup;
