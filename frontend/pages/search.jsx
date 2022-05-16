import Head from 'next/head'
import Post from '../components/Post'
import userData from '../data/data'
import Image from 'next/image'
import { FaSearch } from 'react-icons/fa'
import LodingScreen from '../components/LodingScreen'

export default function search() {
  return (
    <div>
      <Head>
        <title>Home | Codeverse</title>
        <meta name="description" content="Social media for programmers" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className=" justify-center  flex w-full lg:mb-5 mb-3">
        <div className="lg:rounded-3xl md:rounded-3xl bg-skin-color4 h-auto w-[770px]">
          <div className=" justify-center flex border-none bg-skin-color4 w-auto rounded-full p-1">
            <div className="content-center grid text-skin-base bg-skin-color4 ml-3 p-2">
              <FaSearch />
            </div>
            <input
              type="text"
              placeholder="Search for posts, people or topics ..."
              className=" mx-3 w-full text-skin-base bg-skin-color4 border-none outline-none"
            />
          </div>
        </div>
      </div>
      
      <LodingScreen />

      <div>
        {/* {userData.map((data, index) => (
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
      ))} */}
      </div>
    </div>
  )
}
