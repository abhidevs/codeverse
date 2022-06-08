import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { AiOutlineLink } from 'react-icons/ai'
import { BsFillPenFill } from 'react-icons/bs'
import { FaBirthdayCake } from 'react-icons/fa'
import { MdLocationOn } from 'react-icons/md'
import Post from '../../components/Post'
import userData from '../../data/data'
import axios from 'axios'
import { useSelector, shallowEqual } from 'react-redux'
import { useRouter } from 'next/router'
import LodingScreen from '../../components/LodingScreen'

const Profile = () => {
  const { user, accessToken } = useSelector((state) => state.auth, shallowEqual)
  const [data, setdata] = useState([])
  const [loding, setLoding] = useState(false)

  const router = useRouter()
  const { userId } = router.query

  const getData = async () => {
    setLoding(true)
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
      const { data } = await axios.get(
        `http://localhost:5000/api/users/${userId}`,
        config,
      )
      console.log(data.user)
      setdata(data.user)
      setLoding(false)
    } catch (error) {
      console.log(error)
      setLoding(false)
      alert(res.data.msg)
    }
  }
  useEffect(() => {
    getData()
  }, [])

  const handleClick = (getId) => {
    // console.log(getId);
    if (getId) {
      router.push(`/editprofile/${getId}`)
    } else {
      alert('not authenticate')
    }
  }

  if (loding) {
    return <LodingScreen />
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
                src="/image1.jpg"
                width={770}
                height={310}
                className="lg:rounded-tr-3xl md:rounded-tr-3xl lg:rounded-tl-3xl md:rounded-tl-3xl object-cover"
              />
            </div>

            <div className="flex absolute inset-x-0 bottom-[-35px] w-full h-auto px-4 justify-between items-center ">
              <div className="flex items-center justify-between w-20 h-20 p-0 cursor-pointer">
                <Image
                  src="/image1.jpg"
                  width={180}
                  height={180}
                  className="rounded-full object-cover"
                />
              </div>
              <button
                onClick={() => handleClick(data._id)}
                className="px-4 h-12 justify-center  bg-skin-primary rounded-3xl"
              >
                Edit Profile
              </button>
            </div>
          </div>

          <div className="flex justify-between px-4 mt-16">
            <div className=" h-auto">
              <h6 className="text-md font-[500] leading-4">{data.fullname} </h6>
              <p className="text-[13px] mt-1 leading-4 text-skin-muted">
                {data.username}
              </p>
            </div>
            <div className="h-auto text-right">
              <h6 className="text-md font-[500] leading-4">{data.gender}</h6>
              <p className="text-[13px] mt-1 leading-4 text-skin-muted">
                {data.email}
              </p>
            </div>
          </div>
          <div className="flex justify-between px-4 mt-4">
            <div className="flex">
              <AiOutlineLink className="mr-2" />
              <a
                href="https://www.devbisu.tk/"
                className="text-[13px] leading-4 text-skin-inverted "
              >
                {data.website}
              </a>
            </div>
            <div className="flex">
              <FaBirthdayCake className="mr-2" />
              <p
                target="_blank"
                className="text-[13px] leading-4 text-skin-muted "
              >
                {data.dob}
              </p>
            </div>
          </div>

          <div className=" justify-between px-4">
            <div className="flex mt-4">
              <BsFillPenFill className="mr-2" />
              <p className="text-sm leading-4">{data.bio}</p>
            </div>
            <div className="flex mt-4">
              <MdLocationOn className="mr-2" />
              <p className="text-sm leading-4">{data.address}</p>
            </div>
          </div>

          <div className="flex justify-between px-4 mt-4">
            <div className="flex">
              <p className="text-md font-[500] leading-4 text-skin-muted">
                21 Following
              </p>
            </div>
            <div className="flex mb-6">
              <p className="text-md font-[500] leading-4 text-skin-muted">
                31 Followers
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* user post  */}
      {userData.map((data, index) => (
        <Post
          key={index}
          name={data.name}
          username={data.username}
          description={data.description}
          liked={data.liked}
          likedBy={data.likedBy}
          likes={data.likes}
          likedProfile={data.likdeProfile}
          swipeImage={data.postImage}
          profileImage={data.profile}
        />
      ))}
    </div>
  )
}

Profile.profileRoute = true

export default Profile
