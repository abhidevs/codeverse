import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineLink } from "react-icons/ai";
import { BsFillPenFill } from "react-icons/bs";
import { FaBirthdayCake } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import Post from "../../components/Post";
import userData from "../../data/data";
import axios from "axios";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import LodingScreen from "../../components/LodingScreen";
import API from "../../api/api";
import { setUser, setUserPosts } from "../../store/authSlice";
import { reduceArrToObj } from "../../utils/reduceArrToObj";

const Profile = () => {
  const { user, accessToken, userPosts } = useSelector(
    (state) => state.auth,
    shallowEqual
  );
  const dispatch = useDispatch();

  const [data, setdata] = useState([]);
  const [loding, setLoding] = useState(false);
  const [profile, setProfile] = useState(user);
  const [posts, setPosts] = useState(userPosts);

  const router = useRouter();
  const { userId } = router.query;

  const getUserData = async () => {
    setLoding(true);
    try {
      const { data } = await axios.get(`${API}/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      console.log(data.user);
      if (user && user._id === data.user._id) dispatch(setUser(data.user));
      else setProfile(data.user);
      setLoding(false);
    } catch (error) {
      console.log(error);
      setLoding(false);
      alert(error?.response?.data?.msg || error);
    }
  };

  const getUserPosts = async () => {
    try {
      const { data } = await axios.get(`${API}/posts/user/${userId}`);
      // console.log(data.posts);
      if (data?.posts?.length && user?._id === data?.posts[0]?.user?._id)
        dispatch(setUserPosts(reduceArrToObj(data.posts)));
      else setPosts(reduceArrToObj(data.posts));
    } catch (error) {
      console.log(error);
      alert(error?.response?.data?.msg || error);
    }
  };

  console.log({ userPosts });

  useEffect(() => {
    if (!userId) return;
    getUserData();
    getUserPosts();
  }, [userId]);

  useEffect(() => {
    if (user) setProfile(user);
    if (userPosts) setPosts(userPosts);
  }, [user, userPosts]);

  const handleClick = (getId) => {
    // console.log(getId);
    if (getId) {
      router.push(`/editprofile/${getId}`);
    } else {
      alert("not authenticated");
    }
  };

  if (loding) {
    return <LodingScreen />;
  }
  return (
    <div>
      <Head>
        <title>Profile | Codeverse</title>
        <meta name="description" content="Social media for programmers" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className=" justify-center relative flex h-auto lg:mb-5 mb-3 ">
        <div className="lg:rounded-3xl md:rounded-3xl bg-skin-color4 h-auto w-auto max-w-[770px] lg:w-[770px]">
          <div className="relative">
            <div className="w-auto max-w-[770px] lg:w-[770px] m-auto overflow-hidden">
              <Image
                src={
                  profile?.coverimage ||
                  "https://wallpaperaccess.com/full/1712825.jpg"
                }
                width={770}
                height={310}
                className="lg:rounded-tr-3xl md:rounded-tr-3xl lg:rounded-tl-3xl md:rounded-tl-3xl object-cover"
              />
            </div>

            <div className="flex absolute inset-x-0 bottom-[-35px] w-full h-auto px-4 justify-between items-center ">
              <div className="flex items-center justify-between w-20 h-20 p-0 cursor-pointer">
                <Image
                  src={
                    profile?.avatar ||
                    "https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
                  }
                  width={180}
                  height={180}
                  className="rounded-full object-cover"
                />
              </div>
              {user && user?._id === userId && (
                <button
                  onClick={() => handleClick(user?._id)}
                  className="px-4 h-12 justify-center  bg-skin-primary rounded-3xl"
                >
                  Edit Profile
                </button>
              )}
            </div>
          </div>

          <div className="flex justify-between px-4 mt-16">
            <div className=" h-auto">
              <h6 className="text-md font-[500] leading-4">
                {profile?.fullname}
              </h6>
              <p className="text-[13px] mt-1 leading-4 text-skin-muted">
                {profile?.username}
              </p>
            </div>
            <div className="h-auto text-right">
              <h6 className="text-md font-[500] leading-4">
                {profile?.gender || "Male"}
              </h6>
              <p className="text-[13px] mt-1 leading-4 text-skin-muted">
                {profile?.email}
              </p>
            </div>
          </div>
          <div className="flex justify-between px-4 mt-4">
            {profile?.website && (
              <div className="flex">
                <AiOutlineLink className="mr-2" />
                <a
                  href="https://www.devbisu.tk/"
                  className="text-[13px] leading-4 text-skin-inverted "
                >
                  {profile?.website}
                </a>
              </div>
            )}
            <div className="flex">
              <FaBirthdayCake className="mr-2" />
              <p
                target="_blank"
                className="text-[13px] leading-4 text-skin-muted "
              >
                {profile?.dob || "Birthday not added"}
              </p>
            </div>
          </div>

          <div className=" justify-between px-4">
            <div className="flex mt-4">
              <BsFillPenFill className="mr-2" />
              <p className="text-sm leading-4">
                {profile?.bio || "Bio not added"}
              </p>
            </div>
            <div className="flex mt-4">
              <MdLocationOn className="mr-2" />
              <p className="text-sm leading-4">
                {profile?.address || "Address not added"}
              </p>
            </div>
          </div>

          <div className="flex justify-between px-4 mt-4">
            <div className="flex">
              <p className="text-md font-[500] leading-4 text-skin-muted">
                {profile?.following?.length ?? 0} Following
              </p>
            </div>
            <div className="flex mb-6">
              <p className="text-md font-[500] leading-4 text-skin-muted">
                {profile?.followers?.length ?? 0} Followers
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* user post  */}
      {posts &&
        Object?.keys(posts)?.map((idx) => (
          <Post
            key={posts[idx]?._id}
            postId={posts[idx]?._id}
            name={posts[idx]?.user?.fullname}
            username={posts[idx]?.user?.username}
            description={posts[idx]?.content}
            likes={posts[idx]?.likes}
            comments={posts[idx]?.comments}
            swipeImage={posts[idx]?.images[0].url}
            profileImage={posts[idx].user.avatar}
            userPost={true}
          />
        ))}
    </div>
  );
};

Profile.profileRoute = true;

export default Profile;
