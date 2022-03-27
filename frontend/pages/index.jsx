import Head from "next/head";
import Post from "../components/Post";
import CreatePost from "../components/CreatePost";
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

      <div>
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
    </div>
  );
}
