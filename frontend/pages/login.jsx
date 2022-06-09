import React, { useState } from "react";
import Head from "next/head";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { LockOpenIcon, MailIcon } from "@heroicons/react/solid";
import Link from "next/link";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { GoogleLogin } from "react-google-login";
import { setUser, setAccessToken } from "../store/authSlice";
import { useRouter } from "next/router";

const Login = () => {
  const initialFormData = {
    email: "",
    password: "",
  };

  const [show, setShow] = useState("");
  const [formData, setFormData] = useState(initialFormData);

  const dispatch = useDispatch();
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = { ...formData };

    if (!email || !password) return alert("Please enter all fields");

    axios
      .post(`api/auth/login`, { email, password })
      .then((res) => {
        // console.log(res.data);
        const { user, access_token } = res.data;

        dispatch(setUser(user));
        dispatch(setAccessToken(access_token));

        localStorage.setItem(
          "codeverse_userSession",
          JSON.stringify(access_token)
        );
        localStorage.setItem("codeverse_user", JSON.stringify(user));
        router.push("/");
      })
      .catch((err) => {
        console.log(err?.response?.data || err);
        alert(err?.response?.data?.msg || "Something went wrong");
      });
  };

  return (
    <>
      <Head>
        <title>Login | Codeverse</title>
        <meta name="description" content="Social media for programmers" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bgimg">
        <div className="grid h-full place-items-center justify-center pt-6 pb-20">
          <div className=" w-full mx-5 lg:w-[400px] md:w-[400px] h-auto p-10 lg:p-14 md:p-14 my-2 bg-skin-color4 rounded-2xl">
            <h1 className="w-full text-center text-skin-base text-[30px] ">
              Login
            </h1>
            <div className="flex justify-evenly pt-6">
              <button className="p-2 bg-white rounded-full">
                <FcGoogle className="w-[40px] h-[40px] text-skin-inverted" />
              </button>
              <button className="p-2 bg-white rounded-full">
                <BsFacebook className="w-[40px] h-[40px] text-skin-inverted" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="w-full pt-8 m-auto">
              <div className="py-4">
                <div className="flex h-[40px] ">
                  <input
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                    autoFocus
                    className="w-full outline-none bg-transparent text-sm text-skin-base"
                  />
                  <MailIcon className=" h-[30px]  text-skin-base" />
                </div>
                <div className="w-ful bg-skin-secondary border border-skin-secondary"></div>
              </div>

              <div className="py-4">
                <div className="flex h-[40px] ">
                  <input
                    type={show ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    required
                    autoFocus
                    className="w-full outline-none bg-transparent text-sm text-skin-base"
                  />
                  <LockOpenIcon className=" h-[30px] text-skin-base" />
                </div>
                <div className="w-ful bg-skin-secondary border border-skin-secondary"></div>
              </div>

              <div className="flex w-full items-center px-2 mb-2">
                <input
                  type="checkbox"
                  id="showPassword"
                  className="outline-none bg-transparent mr-2"
                  onClick={() => setShow(!show)}
                />
                <label
                  className="text-skin-base text-sm"
                  htmlFor="showPassword"
                >
                  Show password
                </label>
              </div>

              <button
                type="submit"
                className="py-3 w-full bg-skin-primary text-skin-base rounded-2xl"
              >
                Login
              </button>
            </form>

            <div className="flex justify-center w-auto m-auto">
              <Link href="/register">
                <button className="py-3 my-4 w-full  bg-skin-primary text-skin-base rounded-2xl">
                  <a> Register</a>
                </button>
              </Link>
            </div>
            <div className="flex justify-center text-skin-inverted text-sm">
              <a href="#">Forgot passoword</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Login.authRoute = true;

export default Login;
