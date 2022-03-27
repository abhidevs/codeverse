import React from 'react'
import Post from '../components/Post'
import Head from 'next/head'

const comment = () => {
  return (
    <>
      <Head>
        <title>Home | Codeverse</title>
        <meta name="description" content="Social media for programmers" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Post
          name="Biswanath Bera"
          username="@bisu03"
          description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters"
          liked={true}
          likedBy="@elon"
          likes="280"
          likedProfile="/profile1.jpg"
          swipeImage="/image1.jpg"
          profileImage="/profile2.jpg"
        />
      </div>
    </>
  )
}

export default comment
