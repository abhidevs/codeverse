import React, { useState } from 'react'
import Head from 'next/head'
import { FcGoogle } from 'react-icons/fc'
import { BsFacebook } from 'react-icons/bs'
import { LockOpenIcon, MailIcon, UsersIcon } from '@heroicons/react/solid'
import Link from 'next/link'

const Register = () => {
  const [show, setShow] = useState('')
  return (
    <>
    <Head>
        <title>Register | Codeverse</title>
        <meta name="description" content="Social media for programmers" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bgimg">
        <div className="grid w-full h-full place-items-center">
          <div className="w-auto lg:w-[400px]  md:w-[400px] h-auto p-10 lg:p-14 md:p-14 m-2 bg-skin-color4 rounded-2xl">
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

            <form action="" className="w-full grid items-center pt-8">
              <div className="py-4">
                <div className="flex h-[40px] ">
                  <input
                    type="text"
                    placeholder="Enter your username"
                    className="w-full outline-none bg-transparent text-skin-base text-sm"
                  />
                  <UsersIcon className=" h-[30px]  text-skin-base" />
                </div>
                <div className="w-ful bg-skin-secondary border border-skin-secondary"></div>
              </div>

              <div className="py-4">
                <div className="flex h-[40px] ">
                  <input
                    type="text"
                    placeholder="Enter your email"
                    className="w-full outline-none bg-transparent text-skin-base text-sm"
                  />
                  <MailIcon className=" h-[30px]  text-skin-base" />
                </div>
                <div className="w-ful bg-skin-secondary border border-skin-secondary"></div>
              </div>
              
              <div className="py-4">
                <div className="flex h-[40px] ">
                  <input
                    type={show ? 'text' : 'password'}
                    placeholder="Enter your password"
                    className="w-full outline-none bg-transparent text-skin-base text-sm"
                  />
                  <LockOpenIcon className=" h-[30px] text-skin-base" />
                </div>
                <div className="w-ful bg-skin-secondary border border-skin-secondary"></div>
              </div>

              <div className="flex w-full items-center px-2 mb-2">
                  <input
                    type="checkbox"
                    placeholder="Enter your password"
                    className="outline-none bg-transparent mr-2"
                    onClick={() => setShow(!show)}
                  />
                  <p className='text-skin-base text-sm'>Show password</p>
                </div>

              <button className="py-4 w-full bg-skin-primary text-skin-base rounded-2xl">
                Register
              </button>
            </form>
            <div className="flex justify-center text-skin-inverted pt-2 text-sm">
              <Link href='/login'>
              <a>Already have an account?</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register
