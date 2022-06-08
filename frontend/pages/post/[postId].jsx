import React, { useState } from "react";
import Post from "../../components/Post";
import Head from "next/head";
import Image from "next/image";
import { BiSend } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { wrapper } from "../../store/store";
import axios from "axios";
import API from "../../api/api";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import Comment from "../../components/Comment";

const comment = ({ post }) => {
  const [likes, setLikes] = useState(post?.likes);
  const [comments, setComments] = useState(post?.comments);
  const { user, accessToken } = useSelector(
    (state) => state.auth,
    shallowEqual
  );
  const [commentInput, setCommentInput] = useState("");

  const dispatch = useDispatch();
  console.log(post);

  const addComment = async () => {
    if (!commentInput) return;

    try {
      const {
        data: { newComment },
      } = await axios.post(
        `${API}/comments`,
        {
          postId: post._id,
          content: commentInput,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      setCommentInput("");
      setComments([
        ...comments,
        {
          ...newComment,
          user: {
            _id: user.id,
            fullname: user.fullname,
            username: user.username,
            avatar: user.avatar,
          },
        },
      ]);
    } catch (error) {
      console.log(error?.response?.data?.msg || error);
    }
  };

  return (
    <>
      <Head>
        <title>post?.content | Codeverse</title>
        <meta name="description" content="Social media for programmers" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Post
          postId={post?._id}
          name={post?.user?.fullname}
          username={post?.user?.username}
          description={post?.content}
          likes={likes}
          setLikes={setLikes}
          comments={comments}
          swipeImage={
            post?.images && post?.images?.length && post?.images[0].url
          }
          profileImage={post?.user?.avatar}
          detailedPost
        />
      </div>
      <div className="justify-center relative flex h-auto lg:mb-5 mb-3 ">
        <div className="flex h-auto w-full max-w-[770px] lg:w-[770px] px-2 place-items-center ">
          <div className="flex items-center justify-center w-12 h-12 cursor-pointer">
            <Image
              src={
                user?.avatar ||
                "https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
              }
              width={180}
              height={180}
              className="rounded-full object-cover"
            />
          </div>
          <div className="flex w-full h-10 rounded-full mx-2 py-1 px-2 place-items-center bg-skin-color4">
            <input
              type="text"
              value={commentInput}
              onChange={(e) => setCommentInput(e.target.value)}
              className=" w-full h-full outline-none bg-transparent mx-4 "
            />
            <button onClick={addComment} className="mr-2 p-2">
              <BiSend className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 justify-center h-auto lg:mb-5 mb-3 ">
        {comments?.map((comment) => (
          <Comment
            profileImage={comment?.user?.avatar}
            fullname={comment?.user?.fullname}
            username={comment?.user?.username}
            content={comment.content}
          />
        ))}
      </div>
    </>
  );
};

export default comment;

export const getServerSideProps = wrapper.getServerSideProps(
  ({ dispatch }) =>
    async (ctx) => {
      const { postId } = ctx.params;

      const res = await axios.get(`${API}/posts/${postId}`).catch((err) => {
        console.log(err?.response?.data || err);
      });

      return {
        props: { post: res?.data?.post || {} },
      };
    }
);
