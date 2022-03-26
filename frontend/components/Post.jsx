import { BsThreeDots } from 'react-icons/bs'
import { ChatIcon, ShareIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import { AiOutlineHeart, AiFillHeart, AiFillDelete, AiFillEdit } from 'react-icons/ai'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import SidebarLink from './SidebarLink'
import { useState } from 'react'


const Post = ({
  name,
  username,
  description,
  likedBy,
  likes,
  liked,
  likedProfile,
  swipeImage,
  profileImage,
}) => {
  const [show, setShow] = useState()
  return (
    <>
      <div className=" justify-center relative flex w-full h-auto mb-4 ">
        <div className="lg:rounded-3xl md:rounded-3xl bg-skin-color4  h-[auto] w-[770px] lg:w-[770px] sm:m-0 lg:m-2">
          <div className="flex justify-between w-full px-6 pt-6 ">
            <div className="flex w-auto max-w-[280px] justify-between ">
              <div className="flex items-center justify-center w-14 h-14 p-0 cursor-pointer">
                <Image
                  src={profileImage}
                  width={180}
                  height={180}
                  className="rounded-full object-cover"
                />
              </div>
              <div className="flex flex-col items-start justify-center space-y-[7px] text-base cursor-pointer ml-2">
                <h6 className="text-md font-[500] leading-4">{name} </h6>
                <p className="text-[13px] leading-4 text-skin-muted">
                  {username}
                </p>
              </div>
            </div>
            <div className="flex w-10 justify-end">
              <button
                className="rounded-full w-7 grid place-items-center "
                onClick={() => setShow(!show)}
              >
                <BsThreeDots />
              </button>
              {show ? (
                <div
                  className={`absolute h-auto bg-skin-color7 z-10 top-20 p-1 rounded-2xl`}
                >
                  <SidebarLink text="Edit" icon={AiFillEdit} />
                  <SidebarLink text="Delete" icon={AiFillDelete} />
                </div>
              ) : null}
            </div>
          </div>

          <div className="flex justify-center w-full text-left px-6 py-4 ">
            <p className="text-sm">{description}</p>
          </div>

          <div className="w-full h-auto lg:px-6 md:px-6 mt-4">
            <Image
              src={swipeImage}
              width={824}
              height={486}
              className="lg:rounded-[30px] object-cover"
            />
          </div>

          <div className="flex flex-wrap   w-full px-6 py-2 justify-between items-center">
            <div className="flex  items-center w-[110px] h-full justify-between py-1 mb-2">
              {liked == true ? (
                <AiFillHeart className={`h-[25px] w-[25px] text-red-600 `} />
              ) : (
                <AiOutlineHeart className={`h-[25px] w-[25px] } `} />
              )}
              <ChatIcon className="h-[25px]" />
              <ShareIcon className="h-[25px]" />
            </div>

            <div className="flex  w-auto h-full justify-evenly mb-2">
              <div className="flex items-center justify-center w-6 lg:w-8 lg:h-8 h-6 p-0 cursor-pointer">
                <Image
                  src={likedProfile}
                  width={180}
                  height={180}
                  className="rounded-full object-cover"
                />
              </div>

              <div className="flex flex-col items-start justify-center space-y-[7px] text-base cursor-pointer ml-2">
                <h1 className=" text-sm ">
                  Liked by <span className='text-skin-muted'>{likedBy}</span> & <span className='text-skin-muted'>{likes}</span> others
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Post
