import Head from "next/head";
import CreatePost from "../components/CreatePost";
import Post from "../components/Post";
import userData from "../data/data";
import { wrapper } from "../store/store";
import axios from "axios";
import { setPosts } from "../store/postSlice";
import API from "../api/api";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { reduceArrToObj } from "../utils/reduceArrToObj";

export default function Home() {
  const { user, accessToken } = useSelector(
    (state) => state.auth,
    shallowEqual
  );

  const { posts } = useSelector((state) => state.post, shallowEqual);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   console.log({ user, posts });
  // }, [user, posts]);

  const fetchPosts = () => {
    // console.log({ user, accessToken });

    axios
      .get(`${API}/posts`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((res) => {
        const { posts: postData } = res.data;
        dispatch(setPosts(reduceArrToObj(postData)));
      })
      .catch((err) => {
        console.log(err?.response?.data || err);
      });
  };

  useEffect(() => {
    fetchPosts();
  }, [user, accessToken]);

  return (
    <div>
      <Head>
        <title>Home | Codeverse</title>
        <meta name="description" content="Social media for programmers" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <CreatePost />
        {Object?.keys(posts)?.map((idx) => {
          return (
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
              userPost={false}
            />
          );
        })}
      </div>
    </div>
  );
}
