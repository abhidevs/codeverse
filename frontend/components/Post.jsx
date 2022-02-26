import { useState, useEffect } from 'react'
import { BsThreeDots } from 'react-icons/bs'
import { ChatIcon, HeartIcon, ShareIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Autoplay, Pagination, Navigation } from 'swiper'
import userData from '../data/data'

const Post = () => {
  return (
    <>
      {userData.map((data, index) => (
        <div className=" justify-center relative flex w-full mb-4" key={index}>
          <div className="rounded-3xl bg-skin-color4  h-[auto] w-[770px] sm:m-0 lg:m-2">
            <div className="flex justify-between w-full px-6 py-4 ">

              <div className="flex w-auto max-w-[280px] justify-between ">
                <div className="flex items-center justify-center w-14 h-14 p-0 cursor-pointer">
                  <Image
                    src={data.profile}
                    width={180}
                    height={180}
                    className="rounded-full object-cover"
                  />
                </div>
                <div className="flex flex-col items-start justify-center space-y-[7px] text-base cursor-pointer ml-2">
                  <h6 className="text-md font-[500] leading-4">{data.name} </h6>
                  <p className="text-[13px] leading-4 text-skin-primary">
                    {data.username}
                  </p>
                </div>
              </div>
              <button className="rounded-full w-7 grid place-items-center">
                <BsThreeDots />
              </button>
            </div>

            <div className="flex justify-center w-full text-left px-6  ">
              <p className="text-sm">{data.description}</p>
            </div>
            
            <div className="relative">
              <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 1500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper w-24 min-w-full"
              >
                <SwiperSlide className="w-full px-6 mt-4">
                  <Image
                    src="/image1.jpg"
                    width={824}
                    height={486}
                    className="rounded-[30px] object-cover block"
                  />
                </SwiperSlide>
                <SwiperSlide className="w-full px-6 mt-4">
                  <Image
                    src="/image7.jpg"
                    width={824}
                    height={486}
                    className="rounded-[30px] object-cover block"
                  />
                </SwiperSlide>
              </Swiper>
            </div>

            <div className="flex flex-wrap   w-full px-6 py-2 justify-between items-center">
              <div className="flex  items-center w-[110px] h-full justify-between py-1 mb-2">
                <HeartIcon className="h-[25px]" />
                <ChatIcon className="h-[25px]" />
                <ShareIcon className="h-[25px]" />
              </div>
              <div className="flex  w-auto h-full justify-evenly mb-2">
                <div className="flex items-center justify-center w-8 h-8 p-0 cursor-pointer">
                  <Image
                    src="/profile2.jpg"
                    width={180}
                    height={180}
                    className="rounded-full object-cover"
                  />
                </div>
                <div className="flex flex-col items-start justify-center space-y-[7px] text-base cursor-pointer ml-2">
                  <h1 className=" text-sm ">
                    Liked by <span>{data.likedBy}</span> &{' '}
                    <span>{data.likes}</span> others
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default Post
