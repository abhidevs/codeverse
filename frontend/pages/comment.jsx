import React from 'react'
import Post from '../components/Post'
import Head from 'next/head'
import Image from 'next/image'
import { BiSend } from 'react-icons/bi'
import { AiFillDelete } from 'react-icons/ai'

const comment = () => {
  return (
    <>
      <Head>
        <title>Comment | Codeverse</title>
        <meta name="description" content="Social media for programmers" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Post
          name="Biswanath Bera"
          username="@bisu03"
          description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters"
          liked={true}
          likedBy="@elon"
          likes="280"
          likedProfile="/profile1.jpg"
          swipeImage="/image1.jpg"
          profileImage="/profile2.jpg"
        />
      </div>
      <div className="justify-center relative flex h-auto lg:mb-5 mb-3 ">
        <div className="flex h-auto w-full max-w-[770px] lg:w-[770px] px-2 place-items-center ">
          <div className="flex items-center justify-center w-12 h-12 cursor-pointer">
            <Image
              src="/profile2.jpg"
              width={180}
              height={180}
              className="rounded-full object-cover"
            />
          </div>
          <div className="flex w-full h-10 rounded-full mx-2 py-1 px-2 place-items-center bg-skin-color4">
            <input
              type="text"
              className=" w-full h-full outline-none bg-transparent mx-4 "
            />
            <BiSend className="w-8 h-8 " />
          </div>
        </div>
      </div>
      <div className="justify-center relative flex h-auto lg:mb-5 mb-3 ">
        <div className="flex h-auto w-full max-w-[770px] lg:w-[770px] px-2 ">
          <div className="flex items-center justify-center w-12 h-12 cursor-pointer">
            <Image
              src="/profile2.jpg"
              width={180}
              height={180}
              className="rounded-full object-cover"
            />
          </div>
          <div className="flex justify-between w-full h-full mx-4 py-2 px-3 bg-skin-color4 rounded-lg ">
            <p className="w-[90%] text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              ipsa cumque laborum tempore eligendi voluptatem quas! Nulla,
              obcaecati? Laborum dolor est assumenda doloremque, alias
              cupiditate repudiandae sint optio, voluptatum unde, magnam
              repellendus?
            </p>
            <AiFillDelete className="w-7 h-7" />
          </div>
        </div>
      </div>
    </>
  )
}

export default comment
