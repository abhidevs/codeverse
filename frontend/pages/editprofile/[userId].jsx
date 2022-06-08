import Image from "next/image";
import React, { useEffect, useState } from "react";
import Head from "next/head";

import PencilAltIcon from "@heroicons/react/solid/PencilAltIcon";
import axios from "axios";
import { useRouter } from "next/router";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import API from "../../api/api";
import { setUser } from "../../store/authSlice";

const EditProfile = () => {
  const router = useRouter();
  const { userId } = router.query;
  const { user, accessToken } = useSelector(
    (state) => state.auth,
    shallowEqual
  );
  const dispatch = useDispatch();
  // console.log(userId);

  const [formData, setFormData] = useState({
    fullname: "",
    username: "",
    email: "",
    bio: "",
    gender: "",
    address: "",
    dob: "",
    website: "",
  });
  const [loding, setLoding] = useState(false);

  useEffect(() => {
    setFormData(user);
  }, [user]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { fullname, username, email, bio, gender, address, dob, website } =
      formData;
    try {
      setLoding(true);
      const { data } = await axios.patch(
        `${API}/users/updateuser/${userId}`,
        { fullname, username, email, bio, gender, address, dob, website },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      
      // console.log(data);
      setLoding(false);
      alert("user updated succcesfully");
      dispatch(setUser(formData));
      router.push(`/profile/${user._id}`);
    } catch (error) {
      console.log(error?.response?.data?.msg || "Something went wrong");
      setLoding(false);
    }
  };

  return (
    <div>
      <Head>
        <title>Edit profile | Codeverse</title>
        <meta name="description" content="Social media for programmers" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full h-full bg-skin-backgroud text-skin-base ">
        <div className="container">
          <div className="grid w-full h-full place-items-center">
            <div className=" w-auto max-w-[770px] lg:w-[770px] h-auto  m-2 bg-skin-color4 rounded-2xl">
              <div className="flex items-center justify-center cursor-pointer">
                <Image
                  src={
                    user?.coverimage ||
                    "https://wallpaperaccess.com/full/1712825.jpg"
                  }
                  alt="profile image"
                  width={850}
                  height={150}
                  className="object-cover rounded-tl-2xl rounded-tr-2xl"
                />
              </div>
              <div className="flex items-center justify-center cursor-pointer">
                <Image
                  src={
                    user?.avatar ||
                    "https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
                  }
                  alt="profile image"
                  width={50}
                  height={50}
                  className="object-cover rounded-full"
                />
              </div>
              <h5 className="text-blue-600 w-full text-center text-skin-base text-[10px] ">
                Change Profile Picture
              </h5>
              <div className="flex justify-evenly pt-6"></div>
              <form
                onSubmit={handleSubmit}
                className="w-full grid items-center px-8 "
              >
                <div className="py-4">
                  <h2 className="text-blue-600"> Fullname </h2>
                  <div className="flex h-[40px] ">
                    <input
                      type="text"
                      name="fullname"
                      value={formData.fullname}
                      onChange={handleChange}
                      placeholder="Cristiano Ronaldo"
                      className="w-full outline-none bg-transparent text-skin-base text-sm"
                    />
                    <PencilAltIcon className=" h-[20px]  text-skin-base" />
                  </div>
                  <div className="w-ful bg-skin-secondary border border-skin-secondary"></div>
                </div>

                <div className="py-4">
                  <h2 className="text-blue-600">
                    Username{" "}
                    <small className="text-blue-400">
                      (Can not update username for now)
                    </small>
                  </h2>
                  <div className="flex h-[40px] ">
                    <input
                      type="text"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      readOnly
                      placeholder="Cristian247"
                      className="w-full outline-none bg-transparent text-gray-400 text-sm"
                    />
                    <PencilAltIcon className=" h-[20px]  text-skin-base" />
                  </div>
                  <div className="w-ful bg-skin-secondary border border-skin-secondary"></div>
                </div>

                <div className="py-4">
                  <h2 className="text-blue-600"> Email </h2>
                  <div className="flex h-[40px] ">
                    <input
                      type="text"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="iamcr7@gmail.com"
                      className="w-full outline-none bg-transparent text-skin-base text-sm"
                    />
                    <PencilAltIcon className=" h-[20px]  text-skin-base" />
                  </div>
                  <div className="w-ful bg-skin-secondary border border-skin-secondary"></div>
                </div>

                <div className="py-4">
                  <h2 className="text-blue-600"> Bio </h2>
                  <div className="flex h-[40px] ">
                    <input
                      type="text"
                      name="bio"
                      value={formData.bio}
                      onChange={handleChange}
                      placeholder="You know who i am"
                      className="w-full outline-none bg-transparent text-skin-base text-sm"
                    />
                    <PencilAltIcon className=" h-[20px]  text-skin-base" />
                  </div>
                  <div className="w-ful bg-skin-secondary border border-skin-secondary"></div>
                </div>

                <div className="py-4">
                  <h2 className="text-blue-600"> Gender </h2>
                  <div className="flex h-[40px] ">
                    <select
                      type="select"
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      placeholder="Male"
                      className="w-full outline-none bg-transparent text-skin-base text-sm"
                    >
                      <option value="select" className="bg-skin-color4">
                        select
                      </option>
                      <option value="Male" className="bg-skin-color4">
                        Male
                      </option>
                      <option value="Female" className="bg-skin-color4">
                        Female
                      </option>
                    </select>
                  </div>
                  <div className="w-ful bg-skin-secondary border border-skin-secondary"></div>
                </div>

                <div className="py-4">
                  <h2 className="text-blue-600"> Address </h2>
                  <div className="flex h-[40px] ">
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="Haldia, West Bengal, India"
                      className="w-full outline-none bg-transparent text-skin-base text-sm"
                    />
                    <PencilAltIcon className=" h-[20px]  text-skin-base" />
                  </div>
                  <div className="w-ful bg-skin-secondary border border-skin-secondary"></div>
                </div>

                <div className="py-4">
                  <h2 className="text-blue-600"> Date Of Birth </h2>
                  <div className="flex h-[40px] ">
                    <input
                      type="tel"
                      name="dob"
                      value={formData.dob}
                      onChange={handleChange}
                      placeholder="21 December 1999"
                      className="w-full outline-none bg-transparent text-skin-base text-sm"
                    />
                    <PencilAltIcon className=" h-[20px]  text-skin-base" />
                  </div>
                  <div className="w-ful bg-skin-secondary border border-skin-secondary"></div>
                </div>

                <div className="py-4">
                  <h2 className="text-blue-600"> Links </h2>
                  <div className="flex h-[40px] ">
                    <input
                      type="text"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      placeholder="www.backbenchers.com"
                      className="w-full outline-none bg-transparent text-skin-base text-sm"
                    />
                    <PencilAltIcon className=" h-[20px]  text-skin-base" />
                  </div>
                  <div className="w-full bg-skin-secondary border border-skin-secondary"></div>
                </div>

                <div className="flex w-full justify-center">
                  <button
                    type="submit"
                    className="w-[200px] h-[40px] m-4  bg-skin-primary text-skin-base rounded-2xl"
                  >
                    {!loding ? "save" : "please wait.."}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

EditProfile.profileRoute = true;

export default EditProfile;
