import React, { useContext, useState } from "react";
import LockIcon from "./LockIcon";

import { useFormik } from "formik";
import * as Yup from "yup";
import { LoginParams } from "@/types/auth";
import { AuthContext } from "@/context/AuthContext";
import { AxiosError } from "axios";
import toast from "react-hot-toast";

type Props = {};

export default function LoginForm({}: Props) {
  const { login } = useContext(AuthContext);
  const [loading, setLoading] = useState<boolean>(false);

  const initialValues: LoginParams = {
    username: "emilys",
    password: "emilyspass",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required(),
    password: Yup.string().required(),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      setLoading(true);
      const handleError = async (err: AxiosError<{ message: string }>) => {
        toast.error(err?.response.data.message);
      };
      login(values, handleError);
    },
  });

  return (
    <div>
      <div className="text-center mt-24">
        <div className="flex items-center justify-center">
          <LockIcon />
        </div>
        <h2 className="text-4xl tracking-tight">Sign in into your account</h2>
      </div>
      <div className="flex justify-center my-2 mx-4 md:mx-0">
        <form
          onSubmit={formik.handleSubmit}
          className="w-full max-w-xl bg-white rounded-lg shadow-md p-6"
        >
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-full px-3 mb-6">
              <label
                className={`block uppercase tracking-wide text-${
                  formik.errors.username ? "red" : "gray"
                }-700 text-xs font-bold mb-2`}
                htmlFor="Username"
              >
                Username
              </label>
              <input
                id="Username"
                className={`appearance-none block w-full bg-white text-gray-900 font-medium border border-${
                  formik.errors.username ? "red" : "gray"
                }-400 rounded-lg py-3 px-3 leading-tight focus:outline-none`}
                type="text"
                name="username"
                value={formik.values.username}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <span className="text-red-700 text-xs">
                {formik?.errors.username}
              </span>
            </div>

            <div className="w-full md:w-full px-3 mb-6">
              <label
                className={`block uppercase tracking-wide text-${
                  formik.errors.password ? "red" : "gray"
                }-700 text-xs font-bold mb-2`}
                htmlFor="Password"
              >
                Password
              </label>
              <input
                id="Password"
                className={`appearance-none block w-full bg-white text-gray-900 font-medium border border-${
                  formik.errors.password ? "red" : "gray"
                }-400 rounded-lg py-3 px-3 leading-tight focus:outline-none`}
                type="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <span className="text-red-700 text-xs">
                {formik?.errors.password}
              </span>
            </div>

            <div className="w-full md:w-full px-3 mb-6">
              <button
                disabled={loading}
                className="appearance-none block w-full bg-blue-600 text-gray-100 font-bold border border-gray-200 rounded-lg py-3 px-3 leading-tight hover:bg-blue-500"
              >
                Sign in
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
