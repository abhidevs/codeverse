import Image from 'next/image'
import React from 'react'

const Peoples = ({ active, profileImage, name, username }) => {
  return (
    <>
      <div className="flex items-center justify-between w-auto max-w-[245px] px-6">
        <div className="flex items-center justify-start space-x-3 bg-skin-color4 rounded-3xl  py-3 w-auto max-w-[240px]">
          <div className="flex items-center justify-center w-10 h-10 p-0 cursor-pointer">
            <Image
              src={profileImage}
              width={180}
              height={180}
              className="rounded-full object-cover"
            />
          </div>
          <div className="flex flex-col items-start justify-center space-y-[7px] text-base cursor-pointer">
            <h6 className="text-md font-[500] leading-4">{name}</h6>
            <p className="text-[13px] leading-4 text-skin-base">{username}</p>
          </div>
        </div>
        <div
          className={` ${
            active == 'true' ? 'bg-skin-primary' : 'bg-skin-color6'
          } w-2 h-2 rounded-3xl `}
        ></div>
      </div>
    </>
  )
}

export default Peoples
