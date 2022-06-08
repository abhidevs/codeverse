import Image from "next/image";
import React from "react";

const Comment = ({ profileImage, fullname, username, content }) => {
  return (
    <div className="flex h-auto w-full max-w-[770px] lg:w-[770px] px-2 ">
      <div className="flex items-center justify-center w-12 h-12 cursor-pointer">
        <Image
          src={
            profileImage ||
            "https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
          }
          width={180}
          height={180}
          className="rounded-full object-cover"
        />
      </div>
      <div className="flex flex-col justify-between w-full h-full mx-4 py-2 px-3 bg-skin-color4 rounded-lg ">
        <h6 className="text-base">{fullname}</h6>
        <p className="text-[13px] text-skin-muted mb-3">{username}</p>
        <p className="w-[90%] text-sm text-slate-200 mb-2">{content}</p>
        {/* <AiFillDelete className="w-7 h-7" /> */}
      </div>
    </div>
  );
};

export default Comment;
