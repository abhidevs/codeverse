import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { FaSearch, FaPlus } from 'react-icons/fa'
import { BsGraphUp } from 'react-icons/bs'

const Navbar = () => {
  const [colorChange, setColorchange] = useState(false)
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true)
    } else {
      setColorchange(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', changeNavbarColor)
  }, [])

  return (
    <>
      <nav
        className={`fixed flex flex-wrap items-center justify-between  py-3  ${
          colorChange ? 'bg-[#070808f1]' : 'bg-[#232226]'
        } w-full`}
      >
        <div className="flex justify-between w-full container px-28">
          <div className="text-2xl font-medium h-full p-1 w-48">
            <span className="text-[#0061FF]">Code</span>
            <span className="text-white">Verse</span>
          </div>

          <div className="flex justify-center border-none bg-[#3D3D46] w-auto rounded-full p-1">
            <div className="content-center grid text-white bg-[#3D3D46] ml-3 p-2">
              <FaSearch />
            </div>
            <input
              type="text"
              placeholder="Search for posts, people or topics ..."
              className=" mx-3 w-96  text-white bg-[#3D3D46] border-none outline-none"
            />
          </div>

          <div className="flex justify-between w-48">
            <button className="rounded-full bg-[#3D3D46] hover:bg-[#0061FF] text-white p-3 ease-in-out duration-300">
              <FaPlus />
            </button>
            <button className="rounded-full bg-[#3D3D46] hover:bg-[#0061FF] text-white p-3 ease-in-out duration-300">
              <BsGraphUp />
            </button>
            <Image
              src="/profileimage.jpg"
              alt="profile image"
              width={40}
              height={20}
              className="object-cover rounded-full"
            />
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
