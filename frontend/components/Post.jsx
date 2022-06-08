import { BsThreeDots } from "react-icons/bs";
import { ChatIcon, ShareIcon } from "@heroicons/react/outline";
import Image from "next/image";
import {
  AiOutlineHeart,
  AiFillHeart,
  AiFillDelete,
  AiFillEdit,
} from "react-icons/ai";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SidebarLink from "./SidebarLink";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { addLikeToPost, removeLikeFromPost } from "../store/postSlice";
import axios from "axios";
import API from "../api/api";
import { addLikeToUserPost, removeLikeFromUserPost } from "../store/authSlice";

const Post = ({
  postId,
  name,
  username,
  description,
  likes,
  swipeImage,
  profileImage,
  comments,
  userPost,
  detailedPost,
  setLikes,
}) => {
  const [show, setShow] = useState(false);
  const [likedByMe, setlikedByMe] = useState(false);
  const [initialDataLoaded, setInitialDataLoaded] = useState(false);

  const { user, accessToken } = useSelector(
    (state) => state.auth,
    shallowEqual
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (!likes || (detailedPost && initialDataLoaded)) return;

    let findMyLike;

    if (userPost) findMyLike = likes.filter((like) => like === user._id);
    else findMyLike = likes.filter((like) => like._id === user._id);

    // console.log({ likes, findMyLike, userId: user._id });
    if (findMyLike && findMyLike.length) setlikedByMe(true);
    else setlikedByMe(false);
    if (detailedPost && !initialDataLoaded) setInitialDataLoaded(true);
  }, [likes]);

  console.log({ likes });

  const ref = useRef();

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (show && ref.current && !ref.current.contains(e.target)) {
        setShow(false);
      }
    };
    document.addEventListener("click", checkIfClickedOutside);
    return () => {
      document.removeEventListener("click", checkIfClickedOutside);
    };
  }, [show]);

  const likePost = async () => {
    try {
      await axios.patch(
        `${API}/posts/${postId}/like`,
        {},
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      setlikedByMe(true);
      if (detailedPost) setLikes([...likes, 1]);
      else if (userPost)
        dispatch(addLikeToUserPost({ postId, likeId: user._id }));
      else dispatch(addLikeToPost({ postId, likeId: user._id }));
    } catch (error) {
      console.log(error?.response?.data?.msg || error);
    }
  };

  const unlikePost = async () => {
    try {
      await axios.patch(
        `${API}/posts/${postId}/unlike`,
        {},
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      setlikedByMe(false);

      if (detailedPost) setLikes(likes.slice(0, -1));
      else if (userPost)
        dispatch(removeLikeFromUserPost({ postId, likeId: user._id }));
      else dispatch(removeLikeFromPost({ postId, likeId: user._id }));
    } catch (error) {
      console.log(error?.response?.data?.msg || error);
    }
  };
  return (
    <div className=" justify-center relative flex h-auto lg:mb-5 mb-3">
      <div className="lg:rounded-3xl md:rounded-3xl bg-skin-color4  h-auto w-auto max-w-[770px] lg:w-[770px]">
        <Link href={`/post/${postId}`}>
          <a>
            <div className="flex justify-between w-full px-6 pt-6 ">
              <div className="flex w-auto max-w-[280px] justify-between ">
                <div className="flex items-center justify-center w-14 h-14 p-0 cursor-pointer">
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
                <div className="flex flex-col items-start justify-center space-y-[7px] text-base cursor-pointer ml-2">
                  <h6 className="text-md font-[500] leading-4">{name} </h6>
                  <p className="text-[13px] leading-4 text-skin-muted">
                    {username}
                  </p>
                </div>
              </div>
              <div className="flex w-10 justify-end" ref={ref}>
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
              <p className="w-full text-sm">{description}</p>
            </div>

            {swipeImage && (
              <div className="w-full h-auto lg:px-6 md:px-6 mt-4">
                <Image
                  src={swipeImage}
                  width={824}
                  height={486}
                  className="rounded-lg object-cover align-middle"
                />
              </div>
            )}
          </a>
        </Link>

        <div className="flex flex-wrap w-full px-6 py-2 justify-between items-center">
          <div className="flex gap-3 items-center w-[150px] h-full justify-between py-1 mb-2">
            {likedByMe ? (
              <button onClick={unlikePost} className="flex gap-2">
                <AiFillHeart className={`h-[25px] w-[25px] text-red-600 `} />{" "}
                {likes?.length && likes?.length}
              </button>
            ) : (
              <button onClick={likePost} className="flex gap-2">
                <AiOutlineHeart className={`h-[25px] w-[25px] } `} />
                {likes?.length && likes?.length}
              </button>
            )}
            <Link href={`/post/${postId}`}>
              <a>
                <ChatIcon className="h-[25px]" />
              </a>
            </Link>
            {comments?.length && comments?.length}
            <ShareIcon className="h-[25px]" />
          </div>

          {/* <div className="flex  w-auto h-full justify-evenly mb-2">
              <div className="flex items-center justify-center w-6 lg:w-8 lg:h-8 h-6 p-0 cursor-pointer">
                <Image
                src={
                  likedProfile ||
                  "https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
                }
                width={180}
                height={180}
                className="rounded-full object-cover"
                />
                </div>
                
                <div className="flex flex-col items-start justify-center space-y-[7px] text-base cursor-pointer ml-2">
                <h1 className=" text-sm ">
                  Liked by <span className="text-skin-muted">{likedBy}</span> &{" "}
                  <span className="text-skin-muted">{likes}</span> others
                  </h1>
                  </div>
                </div> */}
        </div>
      </div>
    </div>
  );
};

export default Post;
