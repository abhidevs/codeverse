import Image from 'next/image'
import { useEffect, useState } from 'react'
import { PlusIcon, TrendingUpIcon } from '@heroicons/react/outline'
import { FaSearch } from 'react-icons/fa'

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
        className={`fixed flex flex-wrap items-center justify-between py-3  ${
          colorChange ? 'bg-[#070808f1] ' : 'bg-[#232226]'
        } w-full z-[1000]`}
      >
        <div className="flex justify-between items-center w-full container px-18">
          <div className="text-2xl font-medium h-full p-1 w-48 cursor-pointer">
            <span className="text-skin-base">Code</span>
            <span className="text-skin-inverted">Verse</span>
          </div>

          <div className="flex justify-center border-none bg-skin-color7 w-auto rounded-full p-1">
            <div className="content-center grid text-skin-base bg-skin-color7 ml-3 p-2">
              <FaSearch />
            </div>
            <input
              type="text"
              placeholder="Search for posts, people or topics ..."
              className=" mx-3 w-96  text-skin-base bg-skin-color7 border-none outline-none"
            />
          </div>

          <div className="flex justify-end items-center w-48 space-x-8">
            <button className="rounded-full bg-skin-color7 hover:bg-skin-primary text-skin-base p-1 ease-in-out duration-300 w-[36px] h-[36px] flex items-center justify-center">
              <PlusIcon className="h-5" />
            </button>
            <button className="rounded-full bg-skin-color7 hover:bg-skin-primary text-skin-base p-1 ease-in-out duration-300 w-[36px] h-[36px] flex items-center justify-center">
              <TrendingUpIcon className="h-5" />
            </button>
            <div className="flex items-center justify-center w-[44px] h-[44px] cursor-pointer">
              <Image
                src="/dummyProfileImg.jpg"
                alt="profile image"
                width={180}
                height={180}
                className="object-cover rounded-full"
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
