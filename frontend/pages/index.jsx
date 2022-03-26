import Head from 'next/head'
import Navbar from '../components/Navbar'
import Post from '../components/Post'
import Sidebar from '../components/Sidebar'
import 'swiper/css/bundle'
import userData from '../data/data'
import CreatePost from '../components/CreatePost'
import PeopleYouFollow from '../components/PeopleYouFollow'
import PeopleToFolllow from '../components/PeopleToFolllow'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home | Codeverse</title>
        <meta name="description" content="Social media for programmers" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-auto h-full bg-skin-backgroud pb-1 text-skin-base ">
        <Navbar />
        <div className="lg:container  md:container pt-20">
          <Sidebar />
          <div className="absolute right-24 w-[260px] h-auto ">
            <PeopleYouFollow />
            <PeopleToFolllow />
          </div>
          <CreatePost />
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
      </main>
    </div>
  )
}
