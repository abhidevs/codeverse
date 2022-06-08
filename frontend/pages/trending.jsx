import axios from 'axios'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import API from '../api/api'
import LodingScreen from '../components/LodingScreen'
import Post from '../components/Post'
import userData from '../data/data'

export default function Trending() {
  const { user, accessToken } = useSelector((state) => state.auth, shallowEqual)
  const [loding, setLoding] = useState(false)
  const [data, setdata] = useState([])

  const getData = async () => {
    try {
      setLoding(true)
      const { data } = await axios.get(`${API}/posts/trends`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      setdata(data.posts)
      setLoding(false)
    } catch (error) {
      console.log(error?.response?.data?.msg || 'Something went wrong')
      setLoding(false)
    }
  }

  useEffect(() => {
    getData()
  }, [user, accessToken])
  if (loding) {
    return <LodingScreen />
  }

  return (
    <>
      <Head>
        <title>Trending | Codeverse</title>
        <meta name="description" content="Social media for programmers" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        {data.map((indx) => (
          <Post
            key={indx._id}
            postId={indx?._id}
            name={indx?.user?.fullname}
            username={indx?.user?.username}
            description={indx?.content}
            likes={indx?.likes}
            comments={indx?.comments}
            swipeImage={indx?.images[0].url}
            profileImage={indx.user.avatar}
            userPost={false}
          />
        ))} */}
      </div>
    </>
  )
}
