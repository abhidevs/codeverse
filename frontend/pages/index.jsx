import Head from "next/head";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import BottomNavbar from "../components/BottomNavbar";
import Post from "../components/Post";
import CreatePost from "../components/CreatePost";
import PeopleYouFollow from "../components/PeopleYouFollow";
import PeopleToFolllow from "../components/PeopleToFolllow";
import "swiper/css/bundle";
import userData from "../data/data";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home | Codeverse</title>
        <meta name="description" content="Social media for programmers" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full h-full bg-skin-backgroud pb-16 text-skin-base">
        <Navbar />
        <div className="md:container mx-auto pt-20">
          <Sidebar />
          <BottomNavbar />

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
  );
}
