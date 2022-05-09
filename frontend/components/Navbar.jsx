import Image from 'next/image'
import { useEffect, useState, useRef } from 'react'
import { LogoutIcon, PlusIcon, TrendingUpIcon } from '@heroicons/react/outline'
import { FaSearch } from 'react-icons/fa'
import SidebarLink from './SidebarLink'
import Link from 'next/link'

const Navbar = () => {
  const [show, setShow] = useState(false)
  const [colorChange, setColorchange] = useState(false)
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true)
    } else {
      setColorchange(false)
    }
  }

  const ref = useRef()

  useEffect(() => {
    window.addEventListener('scroll', changeNavbarColor)

    const checkIfClickedOutside = (e) => {
      if (show && ref.current && !ref.current.contains(e.target)) {
        setShow(false)
      }
    }
    document.addEventListener('click', checkIfClickedOutside)
    return () => {
      document.removeEventListener('click', checkIfClickedOutside)
    }
  }, [show])

  const user = true

  return (
    <>
      <nav
        className={`fixed flex flex-wrap items-center justify-between lg:py-3 py-1.5  ${
          colorChange ? 'navbar-glassmorphism' : 'bg-skin-color4'
        } w-full z-[1000] `}
      >
        <div className="flex justify-between items-center w-full container mx-auto px-18">
          <Link href="/">
            <a>
              <div className="lg:text-2xl text-xl h-full p-1 w-48 cursor-pointer">
                <span className="text-skin-base font-semibold">Code</span>
                <span className="text-skin-inverted font-bold">Verse</span>
              </div>
            </a>
          </Link>
          {user && (
            <>
              <div className="hidden justify-center border-none bg-skin-color7 w-auto rounded-full p-1">
                <div className="content-center grid text-skin-base bg-skin-color7 ml-3 p-2">
                  <FaSearch />
                </div>
                <input
                  type="text"
                  placeholder="Search for posts, people or topics ..."
                  className=" mx-3 hidden w-80 lg:w-96  text-skin-base bg-skin-color7 border-none outline-none"
                />
              </div>
            </>
          )}

          <div
            className="flex justify-end items-center  w-48 space-x-4 lg:space-x-8 md:space-x-8"
            ref={ref}
          >
            {user ? (
              <>
                <Link href="/#">
                  <button className=" rounded-full bg-skin-color7 hover:bg-skin-primary text-skin-base p-1 ease-in-out duration-300  w-[34px] h-[34px] lg:w-[36px] lg:h-[36px] md:w-[36px] md:h-[36px]  flex items-center justify-center">
                    <a>
                      <PlusIcon className="h-5" />
                    </a>
                  </button>
                </Link>
                <Link href="/trending">
                  <button className="rounded-full bg-skin-color7 hover:bg-skin-primary text-skin-base p-1 ease-in-out duration-300  w-[36px] h-[36px]  hidden lg:flex items-center justify-center">
                    <a>
                      <TrendingUpIcon className="h-5" />
                    </a>
                  </button>
                </Link>
                <div
                  className="flex items-center justify-center lg:w-[44px] lg:h-[44px] w-[38px] h-[38px] cursor-pointer"
                  onClick={() => setShow(!show)}
                >
                  <Image
                    src="/dummyProfileImg.jpg"
                    alt="profile image"
                    width={180}
                    height={180}
                    className="object-cover rounded-full"
                  />
                </div>
              </>
            ) : (
              <>
                <Link href="/login">
                  <button className=" md:block py-1 w-36 bg-skin-primary text-skin-base rounded-2xl">
                    <a> login</a>
                  </button>
                </Link>
                <Link href="/register">
                  <button className="hidden lg:block py-1 w-36 bg-skin-primary text-skin-base rounded-2xl">
                    <a>Register</a>
                  </button>
                </Link>
              </>
            )}
            {show && (
              <div
                className={`absolute h-auto bg-skin-color7 top-12 lg:top-16 md:top-16 rounded-2xl`}
              >
                <SidebarLink text="Logout" icon={LogoutIcon} link="/login" />
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
