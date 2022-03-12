import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { BsFacebook } from 'react-icons/bs'
import { LockOpenIcon, MailIcon } from '@heroicons/react/solid'
import Link from 'next/link'
const Login = () => {
  return (
    <>
      <div className="bgimg">
        <div className="grid w-full h-full place-items-center">
          <div className="w-[400px] h-auto p-14 bg-skin-color4 rounded-2xl">
            <h1 className="w-full text-center text-skin-base text-[30px] ">
              Login
            </h1>
            <div className="flex justify-evenly pt-6">
              <button className="p-2 bg-white rounded-full">
                <FcGoogle className="w-[40px] h-[40px]" />
              </button>
              <button className="p-2 bg-white rounded-full">
                <BsFacebook className="w-[40px] h-[40px] text-skin-inverted" />
              </button>
            </div>

            <form action="" className="w-[300px] m-auto pt-8">
              <div className="py-4">
                <div className="flex h-[40px] ">
                  <input
                    type="text"
                    placeholder="Enter your email"
                    className="w-full outline-none bg-transparent "
                  />
                  <MailIcon className=" h-[30px]  text-skin-base" />
                </div>
                <div className="w-ful bg-skin-secondary border border-skin-secondary"></div>
              </div>

              <div className="py-4">
                <div className="flex h-[40px] ">
                  <input
                    type="text"
                    placeholder="Enter your password"
                    className="w-full outline-none bg-transparent "
                  />
                  <LockOpenIcon className=" h-[30px] text-skin-base" />
                </div>
                <div className="w-ful bg-skin-secondary border border-skin-secondary"></div>
              </div>
              <button className="py-4 w-full bg-skin-primary text-skin-base rounded-2xl">
                Login
              </button>
            </form>

            <div className="flex w-[300px] justify-center">
              <Link href="/register">
                <button className="py-4 my-4 w-full  bg-skin-primary text-skin-base rounded-2xl">
                  <a> Register</a>
                </button>
              </Link>
            </div>
            <div className="flex justify-center text-skin-inverted">
              <a href="#">Forgot passowrd</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
