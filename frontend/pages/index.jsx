import Head from 'next/head'
import { AiFillCodeSandboxSquare } from 'react-icons/ai'
import Navbar from '../components/Navbar'
import Post from '../components/Post'
import Sidebar from '../components/Sidebar'
import 'swiper/css/bundle'
import userData from '../data/data'
import CreatePost from '../components/CreatePost'
import FollowPeople from '../components/FollowPeople'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home | Codeverse</title>
        <meta name="description" content="Social media for programmers" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full h-full bg-skin-backgroud text-skin-base ">
        <Navbar />
        <div className="container pt-20">
          <Sidebar />
          <FollowPeople />
          <CreatePost />
          {userData.map((data, index) => (
            <Post
              key={index}
              name={data.name}
              username={data.username}
              description={data.description}
              likedBy={data.likedBy}
              likes={data.likes}
              likedProfile={data.likdeProfile}
              swipeImage={data.postImage}
              profileImage={data.profile}
            />
          ))}
        </div>
      </main>
    </div>
  )
}
