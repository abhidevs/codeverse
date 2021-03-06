import React from 'react'
import userData from '../data/data'
import Peoples from './Peoples'

const PeopleYouFollow = () => {
  return (
    <>
        <div className="mb-5 bg-skin-color4 rounded-3xl hidden lg:block ">
          <h3 className="p-4">people you follow</h3>
          {userData.map((data, ind) => (
            <Peoples
              key={ind}
              name={data.name}
              username={data.username}
              profileImage={data.profile}
              active={data.active}
            />
          ))}
          <div className="flex w-[255px] justify-center p-4">
            <button className=" py-2 w-full bg-skin-primary rounded-2xl">
              show more
            </button>
          </div>
        </div>
    </>
  )
}

export default PeopleYouFollow
