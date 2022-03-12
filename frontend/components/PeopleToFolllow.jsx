import React from 'react'
import userData from '../data/data'
import Peoples from './Peoples'

const PeopleToFolllow = () => {
  return (
    <div>
      <div className="my-2 bg-skin-color4 rounded-3xl p">
        <h3 className="p-4">people you follow</h3>
        {userData.map((data, ind) => (
          <Peoples
            key={ind}
            name={data.name}
            username={data.username}
            profileImage={data.profile}
            follow
          />
        ))}
        <div className="flex w-[255px] justify-center p-4">
          <button className=" py-2 w-full bg-skin-primary rounded-2xl">
            show more
          </button>
        </div>
      </div>
    </div>
  )
}

export default PeopleToFolllow
