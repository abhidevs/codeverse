import React, { useState } from "react";
import Head from "next/head";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import {
  LockOpenIcon,
  MailIcon,
  UserCircleIcon,
  PencilIcon,
} from "@heroicons/react/outline";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import axios from "axios";
import { setAccessToken, setUser } from "../store/authSlice";

const Register = () => {
  const initialFormData = {
    fullname: "",
    username: "",
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
    const { fullname, username, email, password } = { ...formData };

    if (!fullname || !username || !email || !password)
      return alert("Please enter all fields");

    axios
      .post(`api/auth/register`, { fullname, username, email, password })
      .then((res) => {
        console.log(res.data);
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
        <title>Register | Codeverse</title>
        <meta name="description" content="Social media for programmers" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bgimg ">
        <div className="grid h-full place-items-center justify-center pt-6 pb-20">
          <div className=" w-full mx-5 lg:w-[400px] md:w-[400px] h-auto p-10 lg:p-14 md:p-14 my-2 bg-skin-color4 rounded-2xl">
            <h1 className="w-full text-center text-skin-base text-[30px] ">
              Register
            </h1>
            <div className="flex justify-evenly pt-6">
              <button className="p-2 bg-white rounded-full">
                <FcGoogle className="w-[40px] h-[40px]" />
              </button>
              <button className="p-2 bg-white rounded-full">
                <BsFacebook className="w-[40px] h-[40px] text-skin-inverted" />
              </button>
            </div>

            <form
              onSubmit={handleSubmit}
              className="w-full grid items-center pt-8"
            >
              <div className="py-4">
                <div className="flex h-[40px] ">
                  <input
                    type="text"
                    name="fullname"
                    value={formData.fullname}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                    autoFocus
                    className="w-full outline-none bg-transparent text-skin-base text-sm"
                  />
                  <PencilIcon className=" h-[24px]  text-skin-base" />
                </div>
                <div className="w-ful bg-skin-secondary border border-skin-secondary"></div>
              </div>

              <div className="py-4">
                <div className="flex h-[40px] ">
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="Enter your username"
                    required
                    autoFocus
                    className="w-full outline-none bg-transparent text-skin-base text-sm"
                  />
                  <UserCircleIcon className=" h-[24px]  text-skin-base" />
                </div>
                <div className="w-ful bg-skin-secondary border border-skin-secondary"></div>
              </div>

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
                    className="w-full outline-none bg-transparent text-skin-base text-sm"
                  />
                  <MailIcon className=" h-[24px]  text-skin-base" />
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
                    className="w-full outline-none bg-transparent text-skin-base text-sm"
                  />
                  <LockOpenIcon className=" h-[24px] text-skin-base" />
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
                Register
              </button>
            </form>
            <div className="flex justify-center text-skin-inverted pt-2 text-sm">
              <Link href="/login">
                <a>Already have an account?</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Register.authRoute = true;

export default Register;
